'use client'

export default function SpotifyIframe({ playlistId }) {
  return (
    <div className="spotify-iframe-wrapper">
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
} 