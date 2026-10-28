import React,{useState} from 'react'

const Usestateclass = () => {
      const [inputvalue, setinputvalue] = useState("")
      const [inputvalue2, setinputvalue2] = useState("")
      const [inputarray , setinputarray] = useState([])

    const handleinputchange = (e) =>{
        console.log(e.target.value);
        setinputvalue(e.target.value)
    }
    const Handleclick = () =>{
       const userdetail = {
         title: inputvalue,
         description:inputvalue2
       }
       console.log(userdetail);
       
      setinputarray([...inputarray, userdetail])
    }
    // {conditional ? true expresssion : false expression}. Ternary operator
  return (
    <div>
        <p>{inputvalue}</p>
        <input onChange={handleinputchange} type="text" />
        <input onChange={(e)=> setinputvalue2(e.target.value) } type="text" />
        <button onClick={Handleclick}>Add</button>

       {inputarray.length == 0 ? <h1>No user availbale</h1> : inputarray.map((el, i)=>{
        return (
            <>
            <h3>title:{el.title} ,description: {el.description}</h3>
            </>
        )
       })}

       {/* {inputarray.map((el , i)=>(
          <div key={i}>
            <h3>title:{el.title} ,description: {el.description}</h3>
          </div>
       ))} */}
    </div>
  )
}

export default Usestateclass