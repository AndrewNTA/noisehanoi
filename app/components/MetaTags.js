'use client'

import Head from 'next/head'

const DEFAULT_TITLE = "Noise Hanoi"
const DEFAULT_DESCRIPTION = "live.music.HaNoi."
const DEFAULT_KEY_WORDS = "Music, Events, HaNoi, Drums, Festival, Liveshow, Bia, Live, Coffee, Rock, Ho Chi Minh"
const DEFAULT_THUMBNAIL_URL = "https://media.graphassets.com/g0u8F0NReulFIRCA4IKW"

export default function MetaTags({ title, desc, keyWords, thumbnailUrl }) {
  const titleValue = title ? title : DEFAULT_TITLE;
  const descValue = desc ? desc : DEFAULT_DESCRIPTION;
  const keyWordsValue = keyWords ? keyWords : DEFAULT_KEY_WORDS;
  const thumbnailUrlValue = thumbnailUrl ? thumbnailUrl : DEFAULT_THUMBNAIL_URL;

  return (
    <Head>
      <title>{titleValue}</title>
      <link rel="canonical" href="https://www.noisehanoi.com/" />
      <meta
        property="article:tag"
        content={keyWordsValue}
      />
      <meta
        name="news_keywords"
        content={keyWordsValue}
      />
      <meta name="description" content={descValue} />
      <meta
        name="keywords"
        content={keyWordsValue}
      />

      {/* Start Facebook metatag */}
      <meta property="og:title" content={titleValue} />
      <meta property="og:site_name" content="www.noisehanoi.com" />
      <meta
        property="og:url"
        itemprop="url"
        content="https://www.noisehanoi.com/"
      />
      <meta
        content={descValue}
        itemprop="description"
        property="og:description"
      />
      <meta
        property="og:image"
        itemprop="thumbnailUrl"
        content={thumbnailUrlValue}
      />
      <meta
        content={descValue}
        itemprop="headline"
        property="og:title"
      />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:height" content="354" />
      {/* End Facebook metatag */}
      {/* Start twitter metatag */}
      <meta name="twitter:card" value="summary" />
      <meta name="twitter:url" content="https://www.noisehanoi.com/" />
      <meta name="twitter:title" content={titleValue} />
      <meta
        name="twitter:description"
        content={descValue}
      />
      <meta
        name="twitter:image"
        content={thumbnailUrlValue}
      />
      {/* End twitter metatag */}
    </Head>
  )
} 