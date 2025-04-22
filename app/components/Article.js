'use client'

import { useRouter } from 'next/navigation'
import Spacing from './Spacing'

export default function Article({ title, content, id }) {
  const router = useRouter()

  const goToReadDetail = () => {
    router.push(`/reads/${id}`)
  }

  return (
    <div id={id}>
      <div className="article-title" onClick={goToReadDetail}>
        {title}
      </div>
      <div className="article-content">{content}</div>
      <Spacing size={32} />
    </div>
  )
} 