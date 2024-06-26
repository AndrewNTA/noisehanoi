import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Pagination } from '@mui/material';
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

const NUMBER_OF_RESULTS = 10;

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
  const navigate = useNavigate();
  const groupId = searchParams.get('group_key');
  const pageId = searchParams.get('page_id');
  const [artists, setArtists] = useState([]);
  const [getArtists, { data, loading }] = useLazyQuery(ARTISTS_QUERY);

  const totalPage = Math.floor(artists.length / NUMBER_OF_RESULTS) + 1;

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
      setArtists(data.artists);
    }
  }, [data?.artists]);

  const handleChangePage = (_, page) => {
    navigate(`/artists/?group_key=${groupId}&page_id=${page}`);
  };

  const currentList = useMemo(() => {
    const end = Number(pageId) * NUMBER_OF_RESULTS;
    const start = end - NUMBER_OF_RESULTS;
    return artists.slice(start, end);
  }, [artists, pageId]);

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
            {!loading && !artists.length && <p>No data found!!!</p>}
            {!loading &&
              Boolean(currentList.length) &&
              currentList.map((artist) => (
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
            {!loading && totalPage > 1 && (
              <div className={classes.paginationWrapper}>
                <Pagination
                  count={totalPage}
                  color="primary"
                  onChange={handleChangePage}
                />
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default Artist;
