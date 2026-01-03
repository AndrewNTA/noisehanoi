import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { styled } from '@mui/material/styles'

const MoreButtonWrapper = styled('div')({
  padding: '8px 12px',
  borderRadius: '4px',
  border: '2px solid #ffffff',
  cursor: 'pointer',
  marginTop: '20px',
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  '&:hover': {
    border: '2px solid #1EBDD3',
    color: '#1EBDD3',
  },
})

const noop = () => {}

export default function MoreButton({ text, onClick }) {
  return (
    <MoreButtonWrapper onClick={onClick ? onClick : noop}>
      <span>{text}</span>
      <KeyboardDoubleArrowRightIcon />
    </MoreButtonWrapper>
  )
} 