'use client';

import { Container } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import { useEffect, useState, useRef } from 'react';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonLoading,
  Banner,
} from '../components';
import { groupPlaces, mapPlaceGroupDisplay } from '../utils';
import useStyles from './styles';

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
`;

export default function Places() {
  const classes = useStyles();
  const total = useRef(100);
  const [places, setPlaces] = useState([]);
  const [getPlaces, { data, loading }] = useLazyQuery(PLACES_QUERY);

  useEffect(() => {
    getPlaces({
      variables: {
        skipIdx: 0,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.places.length) {
      const newPlaces = [...places, ...data.places];
      setPlaces(newPlaces);
    }
    if (data?.places.length === 100) {
      getPlaces({
        variables: {
          skipIdx: total.current,
        },
      });
      total.current = total.current + 100;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.places]);

  const groupedPlaces = groupPlaces(places);
  const groupKeys = groupedPlaces && Object.keys(groupedPlaces);

  return (
    <Container maxWidth="lg">
      <Menu />
      <Banner />
      <Spacing size={24} />
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964843003007!2d105.84315961476884!3d21.02801578599432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zMjkgTmcuIDM1IE5n4buNYyBLaMOhbmgsIE5n4buNYyBLaMOhbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1629789012345!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>
      <Spacing size={48} />
      <div>
        <div className={classes.section}>A BUNCH OF PLACES</div>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          groupedPlaces &&
          groupKeys.map((key) => (
            <div key={key}>
              <div className={classes.title}>{mapPlaceGroupDisplay(key)}</div>
              {groupedPlaces[key].map((place) => (
                <div key={place.id}>
                  <a
                    className={classes.place}
                    href={place.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {place.name}
                  </a>
                  <div className={classes.text}>{place.description}</div>
                </div>
              ))}
              <Spacing size={32} />
            </div>
          ))}
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}
