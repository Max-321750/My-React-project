import React,{ useState } from 'react'
import Button from './props/Button'
import Input from './props/Input.jsx'
import Displaytodo from './Displaytodo.jsx'



const statelift = () => {
     const [title, settitle] = useState("")
     const [todoarray, settodoarray] = useState([])

     const handleclick = (e) =>{
        settodoarray([...todoarray, title])
     }


  return (
    <div>
      <h1>State Lift</h1>
      <Input
        value={title}
        placeholder="Enter your todo"
        onChange={(event) => setTitle(event.target.value)}
        onchange={(event) => setTitle(event.target.value)}
      />
      <Button text="Add todo" onclick={handleClick} />
      <Displaytodo todoarray={todoArray} />
    </div>
  )
}


export default statelift
