"use client"
import { FaUserTie, FaCode, FaChartLine, FaGithub, FaLinkedin } from 'react-icons/fa'

// export default function OurTeam() {
  // return (
  //   <div className="min-h-screen bg-gray-100 py-12">
  //     <div className="container mx-auto px-4">
  //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Team Member 1 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//             <div className="p-6">
//               <div className="flex justify-center mb-4">
//                 <div className="bg-blue-100 p-4 rounded-full">
//                   <FaUserTie className="text-blue-500 text-3xl" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">John Doe</h3>
//               <p className="text-blue-500 text-center mb-4">CEO & Founder</p>
//               <p className="text-gray-600 text-center">
//                 {/* Add your description here */}
//               </p>
//             </div>
//           </div>

//           {/* Team Member 2 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//             <div className="p-6">
//               <div className="flex justify-center mb-4">
//                 <div className="bg-green-100 p-4 rounded-full">
//                   <FaCode className="text-green-500 text-3xl" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Jane Smith</h3>
//               <p className="text-green-500 text-center mb-4">Lead Developer</p>
//               <p className="text-gray-600 text-center">
//                 {/* Add your description here */}
//               </p>
//             </div>
//           </div>

//           {/* Team Member 3 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//             <div className="p-6">
//               <div className="flex justify-center mb-4">
//                 <div className="bg-purple-100 p-4 rounded-full">
//                   <FaChartLine className="text-purple-500 text-3xl" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Mike Johnson</h3>
//               <p className="text-purple-500 text-center mb-4">Product Manager</p>
//               <p className="text-gray-600 text-center">
//                 {/* Add your description here */}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <Card name={"Saniya Rawat"}/>

          {/* Team Member 2 */}
          <Card name={"Niraj Pingale"}/>

          {/* Team Member 3 */}
          <Card name={"Malivia Rodrigues"}/>
        </div>
      </div>
    </div>
  )
}

let Card = ({name}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <FaUserTie className="text-blue-500 text-3xl" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{name}</h3>
        <div className='flex flex-row gap-4 justify-center text-[25px]'>
          {/* <p className="text-blue-500 text-center mb-4"><FaGithub/></p> */}
          <p className="text-blue-500 text-center mb-4"><FaLinkedin/></p>
        </div>
        <p className="text-gray-600 text-center">
          {/* Add your description here */}
        </p>
      </div>
    </div>
  )
}