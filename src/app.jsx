// import hero from "./assets/hero.png"
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Landing from "./Landing.jsx";
import Sportify from "./Sportify.jsx";
import Notfound from "./Notfound.jsx";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function App(){
  const location = useLocation()
  console.log(location);
  const pathnames = ['/', '/sportify', '/landing']

  return (
    <div>
        {/* <h1 className="h1">hello this is my first react class</h1>
        <p>{Math.random()}</p>
        <p style={{color:"blue",fontSize:"50px",fontWeight:"bold"}}>Inline styling</p>
        <button className="btn btn-dark">Click</button>
        <input className="form-control w-50 py-3" type="text" name="" id="" />
        <img src={hero} alt="" /> */}
        
       {pathnames.includes(location.pathname) &&  <Navbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/sportify" element={<Sportify />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
    </div>
  )
}

export default App



/// assignment ; Work on nested routing