import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Side - Visual Section */}
        <section className="relative flex h-32 items-end bg-gradient-to-br from-blue-600 to-purple-600 lg:col-span-7 lg:h-full">
          <div className="absolute inset-0 overflow-hidden opacity-90">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="relative z-10 hidden h-full w-full lg:flex lg:flex-col lg:justify-between lg:p-12">
            <div>
              <div className="flex items-center gap-2">
                <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-xl font-bold text-white">AI-Interview-Mastery</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                Master Your <span className="text-yellow-300">Interview Skills</span>
              </h2>
              <p className="text-lg text-white/90">
                Practice with AI, get instant feedback, and land your dream job
                <span className="ml-2 inline-block">🚀</span>
              </p>
            </div>

            {/* <div className="flex gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
                    className="h-10 w-10 rounded-full border-2 border-white"
                    alt="User"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-white">Join 10,000+ users</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-white">4.9/5</span>
                </div>
              </div>
            </div> */}
            <div className="text-lg text-white/90">Boost your confidence, ace the interviews🚀</div>
          </div>
        </section>

        {/* Right Side - Sign In Form */}
        <main className="flex items-center justify-center px-8 py-12 sm:px-12 lg:col-span-5 lg:px-16">
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-gray-900">
                Welcome to <span className="text-blue-600">AI-Interview-Mastery</span>
              </h1>
              <p className="mt-2 text-gray-500">
                Sign in to access your mock interviews
              </p>
            </div>

            <div>
              <SignIn 
                appearance={{
                  elements: {
                    card: 'shadow-none',
                    headerTitle: 'text-2xl font-bold text-gray-900',
                    headerSubtitle: 'text-gray-500',
                    socialButtonsBlockButton: 'border-gray-200 hover:bg-gray-50',
                    dividerLine: 'bg-gray-200',
                    formFieldInput: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
                    footerActionText: 'text-gray-500',
                    footerActionLink: 'text-blue-600 hover:text-blue-800',
                  }
                }}
              />
            </div>  
          </div>
        </main>
      </div>
    </section>
  )
}

// "use client";
// import { SignIn } from '@clerk/nextjs';
// import { Suspense, useEffect } from 'react';

// export default function SignInPage() {
//   // Preload Clerk resources
//   useEffect(() => {
//     import('@clerk/nextjs');
//   }, []);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
//         {/* Left Side - Visual Section */}
//         <section className="relative flex h-32 items-end bg-gradient-to-br from-blue-600 to-purple-600 lg:col-span-7 lg:h-full">
//           <div className="absolute inset-0 overflow-hidden opacity-90">
//             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//           </div>

//           <div className="relative z-10 hidden h-full w-full lg:flex lg:flex-col lg:justify-between lg:p-12">
//             <div>
//               <div className="flex items-center gap-2">
//                 <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//                 </svg>
//                 <span className="text-xl font-bold text-white">AI-Interview-Mastery</span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-4xl font-bold text-white sm:text-5xl">
//                 Master Your <span className="text-yellow-300">Interview Skills</span>
//               </h2>
//               <p className="text-lg text-white/90">
//                 Practice with AI, get instant feedback, and land your dream job
//                 <span className="ml-2 inline-block">🚀</span>
//               </p>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3].map((item) => (
//                   <img
//                     key={item}
//                     src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
//                     className="h-10 w-10 rounded-full border-2 border-white"
//                     alt="User"
//                   />
//                 ))}
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-white">Join 10,000+ users</p>
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className="h-4 w-4 text-yellow-300"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="ml-1 text-xs text-white">4.9/5</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Right Side - Sign In Form */}
//         <main className="flex items-center justify-center px-8 py-12 sm:px-12 lg:col-span-5 lg:px-16">
//           <div className="flex flex-col items-center justify-center w-full max-w-md">
//             <div className="mb-8 text-center lg:hidden">
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
//                 <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//                 </svg>
//               </div>
//               <h1 className="mt-4 text-3xl font-bold text-gray-900">
//                 Welcome to <span className="text-blue-600">AI-Interview-Mastery</span>
//               </h1>
//               <p className="mt-2 text-gray-500">
//                 Sign in to access your mock interviews
//               </p>
//             </div>

//             <Suspense fallback={
//               <div className="w-full flex justify-center py-12">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               </div>
//             }>
//               <SignIn 
//                 appearance={{
//                   elements: {
//                     card: 'shadow-none',
//                     headerTitle: 'text-2xl font-bold text-gray-900',
//                     headerSubtitle: 'text-gray-500',
//                     socialButtonsBlockButton: 'border-gray-200 hover:bg-gray-50',
//                     dividerLine: 'bg-gray-200',
//                     formFieldInput: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
//                     footerActionText: 'text-gray-500',
//                     footerActionLink: 'text-blue-600 hover:text-blue-800',
//                   }
//                 }}
//               />
//             </Suspense>
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// }