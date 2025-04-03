// "use client";
// import { Lightbulb, Volume2 } from 'lucide-react';
// import React from 'react';

// const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
//   console.log("QuestionsSection.jsx:4 ~ QuestionsSection ~ mockInterviewQuestion:", mockInterviewQuestion);
  
//   const textToSpeach = (text) => {
//     if ('speechSynthesis' in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     } else {
//       alert("Sorry, your browser does not support text to speech");
//     }
//   };

//   return mockInterviewQuestion && (
//     <div className='p-5 border rounded-lg my-10'>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//         {mockInterviewQuestion.map((question, index) => (
//           <h2 
//             key={index} // <-- Added key prop
//             className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex === index ? 'bg-blue-700 text-white' : ''}`}
//           >
//             Question #{index + 1}
//           </h2>
//         ))}
//       </div>
//       <h2 className='my-5 text-md md:text-lg'>
//         {mockInterviewQuestion[activeQuestionIndex]?.question}
//       </h2>
//       <Volume2 
//         className='cursor-pointer' 
//         onClick={() => textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}
//       />
//       <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
//         <h2 className='flex gap-2 items-center text-primary'>
//           <Lightbulb />
//           <strong>Note:</strong>
//         </h2>
//         <h2 className='text-sm text-primary my-2'>
//           {process.env.NEXT_PUBLIC_QUESTION_NOTE}
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default QuestionsSection;

"use client";
import { Lightbulb, Volume2, HelpCircle } from 'lucide-react';
import React from 'react';

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech");
    }
  };

  return mockInterviewQuestion && (
    <div className='bg-white rounded-xl shadow-md p-6 border border-gray-200'>
      <div className='flex flex-wrap gap-3 mb-6'>
        {mockInterviewQuestion.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveQuestionIndex(index)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              activeQuestionIndex === index 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-5 mb-6">
        <h2 className='text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2'>
          <HelpCircle className="text-blue-600" size={20} />
          Current Question
        </h2>
        <div className="flex items-start justify-between">
          <p className='text-gray-700 text-base'>
            {mockInterviewQuestion[activeQuestionIndex]?.question}
          </p>
          <button 
            onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
            className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100"
            aria-label="Read question aloud"
          >
            <Volume2 size={20} />
          </button>
        </div>
      </div>

      <div className='bg-yellow-50 rounded-lg p-5 border border-yellow-100'>
        <div className='flex items-center gap-3 text-yellow-700 mb-2'>
          <Lightbulb size={20} />
          <h3 className='font-medium'>Pro Tip</h3>
        </div>
        <p className='text-yellow-700 text-sm'>
          {process.env.NEXT_PUBLIC_QUESTION_NOTE || "Take your time to structure your answer before speaking."}
        </p>
      </div>
    </div>
  );
};

export default QuestionsSection;

