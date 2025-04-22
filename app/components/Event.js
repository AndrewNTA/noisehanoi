'use client'

import InfoIcon from '@mui/icons-material/Info'
import { formatPrice, formatDisplayTime } from '../utils'

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
  const preSalePriceDisplay = preSalePrice
    ? `- ${formatPrice(preSalePrice)} vnd ticket presale`
    : ''
  return (
    <div className="event-wrapper">
      <div className="event-name">{eventName}</div>
      <div className="event-extra-info">{extraInfo}</div>
      <div className="event-info">
        <div className="event-time">{formatDisplayTime(time)}</div>
        {venueLink ? (
          <a
            href={venueLink}
            target="_blank"
            rel="noreferrer"
            className="event-venue-link"
          >
            {venueName}
          </a>
        ) : (
          <div className="event-venue">{venueName}</div>
        )}
      </div>
      <div className="event-row">
        <div className="event-more-info">
          <InfoIcon fontSize="small" sx={{ marginRight: '4px' }} />
          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            className="event-more-info-text"
          >
            More info
          </a>
        </div>
        <div className="event-price">{`${formatPrice(
          price
        )} vnd ${preSalePriceDisplay}`}</div>
      </div>
      {optionalInfo && (
        <div className="event-optional">
          <div className="event-optional-icon">NB:</div>
          <span>{optionalInfo}</span>
        </div>
      )}
    </div>
  )
} 