import { userarry } from "./Variable"
import './App.css'
import { FaUserFriends } from "react-icons/fa";

function Home() {
    return <>
     <h1 className="home">This is my Homepage</h1>

       {userarry.map((user,i)=>{
         return <div>
               <p>{user.class}</p>
               <p><FaUserFriends /> {user.name}</p>
         </div>
       })

       }
    </>
}



export default Home