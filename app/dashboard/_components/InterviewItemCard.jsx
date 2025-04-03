import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import React from 'react'

// function InterviewItemCard({interviewInfo}) {
//    const router=useRouter()
//     const onStart=()=>{
//         console.log("first")
//        router.push(`/dashboard/interview/${interviewInfo?.mockId}`)
//     }
//     const onFeedback=()=>{
//         router.push(`/dashboard/interview/${interviewInfo.mockId}/feedback`)
//     }
//   return (
//     <div className='border shadow-sm rounded-lg p-3'>
//         <h2 className='font-bold text-primary'>{interviewInfo?.jobPosition}</h2>
//         <h2 className='text-sm text-gray-600'>{interviewInfo?.jobExperience} Years of Experience</h2>
//         <h2 className='text-xs text-gray-500'>Created At: {interviewInfo.createdAt}</h2>
//         <div className='flex justify-between mt-2 gap-5'>
           
//             <Button size="sm" variant="outline"  className="w-full" onClick={onFeedback}>Feedback</Button>
        
//             <Button size="sm" className="w-full" onClick={onStart}>Start</Button>
//         </div>
//     </div>
//   )
// }

// export default InterviewItemCard

function InterviewItemCard({interviewInfo}) {
  const router = useRouter()
  
  const onStart = () => {
    router.push(`/dashboard/interview/${interviewInfo?.mockId}`)
  }
  
  const onFeedback = () => {
    router.push(`/dashboard/interview/${interviewInfo.mockId}/feedback`)
  }

  return (
    <div className='border border-gray-200 rounded-xl p-5 bg-white hover:shadow-lg transition-all duration-300 hover:border-blue-200'>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className='font-bold text-lg text-gray-800'>{interviewInfo?.jobPosition}</h2>
          <span className='inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1'>
            {interviewInfo?.jobExperience} Years Exp.
          </span>
        </div>
        <span className='text-xs text-gray-400'>
          {interviewInfo.createdAt}
        </span>
      </div>
      
      <div className='flex gap-3 mt-4'>
        <Button 
          size="sm" 
          variant="outline" 
          className="w-full border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700"
          onClick={onFeedback}
        >
          Feedback
        </Button>
        <Button 
          size="sm" 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-sm"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default InterviewItemCard