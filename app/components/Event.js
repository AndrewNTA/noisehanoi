'use client'

import InfoIcon from '@mui/icons-material/Info'
import { formatPrice, formatDisplayTime } from '../utils'
import useStyles from './styles'

export default function Event({
  eventName,
  extraInfo,
  time,
  venueName,
  venueLink,
  price,
  optionalInfo,
  facebookLink,
  preSalePrice,
}) {
  const classes = useStyles()
  const preSalePriceDisplay = preSalePrice
    ? `- ${formatPrice(preSalePrice)} vnd ticket presale`
    : ''
  return (
    <div className={classes.eventWrapper}>
      <div className={classes.eventName}>{eventName}</div>
      <div className={classes.eventExtraInfo}>{extraInfo}</div>
      <div className={classes.eventInfo}>
        <div className={classes.eventTime}>{formatDisplayTime(time)}</div>
        {venueLink ? (
          <a
            href={venueLink}
            target="_blank"
            rel="noreferrer"
            className={classes.eventVenueLink}
          >
            {venueName}
          </a>
        ) : (
          <div className={classes.eventVenue}>{venueName}</div>
        )}
      </div>
      <div className={classes.eventRow}>
        <div className={classes.eventMoreInfo}>
          <InfoIcon fontSize="small" sx={{ marginRight: '4px' }} />
          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            className={classes.eventMoreInfoText}
          >
            More info
          </a>
        </div>
        <div className={classes.eventPrice}>{`${formatPrice(
          price
        )} vnd ${preSalePriceDisplay}`}</div>
      </div>
      {optionalInfo && (
        <div className={classes.eventOptional}>
          <div className={classes.eventOptionalIcon}>NB:</div>
          <span>{optionalInfo}</span>
        </div>
      )}
    </div>
  )
} 