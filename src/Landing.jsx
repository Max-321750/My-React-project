import React,{useState} from 'react'
import Button from './props/Button'
import input from './props/Input.jsx'

const Landing = () => {
  const [username, setusername] = useState("lolade")
  const [user, setuser] = useState({name:"Tade",age:"20",school:"SQI"})

  let gender = "female"
  const userobj = {name:"shade", class:"react", age:20}
  
  const handleclick = () =>{
    gender = "male"
    console.log(gender);
    setusername("Tola")
    setuser({...user , name:"Shina"})
  }
  const handlesignup = () =>{
    console.log( "A user is trying to register");
    
  }
  return (
    
    <div>
      <h1>This is Landing page</h1>
      <p>{gender}</p>
      <p>{userobj.name}</p>
      {/* <button onClick={()=> handleclick("hello")}>click</button> */}
      {/* <button onClick={handleclick}>click</button>  */}
       <Button text="click" onclick={handleclick}/>
      <h1>{username}</h1>
      <h3>My name is {user.name}, i am {user.age} year old studing a tech course at {user.school}.</h3>
      <Button text="Loading" onclick={()=> alert("loading...")}/>
      <Button text="Signup" onclick = {handlesignup}/>
      <Button text="Login"/><br></br><br></br><br></br>



       <input placeholder="Enter your name" onchange={(e) => setusername(e.target.value)} />
     
    </div>
  )
}

export default Landing