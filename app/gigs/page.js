'use client';

import { useMemo, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import {
  Menu,
  Footer,
  Spacing,
  GigItem,
  ScrollTopBtn,
  SpotifyIframe,
  SkeletonLoading,
  Banner,
} from '../components';
import {
  genOneYearQuery,
  genStartDate,
  groupEventsByDate,
  groupEventsByMonth,
} from '../utils';
import { MainContainer, MainGrid, Section, Title, SendEmailBtn } from './styles';

const EVENTS_QUERY = gql`
  query Events($start: DateTime, $end: DateTime) {
    events(
      first: 100
      orderBy: time_ASC
      where: { time_gte: $start, time_lte: $end }
    ) {
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
`;

export default function Gigs() {
  const [events, setEvents] = useState([]);
  const startOfDate = useMemo(genStartDate, []);
  const endOfDate = useMemo(genOneYearQuery, []);
  const [getEvents, { data, loading }] = useLazyQuery(EVENTS_QUERY);

  useEffect(() => {
    getEvents({
      variables: {
        start: startOfDate,
        end: endOfDate,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.events.length) {
      const newEvents = [...events, ...data.events];
      setEvents(newEvents);
    }
    if (data?.events.length === 100) {
      const lastItem = data.events[99];
      getEvents({
        variables: {
          start: lastItem.time,
          end: endOfDate,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.events]);

  const groupedEventsByMonth = groupEventsByMonth(events);
  const monthKeys = groupedEventsByMonth
    ? Object.keys(groupedEventsByMonth)
    : [];

  const isLoading = loading && !events.length;

  return (
    <MainContainer>
      <Menu />
      <Banner />
      <Spacing size={48} />
      <MainGrid
        container
        columnSpacing={{ xs: 2, sm: 2, md: 12 }}
      >
        <Grid item xs={12} sm={8}>
          {isLoading && <SkeletonLoading length={4} />}
          {!isLoading &&
            groupedEventsByMonth &&
            monthKeys.map((time) => {
              const groupedEvents = groupEventsByDate(
                groupedEventsByMonth[time]
              );
              const keys = groupedEvents ? Object.keys(groupedEvents) : [];
              return (
                <div key={time}>
                  <Title>{time}</Title>
                  <Spacing size={32} />
                  {groupedEvents &&
                    keys.map((k) => {
                      const [, date] = k.split('-');
                      const eventList = groupedEvents[k] ?? null;
                      const day = eventList ? eventList[0]?.day : '';
                      return (
                        eventList && (
                          <div key={`${date}-${day}`}>
                            <GigItem day={day} date={date} events={eventList} />
                            <Spacing size={32} />
                          </div>
                        )
                      );
                    })}
                </div>
              );
            })}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Title>NOISE HANOI PLAYLIST</Title>
          <Spacing size={32} />
          <SpotifyIframe />
          <Spacing size={32} />
          <Title>ABOUT THE GUIDE</Title>
          <Spacing size={32} />
          <Section>
            The aim is to keep this guide as simple as possible. If you have an
            event you think should be listed here, hit the submit button below.
          </Section>
          <SendEmailBtn href="mailto:noisehanoi@gmail.com">
            Send an Email
          </SendEmailBtn>
          <Spacing size={16} />
        </Grid>
      </MainGrid>
      <Footer />
      <ScrollTopBtn />
    </MainContainer>
  );
}
