'use client';

import { useEffect, useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
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
import { groupEventsByDate, groupEventsByMonth } from '../utils';
import {
  MainContainer,
  MainGrid,
  Section,
  Title,
  SendEmailBtn,
} from '../gigs/styles';

const PAST_EVENTS_QUERY = gql`
  query PastEvents($end: DateTime, $start: DateTime) {
    events(
      first: 100
      orderBy: time_DESC
      where: { time_lte: $end, time_gte: $start }
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

const createMonthKey = (time) => {
  const [year, month] = time.split(' ');
  return `${year}-${month}`;
};

const getFilterDate = (filter) => {
  if (filter === 'jan-mar-2025') {
    const stateDate = new Date(2025, 0, 1, 0, 0, 0, 0);
    const endDate = new Date(2025, 2, 31, 23, 59, 59, 999);
    return {
      startDate: stateDate.toISOString(),
      endDate: endDate.toISOString(),
    };
  }
  if (filter === 'oct-dec-2024') {
    const stateDate = new Date(2024, 9, 1, 0, 0, 0, 0);
    const endDate = new Date(2024, 11, 31, 23, 59, 59, 999);
    return {
      startDate: stateDate.toISOString(),
      endDate: endDate.toISOString(),
    };
  }
  if (filter === 'jul-sep-2024') {
    const stateDate = new Date(2024, 6, 1, 0, 0, 0, 0);
    const endDate = new Date(2024, 8, 30, 23, 59, 59, 999);
    return {
      startDate: stateDate.toISOString(),
      endDate: endDate.toISOString(),
    };
  }
  if (filter === 'apr-jun-2024') {
    const stateDate = new Date(2024, 3, 1, 0, 0, 0, 0);
    const endDate = new Date(2024, 5, 30, 23, 59, 59, 999);
    return {
      startDate: stateDate.toISOString(),
      endDate: endDate.toISOString(),
    };
  }
  const startOfDate = new Date(2024, 3, 1, 0, 0, 0, 0);
  const endOfDate = new Date();
  endOfDate.setDate(endOfDate.getDate() - 1);
  return {
    startDate: startOfDate.toISOString(),
    endDate: endOfDate.toISOString(),
  };
};

export default function PastEvents() {
  const searchParams = useSearchParams();
  const filterId = searchParams.get('filter');

  const [events, setEvents] = useState([]);
  const [getEvents, { data, loading }] = useLazyQuery(PAST_EVENTS_QUERY);

  useEffect(() => {
    const { startDate, endDate } = getFilterDate(filterId);
    getEvents({
      variables: {
        start: startDate,
        end: endDate,
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
      const { startDate } = getFilterDate(filterId);
      getEvents({
        variables: {
          end: lastItem.time,
          start: startDate,
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

  const goToMonth = (month) => {
    const monthElement = document.getElementById(month);
    if (monthElement) {
      monthElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainContainer>
      <Menu />
      <Banner />
      <Spacing size={24} />
      <MainGrid container columnSpacing={{ xs: 2, sm: 2, md: 12 }}>
        <Grid item xs={12} sm={8}>
          {isLoading && <SkeletonLoading length={4} />}
          {!isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  FILTER BY MONTH
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={''}
                  label="FILTER BY MONTH"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {monthKeys.map((time) => (
                    <MenuItem
                      key={time}
                      onClick={() => goToMonth(createMonthKey(time))}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
          {!isLoading &&
            groupedEventsByMonth &&
            monthKeys.map((time) => {
              const groupedEvents = groupEventsByDate(
                groupedEventsByMonth[time]
              );
              const keys = groupedEvents ? Object.keys(groupedEvents) : [];
              return (
                <div key={time} id={createMonthKey(time)}>
                  <Title>{`${time} - PAST EVENTS`}</Title>
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
          <Spacing size={64} />
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
