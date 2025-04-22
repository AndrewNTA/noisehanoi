'use client'

import { Container, Grid } from '@mui/material'
import { useQuery, gql } from '@apollo/client'
import Menu from '../components/Menu'
import Article from '../components/Article'
import SkeletonLoading from '../components/SkeletonLoading'
import MetaTags from '../components/MetaTags'
import { useEffect } from 'react'

const ARTICLES_QUERY = gql`
  query Articles {
    articles(orderBy: publishedAt_DESC) {
      brief
      id
      name
    }
  }
`

export default function Reads() {
  const { data: articleData, loading: articleLoading } = useQuery(ARTICLES_QUERY)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const articleList = articleData?.articles ?? null

  return (
    <Container maxWidth="lg">
      <MetaTags title="Reads - Noise Hanoi" />
      <Menu />
      <div className="main">
        <h1 className="title">READS</h1>
        {articleLoading && <SkeletonLoading length={4} />}
        {!articleLoading && articleList && (
          <div className="content">
            {articleList.map((a) => (
              <Article
                key={a.id}
                id={a.id}
                title={a.name}
                content={a.brief}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  )
} 
 