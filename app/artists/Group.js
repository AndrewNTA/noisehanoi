'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useStyles from './styles';

import ImgGr1T1 from '../static/images/avatar_gr1_1.jpg';
import ImgGr1T2 from '../static/images/avatar_gr1_2.jpg';
import ImgGr1T3 from '../static/images/avatar_gr1_3.jpeg';

import ImgGr2T1 from '../static/images/avatar_gr2_1.jpg';
import ImgGr2T2 from '../static/images/avatar_gr2_2.jpg';
import ImgGr2T3 from '../static/images/avatar_gr2_3.jpg';

import ImgGr3T1 from '../static/images/avatar_gr3_1.jpg';
import ImgGr3T2 from '../static/images/avatar_gr3_2.jpg';
import ImgGr3T3 from '../static/images/avatar_gr3_3.jpg';

import ImgGr4T1 from '../static/images/avatar_gr4_1.jpeg';
import ImgGr4T2 from '../static/images/avatar_gr4_2.jpeg';
import ImgGr4T3 from '../static/images/avatar_gr4_3.jpg';

import ImgGr5T1 from '../static/images/avatar_gr5_1.jpg';
import ImgGr5T2 from '../static/images/avatar_gr5_2.jpg';
import ImgGr5T3 from '../static/images/avatar_gr5_3.jpg';

import ImgGr6T1 from '../static/images/avatar_gr6_1.jpg';
import ImgGr6T2 from '../static/images/avatar_gr6_2.jpg';
import ImgGr6T3 from '../static/images/avatar_gr6_3.jpg';


const groupList = [
  {
    id: 'rock_indie',
    title: 'Rock / Indie',
    images: [ImgGr1T1, ImgGr1T2, ImgGr1T3],
  },
  {
    id: 'reggae_hiphop_afrobeat',
    title: 'Reggae / Hip hop / Afrobeat',
    images: [ImgGr2T1, ImgGr2T2, ImgGr2T3],
  },

  {
    id: 'punk_metal_grunge',
    title: 'Punk / Metal / Grunge',
    images: [ImgGr3T1, ImgGr3T2, ImgGr3T3],
  },
  {
    id: 'soul_jazz_blues_folk',
    title: 'Soul / Jazz / Blues / Folk',
    images: [ImgGr4T1, ImgGr4T2, ImgGr4T3],
  },

  {
    id: 'electronic_experimental_other',
    title: 'Electronic / Experimental / Other',
    images: [ImgGr5T1, ImgGr5T2, ImgGr5T3],
  },
  {
    id: 'cover_bands_and_tributes',
    title: 'Cover bands and tributes',
    images: [ImgGr6T1, ImgGr6T2, ImgGr6T3],
  },
];

export default function Group() {
  const router = useRouter();
  const classes = useStyles();

  const goToGroupDetail = (id) => {
    router.push(`/artists/?group_key=${id}&page_id=1`);
  }

  const renderImg = (src) => (
    <Image src={src} alt="not found" className={classes.groupBandImg} />
  );

  const renderItem = (item) => (
    <div
      key={item.id}
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