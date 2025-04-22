'use client'

import { Container, Pagination } from '@mui/material'
import { useLazyQuery, gql } from '@apollo/client'
import { useEffect, useState, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Spacing from '../components/Spacing'
import ScrollTopBtn from '../components/ScrollTopBtn'
import SkeletonLoading from '../components/SkeletonLoading'
import MetaTags from '../components/MetaTags'
import Image from 'next/image'
import Banner from '../static/images/banner.png'
import GroupBand from './Group'

const NUMBER_OF_RESULTS = 10

const ARTISTS_QUERY = gql`
  query Artists($skipIdx: Int, $bandGroup: BandGroup) {
    artists(first: 100, skip: $skipIdx, where: { bandGroup: $bandGroup }) {
      id
      bandName
      bandGroup
      bio
      hyperLink
      photo {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 600, width: 970 } }
          }
        )
      }
    }
  }
`

export default function Artists() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const groupId = searchParams.get('group_key')
  const pageId = searchParams.get('page_id') || '1'
  const [artists, setArtists] = useState([])
  const [getArtists, { data, loading }] = useLazyQuery(ARTISTS_QUERY)

  const totalPage = Math.floor(artists.length / NUMBER_OF_RESULTS) + 1

  useEffect(() => {
    if (Boolean(groupId)) {
      getArtists({
        variables: {
          skipIdx: 0,
          bandGroup: groupId,
        },
      })
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [groupId])

  useEffect(() => {
    if (data?.artists.length) {
      setArtists(data.artists)
    }
  }, [data?.artists])

  const handleChangePage = (_, page) => {
    router.push(`/artists/?group_key=${groupId}&page_id=${page}`)
  }

  const currentList = useMemo(() => {
    const end = Number(pageId) * NUMBER_OF_RESULTS
    const start = end - NUMBER_OF_RESULTS
    return artists.slice(start, end)
  }, [artists, pageId])

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <Image src={Banner} alt="bg" className="bg" />
      <Spacing size={24} />
      <div>
        <div className="section">A BUNCH OF ARTISTS</div>
        <Spacing size={32} />
        {!groupId ? (
          <GroupBand />
        ) : (
          <>
            {loading && <SkeletonLoading length={4} />}
            {!loading && !artists.length && <p>No data found!!!</p>}
            {!loading &&
              Boolean(currentList.length) &&
              currentList.map((artist) => (
                <div className="wrapper" key={artist.id}>
                  <Image
                    src={artist.photo?.url}
                    alt={artist.bandName}
                    width={970}
                    height={600}
                    className="artist-image"
                  />
                  <div className="artist-info">
                    <h2 className="artist-name">{artist.bandName}</h2>
                    <p className="artist-bio">{artist.bio}</p>
                    {artist.hyperLink && (
                      <a
                        href={artist.hyperLink}
                        target="_blank"
                        rel="noreferrer"
                        className="artist-link"
                      >
                        More Info
                      </a>
                    )}
                  </div>
                </div>
              ))}
            {Boolean(currentList.length) && (
              <div className="pagination">
                <Pagination
                  count={totalPage}
                  page={Number(pageId)}
                  onChange={handleChangePage}
                  color="primary"
                />
              </div>
            )}
          </>
        )}
      </div>
      <Spacing size={64} />
      <Footer />
      <ScrollTopBtn />
    </Container>
  )
} 