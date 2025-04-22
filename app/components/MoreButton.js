'use client'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const noop = () => {}

export default function MoreButton({ text, onClick }) {
  return (
    <div className="more-button-wrapper" onClick={onClick ? onClick : noop}>
      <span>{text}</span>
      <KeyboardDoubleArrowRightIcon />
    </div>
  )
} 