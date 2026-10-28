import React from 'react'


const Displaytodo = ({todoarray}) => {
  return (
    <div>
        Displaytodo
        {todoarray && todoarray.map((todo,index)=>(
            <div key={index}>
                <h1>{todo}</h1>
            </div>
        ))}
    </div>
  )
}

export default Displaytodo