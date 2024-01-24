//Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Image

import { faGear } from "@fortawesome/free-solid-svg-icons";

//Components

import Now from "./Now";


export default function Navbar ({showData, setShowData}) {

  
  const handleData = () => {setShowData(!showData)}

  const now = Now()


  return (
    <div className='navbar'>
    <div className='switch'>{now}</div>
    <div className='switch'> <FontAwesomeIcon icon={faGear} onClick={handleData} /></div>
  </div>
  )
}