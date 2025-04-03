// "use client"
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative bg-gradient-to-br from-gray-900 to-black w-full min-h-screen overflow-hidden flex items-center justify-center">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="blur-circle1 absolute left-[10%] top-[20%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-[120px] animate-float1"></div>
//         <div className="blur-circle2 absolute right-[10%] top-[30%] w-[250px] h-[250px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-[100px] animate-float2"></div>
//         <div className="blur-circle3 absolute left-[40%] bottom-[10%] w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full blur-[150px] animate-float3"></div>
//       </div>

//       {/* Main Content - Centered */}
//       <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
//           {/* Text Content - Centered */}
//           <div className="text-center max-w-2xl space-y-6 animate-fadeIn">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Interview Skills</span>
//             </h1>
//             <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
//               AI-powered mock interviews with real-time feedback. Practice with our intelligent system and get detailed analysis on your performance.
//             </p>
            
//             <div className="flex justify-center gap-4 pt-4">
//               <Link href="/dashboard">
//                 <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-lg transform transition-all hover:scale-105">
//                   Get Started - It's Free
//                 </Button>
//               </Link>
//             </div>
            
//             <div className="flex items-center justify-center gap-2 pt-8">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((item) => (
//                   <img
//                     key={item}
//                     src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
//                     className="h-8 w-8 rounded-full border-2 border-white/30"
//                     alt="User"
//                   />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-400">Trusted by 10,000+ professionals</p>
//             </div>
//           </div>

//           {/* Image - Centered */}
//           <div className="relative w-full max-w-2xl animate-float mt-12 lg:mt-0">
//             <Image
//               src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png"
//               alt="Interview Preparation"
//               width={600}
//               height={500}
//               quality={100}
//               className="drop-shadow-2xl mx-auto"
//             />
//             <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useUser } from '@clerk/nextjs';
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Home() {
//   const { isLoaded, isSignedIn} = useUser();

//   if (!isLoaded) {
//     return (
//       <div className="relative bg-gradient-to-br from-gray-900 to-black w-full min-h-screen overflow-hidden flex items-center justify-center">
//         <div className="text-white text-lg">Loading...</div>
//       </div>
//     );

//   }

//   return (
//     <div className="relative bg-gradient-to-br from-gray-900 to-black w-full min-h-screen overflow-hidden flex items-center justify-center">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="blur-circle1 absolute left-[10%] top-[20%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-[120px] animate-float1"></div>
//         <div className="blur-circle2 absolute right-[10%] top-[30%] w-[250px] h-[250px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-[100px] animate-float2"></div>
//         <div className="blur-circle3 absolute left-[40%] bottom-[10%] w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full blur-[150px] animate-float3"></div>
//       </div>

//       {/* Main Content - Centered */}
//       <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
//           {/* Text Content - Centered */}
//           <div className="text-center max-w-2xl space-y-6 animate-fadeIn">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Interview Skills</span>
//             </h1>
//             <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
//               AI-powered mock interviews with real-time feedback. Practice with our intelligent system and get detailed analysis on your performance.
//             </p>
            
//             <div className="flex justify-center gap-4 pt-4">
//               <Link href={"/dashboard"}>
//                 <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-lg transform transition-all hover:scale-105">
//                   {isSignedIn ? "Go to Dashboard" : "Get Started - It's Free"}
//                 </Button>
//               </Link>
//             </div>

//             <div className="flex items-center justify-center gap-2 pt-8">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((item) => (
//                   <img
//                     key={item}
//                     src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
//                     className="h-8 w-8 rounded-full border-2 border-white/30"
//                     alt="User"
//                   />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-400">Trusted by 10,000+ professionals</p>
//             </div>
//           </div>

//           {/* Image - Centered */}
//           <div className="relative w-full max-w-2xl animate-float mt-12 lg:mt-0">
//             <Image
//               src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png"
//               alt="Interview Preparation"
//               width={600}
//               height={500}
//               quality={100}
//               className="drop-shadow-2xl mx-auto"
//               priority
//             />
//             <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useUser } from '@clerk/nextjs';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="relative bg-gradient-to-br from-gray-900 to-black w-full min-h-screen overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-t-purple-500 border-r-pink-500 border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blur-circle1 absolute left-[10%] top-[20%] w-[300px] h-[300px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-[120px] animate-float1"></div>
        <div className="blur-circle2 absolute right-[10%] top-[30%] w-[250px] h-[250px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-[100px] animate-float2"></div>
        <div className="blur-circle3 absolute left-[40%] bottom-[10%] w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full blur-[150px] animate-float3"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Text Content - Centered */}
          <div className="text-center max-w-2xl space-y-6 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Interview Skills</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              AI-powered mock interviews with real-time feedback. Practice with our intelligent system and get detailed analysis on your performance.
            </p>
            
            <div className="flex flex-col items-center gap-4 pt-4">
              {isSignedIn && (
                <p className="text-sm text-gray-400">
                  Signed in as {user?.primaryEmailAddress?.emailAddress}
                </p>
              )}
              
              <div className="flex justify-center gap-4">
                <Link href={"/dashboard"}>
                  <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-lg transform transition-all hover:scale-105">
                    {isSignedIn ? "Go to Dashboard" : "Get Started"}
                  </Button>
                </Link>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-2 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
                    className="h-8 w-8 rounded-full border-2 border-white/30"
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">Trusted by 10,000+ professionals</p>
            </div> */}
          </div>

          {/* Image - Centered */}
          <div className="relative w-full max-w-2xl animate-float mt-12 lg:mt-0">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png"
              alt="Interview Preparation"
              width={600}
              height={500}
              quality={100}
              className="drop-shadow-2xl mx-auto"
              priority
            />
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}