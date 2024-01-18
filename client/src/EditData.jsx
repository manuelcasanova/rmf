//Hooks

import { useState } from "react";
import axios from 'axios'

//Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images

import { faCheck } from "@fortawesome/free-solid-svg-icons";


export default function EditData ({data, setData}) {

// console.log("Edit Data", data)

const [fulltips, setFullTips] = useState(data[0].fulltips)


// Edit fulltips function

const editFulltips = async (e) => {
  e.preventDefault()
  try {
    const body = { fulltips};
    const response = await fetch(`http://localhost:8001/data/fulltips`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })

    //Render changes without page refresh:

    axios.get(`http://localhost:8001/data`)
    .then(function (res) {
      setData([...res.data])
    })


  } catch (err) {
    console.error(err.message)
  }
}

  return (
    <div className="data-line">
    <div className="data-left"></div>
    <div className="data-right">

    <input type="number" className='edit-input' value={fulltips} onChange={(e) => setFullTips(e.target.value)}
// onClick={(e) => console.log("onClick")}
// onFocus={(e) => console.log("onFocus")}
></input>


    </div>
    <FontAwesomeIcon className="fa-check" icon={faCheck}
    
  onClick={
    
    // () => console.log(`http call using ${fulltips} as number`)

    e => editFulltips(e)
  
  
  }
    />
  </div>

  )

}



