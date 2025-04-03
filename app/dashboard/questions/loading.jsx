export default function QuestionsLoading() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="h-10 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
        
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <div className="p-4 flex justify-between items-center">
                <div className="space-y-2 w-full">
                  <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }