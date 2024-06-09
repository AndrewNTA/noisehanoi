import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgGr1T1 from 'static/images/avatar_gr1_1.jpg';
import ImgGr1T2 from 'static/images/avatar_gr1_2.jpg';
import ImgGr1T3 from 'static/images/avatar_gr1_3.jpg';

import ImgGr2T1 from 'static/images/avatar_gr2_1.jpg';
import ImgGr2T2 from 'static/images/avatar_gr2_2.jpg';
import ImgGr2T3 from 'static/images/avatar_gr2_3.jpg';

import ImgGr3T1 from 'static/images/avatar_gr3_1.jpg';
import ImgGr3T2 from 'static/images/avatar_gr3_2.jpg';
import ImgGr3T3 from 'static/images/avatar_gr3_3.jpg';

import ImgGr4T1 from 'static/images/avatar_gr4_1.jpg';
import ImgGr4T2 from 'static/images/avatar_gr4_2.jpg';
import ImgGr4T3 from 'static/images/avatar_gr4_3.jpg';

import ImgGr5T1 from 'static/images/avatar_gr5_1.jpg';
import ImgGr5T2 from 'static/images/avatar_gr5_2.jpg';
import ImgGr5T3 from 'static/images/avatar_gr5_3.jpg';

import ImgGr6T1 from 'static/images/avatar_gr6_1.jpg';
import ImgGr6T2 from 'static/images/avatar_gr6_2.jpg';
import ImgGr6T3 from 'static/images/avatar_gr6_3.jpg';

import useStyles from './styles';

const groupList = [
  {
    id: 'rock_indie_folk',
    title: 'Rock / Indie / Folk',
    images: [ImgGr1T1, ImgGr1T2, ImgGr1T3],
  },
  {
    id: 'reggae_hiphop_afrobeat',
    title: 'Reggae / Hip hop / Afrobeat',
    images: [ImgGr2T1, ImgGr2T2, ImgGr2T3],
  },

  {
    id: 'rock_indie_folk',
    title: 'Punk / Metal / Grunge',
    images: [ImgGr3T1, ImgGr3T2, ImgGr3T3],
  },
  {
    id: 'soul_jazz_blues',
    title: 'Soul / Jazz / Blues',
    images: [ImgGr4T1, ImgGr4T2, ImgGr4T3],
  },

  {
    id: 'electronic_experimental',
    title: 'Electronic / Experimental',
    images: [ImgGr5T1, ImgGr5T2, ImgGr5T3],
  },
  {
    id: 'cover_bands_and_tributes',
    title: 'Cover bands and tributes',
    images: [ImgGr6T1, ImgGr6T2, ImgGr6T3],
  },
];

function Group() {
  const classes = useStyles();
  const navigate = useNavigate();
  const goToGroupDetail = (id) => {
    navigate(`/artists/?group_key=${id}`);
  };

  const renderImg = (src) => (
    <img src={src} alt="not found" className={classes.groupBandImg} />
  );

  const renderItem = (item) => (
    <div
      className={classes.groupBandBox}
      onClick={() => goToGroupDetail(item.id)}
    >
      <p className={classes.groupBandTitle}>{item.title}</p>
      <div className={classes.groupBandImagesContainer}>
        {item.images.map((src) => renderImg(src))}
      </div>
    </div>
  );

  return (
    <div className={classes.groupBandContainer}>
      {groupList.map((item) => renderItem(item))}
    </div>
  );
}

export default Group;
