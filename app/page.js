'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import ImageGallery from 'react-image-gallery';
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
} from './components';
import { months } from './constants';
import { genEndDate, genStartDate, groupEventsByDate } from './utils';
import useStyles from './styles';

const genImages = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((a) => ({
    original: a?.image?.url,
    thumbnail: a?.image?.url,
  }));
};

const BANNERS_QUERY = gql`
  query Banners {
    banners(first: 5) {
      id
      image {
        url(
          transformation: {
            image: { resize: { fit: clip, height: 2048, width: 682 } }
          }
        )
      }
    }
  }
`;

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
  const classes = useStyles();
  const { data: bannerData } = useQuery(BANNERS_QUERY);
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
  const bannerList = useMemo(
    () => genImages(bannerData && bannerData.banners),
    [bannerData]
  );

  return (
    <Container maxWidth="lg">
      <Menu />
      {bannerList && (
        <ImageGallery
          items={bannerList}
          showThumbnails={false}
          autoPlay={true}
          slideDuration={1500}
          slideInterval={8000}
          showPlayButton={false}
          showFullscreenButton={false}
          additionalClass={classes.imageGallery}
        />
      )}
      <div className={classes.main}>
        <Spacing size={32} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LIVE MUSIC THIS WEEK</h1>
            {eventLoading && <SkeletonLoading length={4} />}
            <div className={classes.content}>
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
                    <div className={classes.eventDate}>
                      <span className={classes.eventLabel}>{label}</span>
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
                );
              })}
              <MoreButton
                text="more gigs"
                onClick={() => router.push('/gigs')}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>LATEST READS</h1>
            <Spacing size={16} />
            {articleLoading && <SkeletonLoading length={4} />}
            {!articleLoading && articleList && (
              <div className={classes.content}>
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
              </div>
            )}
          </Grid>
        </Grid>
        <Spacing size={64} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>WELCOME TO NOISE HANOI!</h1>
            <div className={classes.content}>
              <div className={classes.leftSpacing}>
                <b>
                  This site exists to promote the community that music creates
                </b>
              </div>
              <Spacing size={24} />
              <div className={classes.leftSpacing}>
                At its heart is a simple, no-nonsense gig guide that does
                exactly what it says on the tin. We'll also try to publish a bit
                of writing, gig reviews, music reviews and opinion pieces and
                the like. If you have an event that you would like to promote,
                or an article you want published, send us an email!
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>NOISE HANOI PLAYLIST</h1>
            <SpotifyIframe />
          </Grid>
        </Grid>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}
