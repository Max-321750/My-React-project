import React from 'react'
import Card from './props/Card'
import './Sportify.css'


const musicArray = [
  { id: 1, title: 'Neon Days', artist: 'Maya June', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85' },
  { id: 2, title: 'Slow Motion', artist: 'The Wild Skies', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85' },
  { id: 3, title: 'Afterglow', artist: 'Lena Rowe', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85' },
  { id: 4, title: 'Golden Hour', artist: 'North Coast', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85' },
  { id: 5, title: 'Midnight Drive', artist: 'Nova Club', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=85' },
  { id: 6, title: 'Soft Landing', artist: 'Elio Parks', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=85' },
]

const Sportify = () => {
  return (
    <main className="sportify-page">
      <header className="sportify-header">
        <div>
          <p className="sportify-kicker">SELECTED SOUNDS / 2026</p>
          <h1 className="sportify-title">Fresh Finds</h1>
        </div>
        <span className="sportify-count">{musicArray.length} releases</span>
      </header>

      <section className="sportify-grid">
        {musicArray.map((music, index) => (
          <Card
            key={music.id}
            index={index}
            title={music.title}
            artist={music.artist}
            image={music.image}
          />
        ))}
      </section>
    </main>
  )
}

export default Sportify