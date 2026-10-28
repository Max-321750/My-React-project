import React from 'react' 
import { useState } from 'react'

const Todo = () => {
    const [user, setuser] = useState('')
    const [use, setuse] = useState('')
    const [content, setcontent] = useState([])
    const [showing, setshowing] = useState(false)

const todo = (e) => {
    console.log(e.target.value)
    setuser(e.target.value)
}

const handleclick = () =>{
    const userobj = {
      title: user,
      description: use
    }
    setcontent([...content, userobj])
    setuser("")
}

const handledelete = (i) =>{
  console.log(i);
  setcontent((todo)=> todo.filter((_, index)=> index !== i))
}
const handleupdate = () =>{
    // setshowing(!showing)
    if(showing == false){
        setshowing(true)
    }else{
        setshowing(false)
    }
}

  return (
    <>
    <div>Todo</div>
    <input value={user} type={showing ? "text" : "password"} onChange={todo}/>
    <input type="text"  onChange={(e)=> setuse(e.target.value)}/>
    <button onClick={handleupdate}>{showing ? "hide" : "show"}</button>
    <button onClick={handleclick}>Update</button>

    <h1>this is second react class {user}</h1>
    {content.length == 0 ?  <p>No content available at the moment</p> :
     content.map((el , i)=>{
        return (
            <>
           <div key={i}>
             <h1>{el.title} {el.description}</h1>
             <button onClick={()=>handledelete(i)}>delete</button>
           </div>
            </>
        )
    })

    }
    
    </>
  )
}

export default Todo