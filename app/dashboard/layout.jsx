// import React from 'react'
// import Header from './_components/Header'

// function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen">
//       <Header/>
//       <div className="w-full px-4 md:px-8">  {/* Padding instead of margin */}
//         {children}
//       </div>
//     </div>
//   )
// }

// export default DashboardLayout

// import React from 'react'
// import Header from './_components/Header'
// import Footer from './_components/Footer'

// function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen flex flex-col bg-white"> {/* Full-width background */}
//       <Header/>
//       <main className="flex-1 w-full bg-gradient-to-br from-gray-25 to-gray-100">
//         <div className="w-full mx-auto"> {/* Content container */}
//           {children}
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   )
// }

// export default DashboardLayout

import React from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header/>
      <main className="flex-1 w-full bg-gradient-to-br from-gray-25 to-gray-100">
        {/* Add min-height and padding to ensure gradient visibility */}
        <div className="w-full mx-auto min-h-[calc(100vh-160px)]">
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default DashboardLayout