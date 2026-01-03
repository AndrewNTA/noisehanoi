import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { styled } from '@mui/material/styles'

const groupList = [
  {
    id: 'rock',
    title: 'Rock',
    images: ['/images/avatar_rock_1.png', '/images/avatar_rock_2.png', '/images/avatar_rock_3.png'],
  },
  {
    id: 'indie',
    title: 'Indie',
    images: ['/images/avatar_indie_1.png', '/images/avatar_indie_2.png', '/images/avatar_indie_3.png'],
  },
  {
    id: 'reggae_hiphop_afrobeat',
    title: 'Reggae / Hip hop / Afrobeat',
    images: ['/images/avatar_reggae_1.jpg', '/images/avatar_reggae_2.jpg', '/images/avatar_reggae_3.jpg'],
  },
  {
    id: 'punk_metal_grunge',
    title: 'Punk / Metal / Grunge',
    images: ['/images/avatar_punk_1.jpg', '/images/avatar_punk_2.jpg', '/images/avatar_punk_3.jpg'],
  },
  {
    id: 'soul_jazz_blues_folk',
    title: 'Soul / Jazz / Blues / Folk',
    images: ['/images/avatar_soul_1.jpeg', '/images/avatar_soul_2.jpeg', '/images/avatar_soul_3.jpg'],
  },
  {
    id: 'electronic_experimental_other',
    title: 'Electronic / Experimental / Other',
    images: ['/images/avatar_elec_1.jpg', '/images/avatar_elec_2.jpg', '/images/avatar_elec_3.jpg'],
  },
  {
    id: 'cover_bands_and_tributes',
    title: 'Cover bands and tributes',
    images: ['/images/avatar_cover_1.jpg', '/images/avatar_cover_2.jpg', '/images/avatar_cover_3.jpg'],
  },
  {
    id: 'band_graveyard_rip',
    title: 'Band Graveyard R.I.P',
    images: ['/images/avatar_band_1.png', '/images/avatar_band_2.png', '/images/avatar_band_3.png'],
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