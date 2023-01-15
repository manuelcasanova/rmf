import { Link } from "react-router-dom"
import { useState } from "react";
import Now from './Now';
import AmButton from "./AmButton";


export default function ClosingNight () {


  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  const now = Now()


  return (
    <div className={toggle ? "App day-mode" : "App night-mode"}>

<label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <div className='switch'>{now}</div>


      <div className='seccion'>

      <div className='title'>Night Shift <div className="info-message margin-top">SOON AVAILABLE!</div></div>
<Link to='/closing'>< AmButton /></Link>



      </div>

    </div>
  )
}