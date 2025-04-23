'use client';

import { useEffect, useMemo } from 'react';
import { Container, Grid, Skeleton, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageGallery from 'react-image-gallery';
import {
  Menu,
  Footer,
  Spacing,
  ScrollTopBtn,
  SkeletonReadLoading,
} from '../../components';
import { formatDisplayFullDate } from '../../utils';
import useStyles from './styles';
import { ARTICLE_QUERY } from './queries';
import 'react-image-gallery/styles/css/image-gallery.css';

const genImages = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((g) => ({
    original: g.url,
    thumbnail: g.url,
  }));
};

function ReadDetail({ readId }) {
  const classes = useStyles();
  const router = useRouter();
  const { data, loading } = useQuery(ARTICLE_QUERY, {
    variables: {
      id: readId,
    },
  });
  const articleData = data?.article ?? null;
  const imageList = useMemo(
    () => genImages(articleData && articleData.gallery),
    [articleData]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (!loading && !articleData) {
    router.push('/not-found');
  }
  return (
    <Container maxWidth="lg">
      <Menu />
      <Spacing size={48} />
      <div className={classes.main}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {loading && <SkeletonReadLoading length={4} />}
            {!loading && articleData && (
              <>
                <div className={classes.readName}>{articleData.name}</div>
                {articleData?.photo?.url && (
                  <Image
                    src={articleData?.photo?.url}
                    alt={articleData.name}
                    className={classes.readImg}
                    width={200}
                    height={200}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                )}
                <Spacing size={32} />
                <div
                  className={classes.text}
                  dangerouslySetInnerHTML={{
                    __html: articleData?.content?.html ?? '',
                  }}
                />
              </>
            )}
            <Spacing size={32} />
            {imageList && <ImageGallery items={imageList} />}
          </Grid>
          <Grid item xs={12} md={3}>
            {loading && (
              <>
                <Spacing size={12} />
                <Typography component="div" key="h5" variant="h5">
                  <Skeleton width="50%" animation="false" />
                </Typography>
                <Spacing size={12} />
                <Skeleton width="80%" animation="wave" />
                <Spacing size={32} />
                <Typography component="div" key="h5" variant="h5">
                  <Skeleton width="50%" animation="false" />
                </Typography>
                <Spacing size={12} />
                <Skeleton width="80%" animation="wave" />
              </>
            )}
            {!loading && articleData && (
              <>
                <div className={classes.label}>By</div>
                <div className={classes.value}>{articleData?.author}</div>
                <Spacing size={32} />
                <div className={classes.label}>Published</div>
                <div className={classes.value}>
                  {formatDisplayFullDate(articleData?.publishedAt)}
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </div>
      <Footer />
      <ScrollTopBtn />
    </Container>
  );
}

export default ReadDetail; 