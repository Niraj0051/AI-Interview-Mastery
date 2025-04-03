import { db } from '@/utils/db'
import { UserAnswer, MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { currentUser } from '@clerk/nextjs/server'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default async function QuestionsContent() {
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress

  if (!email) return <div>Please sign in to view your questions</div>

  const questions = await db.select({
    question: UserAnswer.question,
    userAnswer: UserAnswer.userAns,
    correctAnswer: UserAnswer.correctAns,
    feedback: UserAnswer.feedback,
    rating: UserAnswer.rating,
    interviewPosition: MockInterview.jobPosition,
    interviewDate: MockInterview.createdAt,
  })
    .from(UserAnswer)
    .innerJoin(MockInterview, eq(UserAnswer.mockIdRef, MockInterview.mockId))
    .where(eq(MockInterview.createdBy, email))
    .orderBy(MockInterview.createdAt)

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <h2 className="text-xl font-semibold text-gray-500">No interview questions found</h2>
        <p className="text-gray-400 mt-2">Complete an interview to see your questions here</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📚 Your Interview Questions
      </h1>
      
      <div className="space-y-4">
        <Accordion type="multiple" className="w-full">
          {questions.map((q, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Q{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{q.question}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {q.interviewPosition} • {q.interviewDate}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium text-green-800">Correct Answer</h4>
                    <p className="text-green-700 mt-1">{q.correctAnswer}</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800">Your Answer</h4>
                    <p className="text-blue-700 mt-1">{q.userAnswer}</p>
                    {q.rating && (
                      <p className="text-sm text-blue-600 mt-2">
                        Rating: {q.rating}/10
                      </p>
                    )}
                  </div>
                  
                  {q.feedback && (
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <h4 className="font-medium text-yellow-800">Feedback</h4>
                      <p className="text-yellow-700 mt-1">{q.feedback}</p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}