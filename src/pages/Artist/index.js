import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonLoading,
  MetaTags,
} from 'components';
import Banner from 'static/images/banner.png';
import useStyles from './styles';

const ARTISTS_QUERY = gql`
  query Artists($skipIdx: Int) {
    artists(first: 100, skip: $skipIdx) {
      id
      bandName
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
`;
function Artist() {
  const classes = useStyles();
  const total = useRef(100);
  const [artists, setArtists] = useState([]);
  const [getArtists, { data, loading }] = useLazyQuery(ARTISTS_QUERY);

  useEffect(() => {
    getArtists({
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
    if (data?.artists.length) {
      const newArtists = [...artists, ...data.artists];
      setArtists(newArtists);
    }
    if (data?.artists.length === 100) {
      getArtists({
        variables: {
          skipIdx: total.current,
        },
      });
      total.current = total.current + 100;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.artists]);

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <img src={Banner} alt="bg" className={classes.bg} />
      <Spacing size={24} />
      <div>
        <div className={classes.section}>A BUNCH OF ARTISTS</div>
        <Spacing size={32} />
        {loading && <SkeletonLoading length={4} />}
        {!loading &&
          data?.artists &&
          data?.artists.map((artist) => (
            <div className={classes.wrapper} key={artist.id}>
              <img
                alt="not found"
                className={classes.photo}
                src={artist.photo?.url}
              />
              <div>
                <a
                  className={classes.name}
                  href={artist.hyperLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {artist.bandName}
                </a>
                <div className={classes.bio}>{artist.bio}</div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Artist;
