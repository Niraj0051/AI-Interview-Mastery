// components/FilteredRatingsChart.jsx
'use client'
import { useState, useMemo } from 'react'
import { RatingsLineChart } from './AnalyticsChart'
import Link from 'next/link'

export function FilteredRatingsChart({ data, jobPositions }) {
  const [selectedJob, setSelectedJob] = useState('All')

  const filteredData = useMemo(() => {
    if (selectedJob === 'All') return data
    
    return data
      .filter(item => item.interviewType === selectedJob)
      .map((item, index) => ({
        ...item,
        interviewNumber: index + 1 // Reset numbering for filtered results
      }))
  }, [data, selectedJob])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <select
          value={selectedJob}
          onChange={(e) => setSelectedJob(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Interviews</option>
          {jobPositions.map((job) => (
            <option key={job} value={job}>{job}</option>
          ))}
        </select>
      </div>
      
      <div className="h-[280px]">
        <RatingsLineChart data={filteredData} />
      </div>

      {/* <div className="text-sm text-gray-600">
        {filteredData.length > 0 && (
          <p>
            Showing {filteredData.length} interview{filteredData.length !== 1 ? 's' : ''}
            {selectedJob !== 'All' && ` for ${selectedJob}`}
          </p>
        )}
      </div> */}

      {/* <div className="grid grid-cols-1 gap-2">
        {filteredData.map((item) => (
          <Link
            key={item.mockId}
            href={`/dashboard/interview/${item.mockId}/feedback`}
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            View details for {item.interviewType} (Interview {item.interviewNumber})
          </Link>
        ))}
      </div> */}
    </div>
  )
}