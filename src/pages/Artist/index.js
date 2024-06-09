import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
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
import GroupBand from './Group';
import useStyles from './styles';

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
`;
function Artist() {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get('group_key');
  const total = useRef(100);
  const [artists, setArtists] = useState([]);
  const [getArtists, { data, loading }] = useLazyQuery(ARTISTS_QUERY);

  useEffect(() => {
    if (Boolean(groupId)) {
      getArtists({
        variables: {
          skipIdx: 0,
          bandGroup: groupId,
        },
      });
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  useEffect(() => {
    if (data?.artists.length) {
      const newArtists = [...artists, ...data.artists];
      setArtists(newArtists);
    }
    if (data?.artists.length === 100 && groupId) {
      getArtists({
        variables: {
          skipIdx: total.current,
          bandGroup: groupId,
        },
      });
      total.current = total.current + 100;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.artists, groupId]);

  return (
    <Container maxWidth="lg">
      <MetaTags />
      <Menu />
      <img src={Banner} alt="bg" className={classes.bg} />
      <Spacing size={24} />
      <div>
        <div className={classes.section}>A BUNCH OF ARTISTS</div>
        <Spacing size={32} />
        {!groupId ? (
          <GroupBand />
        ) : (
          <>
            {loading && <SkeletonLoading length={4} />}
            {!loading && !data?.artists?.length && <p>No data found!!!</p>}
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
          </>
        )}
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Artist;
