//Hooks

import { useState } from "react";

//Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images

import { faCheck } from "@fortawesome/free-solid-svg-icons";


export default function EditData ({data, setData}) {

// console.log("Edit Data", data)

const [fulltips, setFullTips] = useState(data[0].fulltips)


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
  onClick={() => console.log(`http call using ${fulltips} as number`)}
    />
  </div>

  )

}



