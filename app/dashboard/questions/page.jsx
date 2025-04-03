import { Suspense } from 'react'
import QuestionsContent from './QuestionsContent'
import QuestionsLoading from './loading'

export default function QuestionsPage() {
  return (
    <Suspense fallback={<QuestionsLoading />}>
      <QuestionsContent />
    </Suspense>
  )
}