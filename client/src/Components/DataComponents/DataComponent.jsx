//Hooks

import { useState, useEffect } from "react";

//Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images

import { faEdit } from "@fortawesome/free-solid-svg-icons";

//Components

import Editfulltips from "./Editfulltips";
import Editassistanttips from "./Editassistanttips";

export default function DataComponent({ data, setData }) {



  const [showfulltips, setShowfulltips] = useState(false)
  const [showassitanttips, setShowassistanttips] = useState(false)


//Edit input


const handleEditfulltips = () => {
  setShowfulltips(!showfulltips)
}

const handleEditassistanttips = () => {
  setShowassistanttips(!showassitanttips)
}


  return (
    <div className="data-component">
      <div className="data-line">
        <div className="data-left">{`Supervisor / Server Tips: `}</div>
        <div className="data-right">{`${data[0]?.fulltips} %`}</div>
        <FontAwesomeIcon icon={faEdit}
        onClick={handleEditfulltips}
        />
      </div>

      {showfulltips && <Editfulltips data={data} setData={setData}/>}

      <div className="data-line">
        <div className="data-left">{`Server Support tips: `}</div>
        <div className="data-right">{`${data[0]?.assistanttips} %`}</div>
        <FontAwesomeIcon icon={faEdit}
        onClick={handleEditassistanttips}
        />
      </div>

      {showassitanttips && <Editassistanttips data={data} setData={setData}/>}

      <div className="data-line">
        <div className="data-left">{`Adults Pizza Price: `}</div>
        <div className="data-right">{`${data[0]?.adultspizzaprice} $`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Adults Cocktail Price: `}</div>
        <div className="data-right">{`${data[0]?.adultscocktailprice} $`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Field Trip Price: `}</div>
        <div className="data-right">{`${data[0]?.fieldtripprice} $`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Pizza Party Tips %: `}</div>
        <div className="data-right">{`${data[0]?.pizzatipspercent} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Kitchen Tips %: `}</div>
        <div className="data-right">{`${data[0]?.kitchentipspercent} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`FOH Tips %: `}</div>
        <div className="data-right">{`${data[0]?.fronttipspercent} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Sundays pizza tips per hour: `}</div>
        <div className="data-right">{`${data[0]?.sundayspizzatip} $`}</div>
      </div>



    </div>
  )
}


