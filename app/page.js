'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useEffect } from 'react';
import { Container, Grid, styled } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import {
  Spacing,
  Article,
  Menu,
  Event,
  MoreButton,
  Footer,
  ScrollTopBtn,
  SpotifyIframe,
  SkeletonLoading,
  Banner,
} from './components';
import { months } from './constants';
import { genEndDate, genStartDate, groupEventsByDate } from './utils';

const Main = styled('div')(({ theme }) => ({
  padding: '1.25rem',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    padding: '1.25rem 0',
  },
}));

const Title = styled('h1')({
  padding: '0 0.75rem 0.5rem 0.5rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  lineHeight: '1.25rem',
  borderBottom: '1px solid white',
  fontSize: '1.375rem',
});

const EventDate = styled('div')({
  textTransform: 'uppercase',
  lineHeight: '1.25rem',
  borderBottom: '1px solid white',
  fontSize: '1.125rem',
  color: '#CFCFCF',
  paddingBottom: '4px',
  fontWeight: 400,
  marginTop: '2.5rem',
  marginBottom: '1rem',
});

const EventLabel = styled('span')({
  color: '#1EBDD3',
  textTransform: 'uppercase',
  lineHeight: '1.25rem',
  fontSize: '1.125rem',
  fontWeight: 700,
  marginRight: '6px',
});

const Content = styled('div')(({ theme }) => ({
  paddingRight: '8rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: '0',
  },
}));

const LeftSpacing = styled('div')({
  paddingLeft: '0.75rem',
});

const PastEventsItem = styled('div')({
  lineHeight: '1.25rem',
  fontStyle: 'italic',
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '1.25rem',
  paddingLeft: '0.75rem',
  borderLeft: '2px solid #1EBDD3',
  marginBottom: '2rem',
  cursor: 'pointer',
  '&:hover': {
    color: '#1EBDD3',
  },
});

const ARTICLES_QUERY = gql`
  query Articles {
    articles(first: 10, orderBy: publishedAt_DESC) {
      brief
      id
      name
    }
  }
`;

const EVENTS_QUERY = gql`
  query Events($start: DateTime, $end: DateTime) {
    events(
      first: 10
      where: { time_gte: $start, time_lte: $end }
      orderBy: time_ASC
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

export default function Home() {
  const router = useRouter();
  const { data: articleData, loading: articleLoading } =
    useQuery(ARTICLES_QUERY);
  const startOfDate = useMemo(genStartDate, []);
  const endOfDate = useMemo(genEndDate, []);
  const { data: eventData, loading: eventLoading } = useQuery(EVENTS_QUERY, {
    variables: {
      start: startOfDate,
      end: endOfDate,
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const groupedEvents = groupEventsByDate(eventData?.events);
  const articleList = articleData?.articles ?? null;
  const keys = groupedEvents ? Object.keys(groupedEvents) : [];
  const getCurrentDate = useCallback(() => {
    const now = new Date();
    return now.getDate();
  }, []);

  const currentDate = useMemo(getCurrentDate, [getCurrentDate]);

  return (
    <Container maxWidth="lg">
      <Menu />
      <Banner />
      <Main>
        <Spacing size={32} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>LIVE MUSIC THIS WEEK</Title>
            {eventLoading && <SkeletonLoading length={4} />}
            <Content>
              {keys.map((k) => {
                const eventList = groupedEvents[k] ?? null;
                const day = eventList?.[0]?.day;
                const [month, date] = k.split('-');
                const label =
                  parseInt(date) === currentDate
                    ? 'today'
                    : parseInt(date) === currentDate + 1
                    ? 'tomorrow'
                    : day;
                return (
                  <div key={k}>
                    <EventDate>
                      <EventLabel>{label}</EventLabel>
                      {`${date} ${months[month]}`}
                    </EventDate>
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
                );
              })}
              <MoreButton
                text="more gigs"
                onClick={() => router.push('/gigs')}
              />
            </Content>
          </Grid>
          <Grid item xs={12} md={6}>
            <Title>LATEST READS</Title>
            <Spacing size={16} />
            {articleLoading && <SkeletonLoading length={4} />}
            {!articleLoading && articleList && (
              <Content>
                {articleList.map((a) => (
                  <Article
                    key={a.id}
                    id={a.id}
                    title={a.name}
                    content={a.brief}
                  />
                ))}
                <MoreButton
                  text="more reads"
                  onClick={() => router.push('/reads')}
                />
              </Content>
            )}
            <Spacing size={32} />
            <div>
              <Title>PAST EVENTS</Title>
              <Spacing size={16} />
              <PastEventsItem
                onClick={() => router.push('/past-events?filter=jan-mar-2025')}
              >
                JAN - MAR 2025
              </PastEventsItem>
              <PastEventsItem
                onClick={() => router.push('/past-events?filter=oct-dec-2024')}
              >
                OCT - DEC 2024
              </PastEventsItem>
              <PastEventsItem
                onClick={() => router.push('/past-events?filter=jul-sep-2024')}
              >
                JUL - SEP 2024
              </PastEventsItem>
              <PastEventsItem
                onClick={() => router.push('/past-events?filter=apr-jun-2024')}
              >
                APR - JUN 2024
              </PastEventsItem>
              <MoreButton
                text="more history"
                onClick={() => router.push('/past-events')}
              />
            </div>
          </Grid>
        </Grid>
        <Spacing size={64} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>WELCOME TO NOISE HANOI!</Title>
            <Content>
              <LeftSpacing>
                <b>
                  This site exists to promote the community that music creates
                </b>
              </LeftSpacing>
              <Spacing size={24} />
              <LeftSpacing>
                At its heart is a simple, no-nonsense gig guide that does
                exactly what it says on the tin. We&apos;ll also try to publish
                a bit of writing, gig reviews, music reviews and opinion pieces
                and the like. If you have an event that you would like to
                promote, or an article you want published, send us an email!
              </LeftSpacing>
            </Content>
          </Grid>
          <Grid item xs={12} md={6}>
            <Title>NOISE HANOI PLAYLIST</Title>
            <SpotifyIframe />
          </Grid>
        </Grid>
      </Main>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}
