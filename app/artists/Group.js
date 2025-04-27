'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { styled } from '@mui/material/styles'

import ImgRock1 from '../static/images/avatar_rock_1.png'
import ImgRock2 from '../static/images/avatar_rock_2.png'
import ImgRock3 from '../static/images/avatar_rock_3.png'

import ImgIndie1 from '../static/images/avatar_indie_1.png'
import ImgIndie2 from '../static/images/avatar_indie_2.png'
import ImgIndie3 from '../static/images/avatar_indie_3.png'

import ImgReggae1 from '../static/images/avatar_reggae_1.jpg'
import ImgReggae2 from '../static/images/avatar_reggae_2.jpg'
import ImgReggae3 from '../static/images/avatar_reggae_3.jpg'

import ImgPunk1 from '../static/images/avatar_punk_1.jpg'
import ImgPunk2 from '../static/images/avatar_punk_2.jpg'
import ImgPunk3 from '../static/images/avatar_punk_3.jpg'

import ImgSoul1 from '../static/images/avatar_soul_1.jpeg'
import ImgSoul2 from '../static/images/avatar_soul_2.jpeg'
import ImgSoul3 from '../static/images/avatar_soul_3.jpg'

import ImgElec1 from '../static/images/avatar_elec_1.jpg'
import ImgElec2 from '../static/images/avatar_elec_2.jpg'
import ImgElec3 from '../static/images/avatar_elec_3.jpg'

import ImgCover1 from '../static/images/avatar_cover_1.jpg'
import ImgCover2 from '../static/images/avatar_cover_2.jpg'
import ImgCover3 from '../static/images/avatar_cover_3.jpg'

import ImgBand1 from '../static/images/avatar_band_1.png'
import ImgBand2 from '../static/images/avatar_band_2.png'
import ImgBand3 from '../static/images/avatar_band_3.png'

const groupList = [
  {
    id: 'rock',
    title: 'Rock',
    images: [ImgRock1, ImgRock2, ImgRock3],
  },
  {
    id: 'indie',
    title: 'Indie',
    images: [ImgIndie1, ImgIndie2, ImgIndie3],
  },
  {
    id: 'reggae_hiphop_afrobeat',
    title: 'Reggae / Hip hop / Afrobeat',
    images: [ImgReggae1, ImgReggae2, ImgReggae3],
  },
  {
    id: 'punk_metal_grunge',
    title: 'Punk / Metal / Grunge',
    images: [ImgPunk1, ImgPunk2, ImgPunk3],
  },
  {
    id: 'soul_jazz_blues_folk',
    title: 'Soul / Jazz / Blues / Folk',
    images: [ImgSoul1, ImgSoul2, ImgSoul3],
  },
  {
    id: 'electronic_experimental_other',
    title: 'Electronic / Experimental / Other',
    images: [ImgElec1, ImgElec2, ImgElec3],
  },
  {
    id: 'cover_bands_and_tributes',
    title: 'Cover bands and tributes',
    images: [ImgCover1, ImgCover2, ImgCover3],
  },
  {
    id: 'band_graveyard_rip',
    title: 'Band Graveyard R.I.P',
    images: [ImgBand1, ImgBand2, ImgBand3],
  },
]

const GroupContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})

const GroupBox = styled('div')({
  width: '49%',
  boxSizing: 'border-box',
  padding: '16px',
  marginBottom: '2rem',
  border: '1px solid #ffffff',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    transition: 'transform 0.2s',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
  },
})

const GroupTitle = styled('p')({
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: 700,
  fontStyle: 'italic',
  marginTop: 0,
  marginBottom: '1rem',
  '@media (max-width: 600px)': {
    fontWeight: 600,
  },
})

const GroupImagesContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const GroupImage = styled(Image)({
  float: 'left',
  width: '30%',
  height: '6rem',
  objectFit: 'cover',
  '@media (max-width: 600px)': {
    height: '3.5rem',
  },
})

export default function Group() {
  const router = useRouter()

  const goToGroupDetail = (id) => {
    router.push(`/artists/?group_key=${id}&page_id=1`)
  }

  const renderImg = (src, index) => (
    <GroupImage
      key={`${src}-${index}`}
      src={src}
      alt="group"
      width={200}
      height={200}
    />
  )

  const renderItem = (item) => (
    <GroupBox key={item.id} onClick={() => goToGroupDetail(item.id)}>
      <GroupTitle>{item.title}</GroupTitle>
      <GroupImagesContainer>
        {item.images.map((src, index) => renderImg(src, index))}
      </GroupImagesContainer>
    </GroupBox>
  )

  return <GroupContainer>{groupList.map(renderItem)}</GroupContainer>
} 