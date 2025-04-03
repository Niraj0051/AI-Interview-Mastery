// "use client";
// import { useParams } from "next/navigation"; // <-- Added
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import QuestionsSections from "./_components/QuestionsSection";
// import RecordAnswerSection from "./_components/RecordAnswerSection";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function StartInterview() { // Removed { params }
//   const { interviewId } = useParams(); // <-- Using useParams to get interviewId
//   const [interviewData, setInterviewData] = useState();
//   const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
//   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

//   useEffect(() => {
//     GetInterviewDetail();
//   }, []);

//   /**
//    * Used to Get Interview Details by MockId/Interview Id
//    */
//   const GetInterviewDetail = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, interviewId)); // <-- Use interviewId here

//     const jsonMockResp = JSON.parse(result[0]?.jsonMockResp);

//     setMockInterviewQuestion(jsonMockResp);
//     setInterviewData(result[0]);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Questions */}
//         <QuestionsSections
//           activeQuestionIndex={activeQuestionIndex}
//           mockInterviewQuestion={mockInterviewQuestion}
//         />
//         {/* Video/ Audio Recording */}
//         <RecordAnswerSection
//           activeQuestionIndex={activeQuestionIndex}
//           mockInterviewQuestion={mockInterviewQuestion}
//           interviewData={interviewData}
//         />
//       </div>

//       <div className="flex justify-end gap-6">
//         {activeQuestionIndex > 0 && (
//           <Button
//             disabled={activeQuestionIndex == 0}
//             onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
//           >
//             Previous Question
//           </Button>
//         )}

//         {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
//           <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
//             Next Question
//           </Button>
//         )}

//         {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
//           <Link href={'/dashboard/interview/' + interviewData?.mockId + "/feedback"}>
//             <Button>End Interview</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StartInterview;

// "use client";
// import { useParams } from "next/navigation";
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import QuestionsSections from "./_components/QuestionsSection";
// import RecordAnswerSection from "./_components/RecordAnswerSection";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Progress } from "@/components/ui/progress";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function StartInterview() {
//   const { interviewId } = useParams();
//   const [interviewData, setInterviewData] = useState(null);
//   const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
//   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

//   useEffect(() => {
//     GetInterviewDetail();
//   }, []);

//   const GetInterviewDetail = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, interviewId));
      
//     const jsonMockResp = JSON.parse(result[0]?.jsonMockResp);
//     setMockInterviewQuestion(jsonMockResp);
//     setInterviewData(result[0]);
//   };

//   const progressValue = mockInterviewQuestion.length > 0 
//     ? ((activeQuestionIndex + 1) / mockInterviewQuestion.length) * 100 
//     : 0;

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-8">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           {interviewData?.jobPosition || "Mock Interview"}
//         </h1>
//         <p className="text-gray-600">
//           {interviewData?.jobExperience} years experience level
//         </p>
//         <Progress value={progressValue} className="h-2 mt-4" />
//         <div className="flex justify-between text-sm text-gray-500 mt-1">
//           <span>Question {activeQuestionIndex + 1} of {mockInterviewQuestion.length}</span>
//           <span>{Math.round(progressValue)}% completed</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <QuestionsSections
//           activeQuestionIndex={activeQuestionIndex}
//           mockInterviewQuestion={mockInterviewQuestion}
//         />
        
//         <RecordAnswerSection
//           activeQuestionIndex={activeQuestionIndex}
//           mockInterviewQuestion={mockInterviewQuestion}
//           interviewData={interviewData}
//         />
//       </div>

//       <div className="flex justify-between mt-8 gap-4">
//         <Button
//           variant="outline"
//           disabled={activeQuestionIndex === 0}
//           onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
//           className="gap-2"
//         >
//           <ChevronLeft size={18} />
//           Previous
//         </Button>

//         {activeQuestionIndex < mockInterviewQuestion.length - 1 ? (
//           <Button
//             onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
//             className="gap-2"
//           >
//             Next
//             <ChevronRight size={18} />
//           </Button>
//         ) : (
//           <Link 
//             href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
//             className="w-full"
//           >
//             <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
//               Finish Interview
//             </Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StartInterview;

"use client";
import { useParams } from "next/navigation";
import { db } from "@/utils/db";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSections from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/utils/GeminiAIModel";

function StartInterview() {
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  const [averageScore, setAverageScore] = useState(0);
  const [showContinueDialog, setShowContinueDialog] = useState(false);
  const [additionalQuestionsCount, setAdditionalQuestionsCount] = useState(5);
  const [loadingAdditionalQuestions, setLoadingAdditionalQuestions] = useState(false);

  useEffect(() => {
    GetInterviewDetail();
  }, []);

  const GetInterviewDetail = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));
      
    const jsonMockResp = JSON.parse(result[0]?.jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  const progressValue = mockInterviewQuestion.length > 0 
    ? ((activeQuestionIndex + 1) / mockInterviewQuestion.length) * 100 
    : 0;

  const calculateAverageScore = async () => {
    try {
      const answers = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, interviewId));

      if (answers.length === 0) return 0;
      
      const total = answers.reduce((sum, answer) => sum + (parseInt(answer.rating, 10) || 0), 0);
      const avg = total / answers.length;
      setAverageScore(avg);
      return avg;
    } catch (error) {
      console.error("Error calculating average score:", error);
      return 0;
    }
  };

  const handleFinishClick = async () => {
    const avg = await calculateAverageScore();
    setAverageScore(avg);
    setShowScoreDialog(true);
  };

  const generateAdditionalQuestions = async (count) => {
    setLoadingAdditionalQuestions(true);
    try {
      const prompt = `Generate ${count} additional technical interview questions for a ${interviewData.jobPosition} position requiring ${interviewData.jobExperience} years of experience. The questions should focus on ${interviewData.jobDesc}. Return the questions in JSON format like this: [{"question": "...", "answer": "..."}]`;
      
      const result = await chatSession.sendMessage(prompt);
      const responseText = result.response.text().replace(/```json|```/g, "");
      const newQuestions = JSON.parse(responseText);
      
      setMockInterviewQuestion([...mockInterviewQuestion, ...newQuestions]);
      setActiveQuestionIndex(mockInterviewQuestion.length); // Move to first new question
    } catch (error) {
      console.error("Error generating additional questions:", error);
    } finally {
      setLoadingAdditionalQuestions(false);
      setShowContinueDialog(false);
      setShowScoreDialog(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {interviewData?.jobPosition || "Mock Interview"}
        </h1>
        <p className="text-gray-600">
          {interviewData?.jobExperience} years experience level
        </p>
        <Progress value={progressValue} className="h-2 mt-4" />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>Question {activeQuestionIndex + 1} of {mockInterviewQuestion.length}</span>
          <span>{Math.round(progressValue)}% completed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <QuestionsSections
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
          setActiveQuestionIndex={setActiveQuestionIndex}
        />
        
        <RecordAnswerSection
          activeQuestionIndex={activeQuestionIndex}
          mockInterviewQuestion={mockInterviewQuestion}
          interviewData={interviewData}
        />
      </div>

      <div className="flex justify-between mt-8 gap-4">
        <Button
          variant="outline"
          disabled={activeQuestionIndex === 0}
          onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          className="gap-2"
        >
          <ChevronLeft size={18} />
          Previous
        </Button>

        {activeQuestionIndex < mockInterviewQuestion.length - 1 ? (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
            className="gap-2"
          >
            Next
            <ChevronRight size={18} />
          </Button>
        ) : (
          <div className="flex gap-4 w-full">
            {mockInterviewQuestion.length === 5 && (
              <Button
                variant="outline"
                onClick={handleFinishClick}
                className="gap-2 flex-1 bg-yellow-300 hover:bg-yellow-400"
              >
                See Score
              </Button>
            )}
            <Link 
              href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
              className="flex-1"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                Finish Interview
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Score Dialog */}
      <Dialog open={showScoreDialog} onOpenChange={setShowScoreDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Current Score</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-lg">
              Your average score is: <span className="font-bold">{averageScore.toFixed(1)}/10</span>
            </p>
            {averageScore < 4 && (
              <p className="text-red-500 mt-2">
                Consider reviewing feedback to improve your performance.
              </p>
            )}
          </div>
          <DialogFooter>
            {averageScore < 4 ? (
              <Link 
                href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
                className="w-full"
              >
                <Button className="w-full">
                  See Feedback
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={() => {
                  setShowScoreDialog(false);
                  setShowContinueDialog(true);
                }}
                className="w-full"
              >
                Want to Continue?
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Continue Dialog */}
      <Dialog open={showContinueDialog} onOpenChange={setShowContinueDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Continue Interview</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p>How many additional questions would you like?</p>
            <Input
              type="number"
              min="1"
              max="10"
              value={additionalQuestionsCount}
              onChange={(e) => setAdditionalQuestionsCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
            />
          </div>
          <DialogFooter className="gap-2">
            <Link
              href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
              <Button
                variant="outline"
                onClick={() => {
                  setShowContinueDialog(false);
                }}
              >
                No, Finish Now
              </Button>  
            </Link>
            <Button
              onClick={() => generateAdditionalQuestions(additionalQuestionsCount)}
              disabled={loadingAdditionalQuestions}
            >
              {loadingAdditionalQuestions ? "Generating..." : "Continue"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StartInterview