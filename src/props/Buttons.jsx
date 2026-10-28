import React from 'react'

const Buttons = ({ text, onclick, className }) => {
  return (
    <button className={className} onClick={onclick}>
      {text}
    </button>
  )
}

export default Buttons