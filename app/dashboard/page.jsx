import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import Interviewlist from './_components/Interviewlist'
import Link from 'next/link'
import { BarChart } from 'lucide-react'

function Dashboard() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-blue-50 p-10 md:p-8">
      {/* Header Section with Analytics Button */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            Interview Dashboard
          </h2>
          <p className="text-gray-600 lg:text-lg sm:text-sm">
            Create and practice your AI Mock Interviews with personalized feedback
          </p>
        </div>
        
        <Link 
          href="/dashboard/analytics" 
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <BarChart className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600 font-medium">View Analytics</span>
        </Link>
      </div>

      {/* Add New Interview Card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'>
        <AddNewInterview/>
      </div>

      {/* Previous Interview list */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border border-gray-100">
        <Interviewlist/>
      </div>
    </div>
  )
}

export default Dashboard