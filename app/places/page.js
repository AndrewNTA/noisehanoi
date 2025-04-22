'use client'

import { Container } from '@mui/material'
import { useLazyQuery, gql } from '@apollo/client'
import { useEffect, useState, useRef } from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Spacing from '../components/Spacing'
import ScrollTopBtn from '../components/ScrollTopBtn'
import SkeletonLoading from '../components/SkeletonLoading'
import MetaTags from '../components/MetaTags'
import { groupPlaces, mapPlaceGroupDisplay } from '../utils'
import Image from 'next/image'
import Banner from '../static/images/banner.png'

const PLACES_QUERY = gql`
  query Places($skipIdx: Int) {
    places(first: 100, skip: $skipIdx) {
      id
      name
      description
      type
      url
    }
  }
`

export default function Places() {
  const total = useRef(100)
  const [places, setPlaces] = useState([])
  const [getPlaces, { data, loading }] = useLazyQuery(PLACES_QUERY)

  useEffect(() => {
    getPlaces({
      variables: {
        skipIdx: 0
      }
    })
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    if (data?.places.length) {
      const newPlaces = [...places, ...data.places]
      setPlaces(newPlaces)
    }
    if (data?.places.length === 100) {
      getPlaces({
        variables: {
          skipIdx: total.current
        }
      })
      total.current = total.current + 100
    }
  }, [data?.places])

  const groupedPlaces = groupPlaces(places)
  const groupKeys = groupedPlaces && Object.keys(groupedPlaces)

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <Image src={Banner} alt="bg" className="bg" />
      <Spacing size={24} />
      <div className="google-map-code">
        <iframe
          src="https://maper.app/map-details/NoMNC6ap70SRt3IaRb3z?go=true"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="map"
        />
      </div>
      <Spacing size={48} />
      <div>
        <div className="section">A BUNCH OF PLACES</div>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          groupedPlaces &&
          groupKeys.map((key) => (
            <div key={key}>
              <div className="title">{mapPlaceGroupDisplay(key)}</div>
              {groupedPlaces[key].map((place) => (
                <div key={place.id}>
                  <a
                    className="place"
                    href={place.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {place.name}
                  </a>
                  <div className="description">{place.description}</div>
                </div>
              ))}
            </div>
          ))}
      </div>
      <Spacing size={64} />
      <Footer />
      <ScrollTopBtn />
    </Container>
  )
} 