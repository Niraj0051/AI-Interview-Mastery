// "use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Webcam from "react-webcam";
// import useSpeechToText from "react-hook-speech-to-text";
// import { Mic, StopCircle } from "lucide-react";
// import { toast } from "sonner";
// import { chatSession } from "@/utils/GeminiAIModel";
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";

// const RecordAnswerSection = ({
//   mockInterviewQuestion,
//   activeQuestionIndex,
//   interviewData,
// }) => {
//   const [userAnswer, setUserAnswer] = useState("");
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//     setResults,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   });
//   useEffect(() => {
//     results.map((result) =>
//       setUserAnswer((prevAns) => prevAns + result?.transcript)
//     );
//   }, [results]);

//   useEffect(() => {
//     if (!isRecording && userAnswer.length > 10) {
//       UpdateUserAnswer();
//     }
//   }, [userAnswer]);

//   const StartStopRecording = async () => {
//     if (isRecording) {
//       stopSpeechToText();
//       // if (userAnswer?.length < 10) {
//       //   setLoading(false)
//       //   toast("Error while saving your answer,please record again");
//       //   return;
//       // }
//     } else {
//       startSpeechToText();
//     }
//   };

//   const UpdateUserAnswer = async () => {
//     console.log(userAnswer, "########");
//     setLoading(true);
//     const feedbackPrompt =
//       "Question:" +
//       mockInterviewQuestion[activeQuestionIndex]?.question +
//       ", User Answer:" +
//       userAnswer +
//       ",Depends on question and user answer for given interview question " +
//       " please give use rating out of 10 for answer and feedback as area of improvement if any" +
//       " in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
//     console.log(feedbackPrompt);
//     const result = await chatSession.sendMessage(feedbackPrompt);
//     console.log(result);
//     const mockJsonResp = result.response
//       .text()
//       .replace("```json", "")
//       .replace("```", "");

//     console.log(mockJsonResp);
//     const JsonfeedbackResp = JSON.parse(mockJsonResp);
//     const resp = await db.insert(UserAnswer).values({
//       mockIdRef: interviewData?.mockId,
//       question: mockInterviewQuestion[activeQuestionIndex]?.question,
//       correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
//       userAns: userAnswer,
//       feedback: JsonfeedbackResp?.feedback,
//       rating: JsonfeedbackResp?.rating,
//       userEmail: user?.primaryEmailAddress?.emailAddress,
//       createdAt: moment().format("DD-MM-YYYY"),
//     });

//     if (resp) {
//       toast("User Answer recorded successfully");
//       setUserAnswer("");
//       setResults([]);
//     }
//     setResults([]);
//     setLoading(false);
//   };

//   if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
//   return (
//     <div className="flex justify-cente items-center flex-col">
//       <div className="flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5">
//         <Image
//           src={"/webcam.png"}
//           width={200}
//           height={200}
//           className="absolute"
//           alt="webcam"
//           priority
//         />
//         <Webcam
//           style={{ height: 300, width: "100%", zIndex: 10 }}
//           mirrored={true}
//         />
//       </div>
//       <Button
//         disabled={loading}
//         variant="outline"
//         className="my-10"
//         onClick={StartStopRecording}
//       >
//         {isRecording ? (
//           <h2 className="text-red-600 items-center animate-pulse flex gap-2">
//             <StopCircle /> Stop Recording...
//           </h2>
//         ) : (
//           <h2 className="text-primary flex gap-2 items-center">
//             <Mic /> Record Answer
//           </h2>
//         )}
//       </Button>
//       {/* <Button onClick={() => console.log("------", userAnswer)}>
//         Show User Answer
//       </Button> */}
//     </div>
//   );
// };

// export default RecordAnswerSection;

"use client";
import { Button } from "@/components/ui/button";
import { Mic, StopCircle, Circle, Video, VideoOff } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModel";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const webcamRef = useRef(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isVideoOn, setIsVideoOn] = useState(true);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    setUserAnswer(results.map(r => r.transcript).join(" "));
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.trim().length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer, isRecording]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      setUserAnswer("");
      setResults([]);
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);
    try {
      const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}
User Answer: ${userAnswer}
Please provide:
1. Rating (0-10) based on technical accuracy and clarity
2. Brief feedback (3-5 lines) on areas for improvement
Format response as JSON: {rating: number, feedback: string}`;

      const result = await chatSession.sendMessage(feedbackPrompt);
      const responseText = result.response.text().replace(/```json|```/g, "");
      const feedback = JSON.parse(responseText);

      await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: feedback.feedback,
        rating: feedback.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      });

      toast.success("Answer saved!", {
        description: `You scored ${feedback.rating}/10`,
      });
      
      setUserAnswer("");
      setResults([]);
    } catch (error) {
      toast.error("Failed to save answer");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (error) return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
      Microphone access is required for this feature. Please enable it in your browser settings.
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          {isRecording ? (
            <span className="flex items-center gap-2">
              <Circle className="text-red-500 animate-pulse" size={12} />
              Recording
            </span>
          ) : (
            "Your Response"
          )}
        </h2>
        <button 
          onClick={() => setIsVideoOn(!isVideoOn)}
          className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
        </button>
      </div>

      <div className="relative bg-black rounded-lg overflow-hidden mb-4 aspect-video">
        {isVideoOn ? (
          <Webcam
            ref={webcamRef}
            audio={false}
            mirrored={true}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <VideoOff size={48} className="text-gray-600" />
          </div>
        )}
      </div>

      <div className="mb-4 min-h-20 p-3 bg-gray-50 rounded-lg">
        {userAnswer ? (
          <p className="text-gray-700">{userAnswer}</p>
        ) : (
          <p className="text-gray-400 italic">
            {isRecording ? "Listening..." : "Your answer will appear here"}
          </p>
        )}
      </div>

      <Button
        onClick={StartStopRecording}
        disabled={loading}
        size="lg"
        className={`w-full gap-2 ${
          isRecording 
            ? "bg-red-600 hover:bg-red-700" 
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isRecording ? (
          <>
            <StopCircle size={18} />
            Stop Recording
          </>
        ) : (
          <>
            <Mic size={18} />
            {loading ? "Processing..." : "Record Answer"}
          </>
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;