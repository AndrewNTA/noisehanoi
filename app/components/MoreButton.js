'use client'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import useStyles from './styles'

const noop = () => {}

export default function MoreButton({ text, onClick }) {
  const classes = useStyles()
  return (
    <div className={classes.mbWrapper} onClick={onClick ? onClick : noop}>
      <span>{text}</span>
      <KeyboardDoubleArrowRightIcon />
    </div>
  )
} 