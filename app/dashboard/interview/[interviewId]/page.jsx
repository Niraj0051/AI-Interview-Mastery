// "use client";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import { Lightbulb, WebcamIcon } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Webcam from "react-webcam";
// import { useParams } from "next/navigation"; // ✅ Import useParams

// function Interview() {
//   const params = useParams(); // ✅ Fetch params correctly
//   const [interviewData, setInterviewData] = useState(null);
//   const [webCamEnabled, setWebCamEnabled] = useState(false);

//   useEffect(() => {
//     if (!params?.interviewId) return; // ✅ Prevent API call if params are missing
//     GetInterviewDetails();
//   }, [params]);

//   const GetInterviewDetails = async () => {
//     try {
//       const result = await db
//         .select()
//         .from(MockInterview)
//         .where(eq(MockInterview.mockId, params.interviewId));

//       if (result.length > 0) {
//         setInterviewData(result[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching interview details:", error);
//     }
//   };

//   return (
//     <div className="my-10">
//       <h2 className="font-bold text-2xl">Let's Get Started</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="flex flex-col my-5 gap-5">
//           {/* Interview Info */}
//           <div className="flex flex-col p-5 rounded-lg border gap-5">
//             <h2 className="text-lg">
//               <strong>Job Role/Job Position: </strong>
//               {interviewData?.jobPosition || "Loading..."}
//             </h2>
//             <h2 className="text-lg">
//               <strong>Job Description/Tech Stack: </strong>
//               {interviewData?.jobDesc || "Loading..."}
//             </h2>
//             <h2 className="text-lg">
//               <strong>Years of Experience: </strong>
//               {interviewData?.jobExperience || "Loading..."}
//             </h2>
//           </div>

//           {/* Info Box */}
//           <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
//             <h2 className="flex gap-2 items-center text-yellow-500">
//               <Lightbulb />
//               <span>Information</span>
//             </h2>
//             <h2 className="mt-3 text-yellow-500">
//               {process.env.NEXT_PUBLIC_INFORMATION || "No additional information available."}
//             </h2>
//           </div>
//         </div>

//         {/* Webcam Section */}
//         <div>
//           {webCamEnabled ? (
//             <Webcam mirrored style={{ height: 300, width: 300 }} />
//           ) : (
//             <>
//               <WebcamIcon className="h-72 my-7 border rounded-lg w-full p-20 bg-secondary" />
//               <Button className="w-full" variant="ghost" onClick={() => setWebCamEnabled(true)}>
//                 Enable Webcam and Microphone
//               </Button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Start Interview Button */}
//       <div className="flex justify-end items-end">
//         {params?.interviewId && (
//           <Link href={`/dashboard/interview/${params.interviewId}/start`}>
//             <Button>Start Interview</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;

"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, Video, VideoOff, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useParams } from "next/navigation";

function Interview() {
  const params = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.interviewId) return;
    GetInterviewDetails();
  }, [params]);

  const GetInterviewDetails = async () => {
    try {
      setLoading(true);
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      setInterviewData(result[0] || null);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Interview Preparation
        </h1>
        <p className="text-gray-600">
          Review your settings before starting the mock interview
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Interview Details Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-blue-100 p-2 rounded-full">
                    <Video className="text-blue-600" size={20} />
                  </span>
                  Interview Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500">Position</h3>
                      <p className="text-lg text-gray-800">
                        {interviewData?.jobPosition || "Not specified"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500">Tech Stack</h3>
                      <p className="text-lg text-gray-800">
                        {interviewData?.jobDesc || "Not specified"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500">Experience Level</h3>
                      <p className="text-lg text-gray-800">
                        {interviewData?.jobExperience ? `${interviewData.jobExperience} years` : "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pro Tips Section */}
              <div className="bg-yellow-50 p-6 border-t border-yellow-100">
                <div className="flex items-center gap-3 text-yellow-700 mb-3">
                  <Lightbulb size={20} className="flex-shrink-0" />
                  <h3 className="font-medium">Pro Tip</h3>
                </div>
                <p className="text-yellow-700">
                  {process.env.NEXT_PUBLIC_INFORMATION || 
                    "Prepare your environment: Find a quiet space, test your equipment, and have water nearby."}
                </p>
              </div>
            </div>

            {/* Webcam Setup Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-purple-100 p-2 rounded-full">
                    <Video className="text-purple-600" size={20} />
                  </span>
                  Camera Setup
                </h2>
                
                <div className="space-y-6">
                  {/* Webcam Preview */}
                  <div className="relative bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    {webcamEnabled ? (
                      <Webcam 
                        mirrored={true} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-6">
                        <VideoOff size={48} className="mx-auto text-gray-400 mb-3" />
                        <p className="text-gray-400">Camera is disabled</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Webcam Control */}
                  <Button
                    variant={webcamEnabled ? "default" : "outline"}
                    onClick={() => setWebcamEnabled(!webcamEnabled)}
                    className="w-full gap-2"
                  >
                    {webcamEnabled ? (
                      <>
                        <Video size={18} />
                        Camera On
                      </>
                    ) : (
                      <>
                        <VideoOff size={18} />
                        Enable Camera
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Start Interview Button */}
          <div className="flex justify-center">
            <Link 
              href={`/dashboard/interview/${params.interviewId}/start`} 
              className="w-full max-w-md"
            >
              <Button size="lg" className="w-full gap-2">
                Begin Interview
                <ChevronRight size={20} />
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Interview;