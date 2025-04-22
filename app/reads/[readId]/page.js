'use client'

import { Container } from '@mui/material'
import { useQuery, gql } from '@apollo/client'
import Menu from '../../components/Menu'
import SkeletonLoading from '../../components/SkeletonLoading'
import MetaTags from '../../components/MetaTags'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const ARTICLE_QUERY = gql`
  query Article($id: ID!) {
    article(where: { id: $id }) {
      id
      name
      content {
        html
      }
    }
  }
`

export default function ReadDetail() {
  const params = useParams()
  const { data: articleData, loading: articleLoading } = useQuery(ARTICLE_QUERY, {
    variables: { id: params.readId },
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const article = articleData?.article

  return (
    <Container maxWidth="lg">
      <MetaTags title={`${article?.name || 'Read'} - Noise Hanoi`} />
      <Menu />
      <div className="main">
        {articleLoading && <SkeletonLoading length={4} />}
        {!articleLoading && article && (
          <div className="content">
            <h1 className="title">{article.name}</h1>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content.html }}
            />
          </div>
        )}
      </div>
    </Container>
  )
} 