import React from 'react'

 const Input = ({ onchange, type, placeholder }) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={onchange} />
        </div>
  )
}

export default Input