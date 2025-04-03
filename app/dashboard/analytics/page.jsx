import { Suspense } from 'react'
import { getAnalyticsData } from './AnalyticsData'
import { AnalyticsBarChart, RatingsLineChart } from './AnalyticsChart'
import Link from 'next/link'
import { DownloadButton } from './DownloadButton'
import { FilteredRatingsChart } from './FilteredRatingsChart'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <Suspense fallback={<LoadingSkeleton />}>
        <AnalyticsContent />
      </Suspense>
    </div>
  )
}

async function AnalyticsContent() {
  const data = await getAnalyticsData();
  const { totalInterviews, averageRating, chartData, ratingsChartData, recentInterviews, userEmail } = data;

  const jobPositions = [
    ...new Set(ratingsChartData.map(item => item.interviewType))
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          📊 Interview Analytics
        </h1>
        <DownloadButton 
          data={data}
          userEmail={userEmail}
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Interviews" 
          value={totalInterviews}
          icon="📋"
          color="blue"
        />
        <StatCard 
          title="Average Rating" 
          value={averageRating ? `${averageRating}/10` : 'N/A'}
          icon="⭐"
          color="purple"
        />
        <StatCard 
          title="Active Months" 
          value={chartData.filter(m => m.value > 0).length}
          icon="🗓️"
          color="green"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            📈 Interview History (Last 6 Months)
          </h2>
          <div className="h-80">
            <AnalyticsBarChart data={chartData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🌟 Interview Ratings Timeline
            </h2>
            <div className="h-80">
                {ratingsChartData.length > 0 ? (
                <FilteredRatingsChart
                    data={ratingsChartData}
                    jobPositions={jobPositions}
                />
                ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                    No rating data available
                </div>
                )}
            </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          🕒 Recent Activity
        </h2>
        {recentInterviews.length > 0 ? (
          <ul className="space-y-3">
            {recentInterviews.map((interview) => (
              <li key={interview.mockId} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{interview.jobPosition}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {interview.jobExperience} years experience • {interview.createdAt}
                  </p>
                </div>
                <Link 
                  href={`/dashboard/interview/${interview.mockId}/feedback`}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                  View →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No recent interviews found</p>
            <Link href="/dashboard" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
              Start a new interview
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, color }) {
  const colors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-gray-500 font-medium">{title}</h3>
      </div>
      <p className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {value}
      </p>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-200 p-6 rounded-xl h-32 animate-pulse"></div>
        ))}
      </div>
      <div className="bg-gray-200 p-6 rounded-xl h-64 animate-pulse"></div>
      <div className="bg-gray-200 p-6 rounded-xl h-48 animate-pulse"></div>
    </div>
  )
}
