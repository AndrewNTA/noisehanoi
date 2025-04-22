'use client'

import { Container, Grid } from '@mui/material'
import { useQuery, gql } from '@apollo/client'
import Menu from '../components/Menu'
import Event from '../components/Event'
import SkeletonLoading from '../components/SkeletonLoading'
import MetaTags from '../components/MetaTags'
import { months } from '../constants'
import { genEndDate, genStartDate, groupEventsByDate } from '../utils'
import { useCallback, useMemo, useEffect } from 'react'

const EVENTS_QUERY = gql`
  query Events($start: DateTime, $end: DateTime) {
    events(where: { time_gte: $start, time_lte: $end }, orderBy: time_ASC) {
      id
      extraInfo
      eventName
      price
      preSalePrice
      optionalInfo
      venueLink
      venueName
      time
      facebookLink
    }
  }
`

export default function Gigs() {
  const startOfDate = useMemo(genStartDate, [])
  const endOfDate = useMemo(genEndDate, [])
  const { data: eventData, loading: eventLoading } = useQuery(EVENTS_QUERY, {
    variables: {
      start: startOfDate,
      end: endOfDate,
    },
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const groupedEvents = groupEventsByDate(eventData?.events)
  const keys = groupedEvents ? Object.keys(groupedEvents) : []
  const getCurrentDate = useCallback(() => {
    const now = new Date()
    return now.getDate()
  }, [])

  const currentDate = useMemo(getCurrentDate, [getCurrentDate])

  return (
    <Container maxWidth="lg">
      <MetaTags title="Gigs - Noise Hanoi" />
      <Menu />
      <div className="main">
        <h1 className="title">LIVE MUSIC THIS MONTH</h1>
        {eventLoading && <SkeletonLoading length={4} />}
        <div className="content">
          {keys.map((k) => {
            const eventList = groupedEvents[k] ?? null
            const day = eventList?.[0]?.day
            const [month, date] = k.split('-')
            const label =
              parseInt(date) === currentDate
                ? 'today'
                : parseInt(date) === currentDate + 1
                ? 'tomorrow'
                : day
            return (
              <div key={k}>
                <div className="event-date">
                  <span className="event-label">{label}</span>
                  {`${date} ${months[month]}`}
                </div>
                {eventList &&
                  eventList.map((ev) => (
                    <Event
                      key={ev.id}
                      eventName={ev.eventName}
                      time={ev.time}
                      venueLink={ev.venueLink}
                      venueName={ev.venueName}
                      facebookLink={ev.facebookLink}
                      optionalInfo={ev.optionalInfo}
                      extraInfo={ev.extraInfo}
                      price={ev.price}
                      preSalePrice={ev.preSalePrice}
                    />
                  ))}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
} 
