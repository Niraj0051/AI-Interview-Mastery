// analyticsdata.js
import { db } from '@/utils/db'
import { MockInterview, UserAnswer } from '@/utils/schema'
import { eq, count, avg, sql, desc } from 'drizzle-orm'
import { currentUser } from '@clerk/nextjs/server'

export async function getAnalyticsData() {
  try {
    const user = await currentUser();
    const email = user?.emailAddresses[0]?.emailAddress;
    
    if (!email) throw new Error('User email not found');

    const [totalResult, ratingResult, recentInterviews, historyResult, ratingsData] = await Promise.all([
      // 1. Total interviews count
      db.select({ count: count() })
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, email)),

      // 2. Average rating
      db.select({ avg: avg(sql`CAST(${UserAnswer.rating} AS NUMERIC)`) })
        .from(UserAnswer)
        .innerJoin(MockInterview, eq(UserAnswer.mockIdRef, MockInterview.mockId))
        .where(eq(MockInterview.createdBy, email)),

      // 3. Recent interviews
      db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, email))
        .orderBy(desc(MockInterview.createdAt))
        .limit(3),

      // 4. Historical data (last 6 months)
      db.execute(sql`
        SELECT 
          TO_CHAR(TO_DATE(${MockInterview.createdAt}, 'DD-MM-YYYY'), 'Mon') AS month,
          COUNT(*)::int AS count
        FROM ${MockInterview}
        WHERE ${MockInterview.createdBy} = ${email}
          AND TO_DATE(${MockInterview.createdAt}, 'DD-MM-YYYY') >= (CURRENT_DATE - INTERVAL '6 months')
        GROUP BY TO_CHAR(TO_DATE(${MockInterview.createdAt}, 'DD-MM-YYYY'), 'Mon'),
                EXTRACT(MONTH FROM TO_DATE(${MockInterview.createdAt}, 'DD-MM-YYYY'))
        ORDER BY EXTRACT(MONTH FROM TO_DATE(${MockInterview.createdAt}, 'DD-MM-YYYY'))
      `),

      // 5. Ratings by interview type
      db.execute(sql`
        SELECT 
          ${MockInterview.mockId},
          ${MockInterview.jobPosition},
          AVG(CAST(${UserAnswer.rating} AS NUMERIC)) as avg_rating,
          ROW_NUMBER() OVER (ORDER BY MIN(${UserAnswer.createdAt})) as interview_number
        FROM ${MockInterview}
        JOIN ${UserAnswer} ON ${MockInterview.mockId} = ${UserAnswer.mockIdRef}
        WHERE ${MockInterview.createdBy} = ${email}
        GROUP BY ${MockInterview.mockId}, ${MockInterview.jobPosition}
        ORDER BY MIN(${UserAnswer.createdAt}) ASC
      `)
    ]);

    // Process chart data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();
    const last6Months = months.slice(Math.max(0, currentMonth - 5), currentMonth + 1);

    const chartData = last6Months.map(month => ({
      name: month,
      value: historyResult.rows.find(item => item.month === month)?.count || 0
    }));

    const ratingsChartData = ratingsData?.rows?.map(item => ({
      interviewNumber: item.interview_number,
      rating: parseFloat(item.avg_rating),
      interviewType: item.jobPosition,
      mockId: item.mockId
    })) || [];

    return {
      totalInterviews: totalResult[0]?.count || 0,
      averageRating: ratingResult[0]?.avg ? Math.round(ratingResult[0].avg * 10) / 10 : 0,
      chartData,
      recentInterviews: recentInterviews,
      ratingsChartData,
      userEmail: email
    };

  } catch (error) {
    console.error("Analytics data error:", error);
    return {
      totalInterviews: 0,
      averageRating: 0,
      chartData: [],
      recentInterviews: [],
      ratingsChartData: [],
      userEmail: "",
      error: error.message
    };
  }
}