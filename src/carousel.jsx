import React, { useState } from 'react'
import Button from './props/Buttons'
import Card from './props/Card'
import './carousel.css'

const students = [
  {
    name: 'Chika',
    course: 'React Development',
    school: 'SQI',
    image: 'https://ui-avatars.com/api/?name=Chika&background=16304f&color=fff&size=128',
  },
  {
    name: 'Shade',
    course: 'UI/UX Design',
    school: 'SQI',
    image: 'https://ui-avatars.com/api/?name=Shade&background=16304f&color=fff&size=128',
  },
  {
    name: 'Ibrahim',
    course: 'Data Analysis',
    school: 'SQI',
    image: 'https://ui-avatars.com/api/?name=Ibrahim&background=16304f&color=fff&size=128',
  },
  {
    name: 'Shina',
    course: 'Cyber Security',
    school: 'SQI',
    image: 'https://ui-avatars.com/api/?name=Shina&background=16304f&color=fff&size=128',
  },
]

const Carousel = () => {
  // index decides which student is currently showing
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    // when we reach the last one, go back to the first
    setIndex((index + 1) % students.length)
  }

  const handlePrev = () => {
    // when we are on the first one, jump to the last
    setIndex((index - 1 + students.length) % students.length)
  }

  const current = students[index]

  return (
    <div className="carousel-page">
      <h1>Meet Our Students</h1>

      <Card
        image={current.image}
        name={current.name}
        course={current.course}
        school={current.school}
      />

      <div className="carousel-buttons">
        <Button text="Prev" onclick={handlePrev} className="btn" />
        <Button text="Next" onclick={handleNext} className="btn" />
      </div>

      <p className="counter">
        {index + 1} / {students.length}
      </p>

      {/* dots: clicking one jumps straight to that student */}
      <div className="dots">
        {students.map((student, i) => (
          <Button key={i} text="" onclick={() => setIndex(i)} className={i === index ? 'dot active' : 'dot'}/>
        ))}
      </div>
    </div>
  )
}

export default Carousel