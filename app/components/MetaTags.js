'use client'

import Head from 'next/head'

const DEFAULT_TITLE = "Noise Hanoi"
const DEFAULT_DESCRIPTION = "live.music.HaNoi."
const DEFAULT_KEY_WORDS = "Music, Events, HaNoi, Drums, Festival, Liveshow, Bia, Live, Coffee, Rock, Ho Chi Minh"
const DEFAULT_THUMBNAIL_URL = "https://media.graphassets.com/g0u8F0NReulFIRCA4IKW"

export default function MetaTags({ title, desc, keyWords, thumbnailUrl }) {
  return (
    <Head>
      <title>{title ? title : DEFAULT_TITLE}</title>
      <link rel="canonical" href="https://www.noisehanoi.com/" />
      <meta
        property="article:tag"
        content={keyWords ? keyWords : DEFAULT_KEY_WORDS}
      />
      <meta
        name="news_keywords"
        content={keyWords ? keyWords : DEFAULT_KEY_WORDS}
      />
      <meta name="description" content={desc ? desc : DEFAULT_DESCRIPTION} />
      <meta
        name="keywords"
        content={keyWords ? keyWords : DEFAULT_KEY_WORDS}
      />

      {/* Start Facebook metatag */}
      <meta property="og:title" content={title ? title : DEFAULT_TITLE} />
      <meta property="og:site_name" content="www.noisehanoi.com" />
      <meta
        property="og:url"
        itemprop="url"
        content="https://www.noisehanoi.com/"
      />
      <meta
        content={desc ? desc : DEFAULT_DESCRIPTION}
        itemprop="description"
        property="og:description"
      />
      <meta
        property="og:image"
        itemprop="thumbnailUrl"
        content={thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL}
      />
      <meta
        content={desc ? desc : DEFAULT_DESCRIPTION}
        itemprop="headline"
        property="og:title"
      />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:height" content="354" />
      {/* End Facebook metatag */}
      {/* Start twitter metatag */}
      <meta name="twitter:card" value="summary" />
      <meta name="twitter:url" content="https://www.noisehanoi.com/" />
      <meta name="twitter:title" content={title ? title : DEFAULT_TITLE} />
      <meta
        name="twitter:description"
        content={desc ? desc : DEFAULT_DESCRIPTION}
      />
      <meta
        name="twitter:image"
        content={thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL}
      />
      {/* End twitter metatag */}
    </Head>
  )
} 