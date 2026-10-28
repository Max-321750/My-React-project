import React, { useState } from 'react'
import './Card.css'

const Card = ({ title, image, artist, index = 0 }) => {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="music-card">
      <div className="music-card-artwork">
        <img src={image} alt={`${title} cover`} className="music-card-image" />
        <button
          type="button"
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          className={`music-card-play ${playing ? 'is-playing' : ''}`}
          onClick={() => setPlaying((current) => !current)}
        >
          {playing ? 'II' : '▶'}
        </button>
      </div>

      <div className="music-card-details">
        <span className="music-card-number">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="music-card-copy">
          <h3 className="music-card-title">{title}</h3>
          <p className="music-card-artist">{artist}</p>
        </div>
      </div>
    </article>
  )
}

export default Card