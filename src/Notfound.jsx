import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    
    const Handleclick = () =>{
       navigate("/")
    }
  return (
    <div>
    <div className='mx-auto'>
      <h1 className="text-center text-danger">404</h1>
      <p>Page Not Found</p>
      <button onClick={Handleclick} className='btn btn-primary'>Go Back</button>
    </div>
    </div>
  )
}

export default Notfound
