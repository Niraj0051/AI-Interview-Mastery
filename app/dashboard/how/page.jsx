export default function HowItWorksPage() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          ❓ How It Works
        </h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">1</span>
              Create an Interview
            </h2>
            <p className="text-gray-600">
              Start by creating a mock interview session. Select your desired job position, 
              experience level, and any specific technologies you want to focus on.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">2</span>
              Answer Questions
            </h2>
            <p className="text-gray-600">
              Our AI will generate realistic interview questions. Answer them as you would 
              in a real interview - take your time and think carefully.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">3</span>
              Get Instant Feedback
            </h2>
            <p className="text-gray-600">
              After each question, you'll receive detailed feedback on your answer, 
              including what you did well and areas for improvement.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">4</span>
              Review Your Performance
            </h2>
            <p className="text-gray-600">
              Visit your Analytics dashboard to track your progress over time and 
              identify patterns in your performance.
            </p>
          </div>
        </div>
      </div>
    )
  }