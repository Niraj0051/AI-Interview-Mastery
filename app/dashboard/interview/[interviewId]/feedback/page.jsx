// "use client";
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ChevronsUpDownIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter, useParams } from "next/navigation";

// function Feedback() {
//   const params = useParams(); // Get params using useParams()
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [avgRating, setAvgRating] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (params?.interviewId) {
//       getFeedback();
//     }
//   }, [params?.interviewId]);

//   const getFeedback = async () => {
//     try {
//       const result = await db
//         .select()
//         .from(UserAnswer)
//         .where(eq(UserAnswer.mockIdRef, params.interviewId))
//         .orderBy(UserAnswer.id);

//       setFeedbackList(result);
//       const totalRating = result.reduce(
//         (sum, item) => sum + Number(item.rating),
//         0
//       );
//       setAvgRating(Math.round(totalRating / result.length));
//     } catch (error) {
//       console.error("Error fetching feedback:", error);
//     }
//   };

//   return (
//     <div className="p-10">
//       {feedbackList.length === 0 ? (
//         <h2 className="font-bold text-xl text-gray-500">
//           No Interview Feedback Record Found
//         </h2>
//       ) : (
//         <>
//           <h2 className="text-3xl font-bold text-green-500">Congratulation!</h2>
//           <h2 className="font-bold text-2xl">
//             Here is your interview feedback
//           </h2>
//           <h2 className="text-primary text-lg my-3">
//             Your overall interview rating{" "}
//             <strong
//               className={avgRating < 6 ? "text-red-600" : "text-green-500"}
//             >
//               {avgRating}/10
//             </strong>
//           </h2>
//           <h2 className="text-sm text-gray-200">
//             Find below interview question with correct answer, your answer and
//             feedback for improvement
//           </h2>
//           {feedbackList.map((item, index) => (
//             <Collapsible key={index} className="mt-7">
//               <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex items-center justify-between gap-7 w-full">
//                 {item.question} <ChevronsUpDownIcon className="h-5 w-5" />
//               </CollapsibleTrigger>
//               <CollapsibleContent>
//                 <div className="flex flex-col gap-2">
//                   <h2 className="text-red-600 p-2 rounded-lg">
//                     <strong>Rating:</strong> {item.rating}
//                   </h2>
//                   <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
//                     <strong>Your Answer: </strong> {item.userAns}
//                   </h2>
//                   <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900 mt-2">
//                     <strong>Correct Answer: </strong> {item.correctAns}
//                   </h2>
//                   <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary mt-2">
//                     <strong>Feedback: </strong> {item.feedback}
//                   </h2>
//                 </div>
//               </CollapsibleContent>
//             </Collapsible>
//           ))}
//         </>
//       )}
//       <Button onClick={() => router.replace("/dashboard")}>Go Home</Button>
//     </div>
//   );
// }

// export default Feedback;

"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";

function Feedback() {
  const params = useParams();
  const [feedbackList, setFeedbackList] = useState([]);
  const [avgRating, setAvgRating] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (params?.interviewId) {
      getFeedback();
    }
  }, [params?.interviewId]);

  const getFeedback = async () => {
    try {
      const result = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewId))
        .orderBy(UserAnswer.id);

      setFeedbackList(result);
      const totalRating = result.reduce(
        (sum, item) => sum + Number(item.rating),
        0
      );
      setAvgRating(Math.round(totalRating / result.length));
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const getCongratulatoryMessage = () => {
    if (avgRating === null) return "";
    
    if (avgRating >= 9) {
      return "Outstanding Performance! 🎉";
    } else if (avgRating >= 7) {
      return "Excellent Work! 👏";
    } else if (avgRating >= 5) {
      return "Good Job! 👍";
    } else if (avgRating >= 3) {
      return "Keep Practicing! 💪";
    } else {
      return "Don't Give Up! 📚";
    }
  };

  const getRatingColor = () => {
    if (avgRating === null) return "text-gray-500";
    
    if (avgRating >= 8) return "text-emerald-500";
    if (avgRating >= 6) return "text-green-500";
    if (avgRating >= 4) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      {feedbackList.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="font-bold text-xl text-gray-500">
            No Interview Feedback Record Found
          </h2>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              <h2 className="text-4xl font-extrabold">{getCongratulatoryMessage()}</h2>
            </div>
            <h2 className="font-bold text-2xl mt-2">
              Here is your interview feedback
            </h2>
            
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg">
                Your overall interview rating:{" "}
                <span className={`text-2xl font-bold ${getRatingColor()}`}>
                  {avgRating}/10
                </span>
              </h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div 
                  className={`h-2.5 rounded-full ${
                    avgRating >= 8 ? 'bg-emerald-500' :
                    avgRating >= 6 ? 'bg-green-500' :
                    avgRating >= 4 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} 
                  style={{ 
                    width: `${(avgRating || 0) * 10}%`,
                    transition: 'width 0.5s ease-out'
                  }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 text-center">
            Find below interview questions with correct answers, your responses, and
            personalized feedback for improvement
          </p>

          <div className="space-y-6">
            {feedbackList.map((item, index) => (
              <Collapsible key={index} className="group">
                <CollapsibleTrigger className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-between gap-4 w-full border border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-left flex-1">
                    Q{index + 1}: {item.question}
                  </span>
                  <ChevronsUpDownIcon className="h-5 w-5 text-gray-500 group-data-[state=open]:rotate-180 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-3">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-900/50">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-red-600">Rating:</span>
                      <div className="flex items-center">
                        {[...Array(10)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${i < item.rating ? 'text-red-500' : 'text-gray-300 dark:text-gray-600'}`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm font-medium">{item.rating}/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                    <h3 className="font-bold text-red-800 dark:text-red-200 mb-1">Your Answer</h3>
                    <p className="text-red-700 dark:text-red-300">{item.userAns}</p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/30">
                    <h3 className="font-bold text-green-800 dark:text-green-200 mb-1">Correct Answer</h3>
                    <p className="text-green-700 dark:text-green-300">{item.correctAns}</p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-1">Feedback</h3>
                    <p className="text-blue-700 dark:text-blue-300">{item.feedback}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </>
      )}

      <div className="mt-10 text-center">
        <Button 
          onClick={() => router.replace("/dashboard")}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg rounded-full"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}

export default Feedback;