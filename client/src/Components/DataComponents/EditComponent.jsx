//Hooks

import { useState, useContext } from 'react'
import axios from 'axios';
import { AppContext } from '../../contexts/AppContext';

//Images, icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";



export default function EditTips({ property,
  setShowFulltips,
  setShowAssistanttips,
  setShowAdultspizzaprice,
  setShowhowAdultscocktailprice,
  setShowKidspizzaprice,
  setShowFieldtripprice,
  setShowPizzatipspercent,
  setShowKitchentipspercent,
  setShowFronttipspercent,
  setShowSundayspizzatip,
  isAM
}) {

    const { BACKEND, data, setData

} = useContext(AppContext);


  const [value, setValue] = useState(data[0][property]);


  const editComponent = async (e) => {
    e.preventDefault();
    try {
      
      const body = { value };
  
      await axios.put(`${BACKEND}/data/${property}`, body, {
        headers: { "Content-Type": "application/json" },
      });

      const response = await axios.get(`${BACKEND}/data`);
      setData([...response.data]);


      // Call the appropriate setShow function
      if (property === "fulltips") {
        setShowFulltips((prev) => !prev);
      } else if (property === "assistanttips") {
        setShowAssistanttips((prev) => !prev);
      } else if (property === "adultspizzaprice") {
        setShowAdultspizzaprice((prev) => !prev);
      } else if (property === "adultscocktailprice") {
        setShowhowAdultscocktailprice((prev) => !prev);
      } else if (property === "kidspizzaprice") {
        setShowKidspizzaprice((prev) => !prev);
      } else if (property === "fieldtripprice") {
        setShowFieldtripprice((prev) => !prev);
      } else if (property === "pizzatipspercent") {
        setShowPizzatipspercent((prev) => !prev);
      } else if (property === "kitchentipspercent") {
        setShowKitchentipspercent((prev) => !prev);
      } else if (property === "fronttipspercent") {
        setShowFronttipspercent((prev) => !prev);
      } else if (property === "sundayspizzatip") {
        setShowSundayspizzatip((prev) => !prev);
      }
     
     isAM ? window.location.href = '/am' : window.location.href = '/pm' 

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="data-line">
      <div className="data-left"></div>
      <div className="data-right">
        <div>This version of the app is a sample version, and the data within it cannot be modified.</div>
        {/* <input
          type="number"
          className="edit-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        /> */}
      </div>
      {/* <FontAwesomeIcon
        className="fa-check"
        icon={faCheck}
        onClick={(e) => editComponent(e)}
      /> */}
    </div>
  );
}