import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function EditTips({ data, setData, property, endpoint,
  setShowFulltips,
  setShowAssistanttips,
  setShowAdultspizzaprice,
  setShowhowAdultscocktailprice,
  setShowKidspizzaprice,
  setShowFieldtripprice,
  setShowPizzatipspercent,
  setShowKitchentipspercent,
  setShowFronttipspercent,
  setShowSundayspizzatip
}) {


  const [value, setValue] = useState(data[0][property]);

  // const BACKEND = 'http://localhost:8001'
  const BACKEND = 'https://backend.rmf.manucasanova.com'

  const editComponent = async (e) => {
    e.preventDefault();
    try {
      
      const body = { value }; // Assuming "value" is the property name expected by the backend
  
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


    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="data-line">
      <div className="data-left"></div>
      <div className="data-right">
        <input
          type="number"
          className="edit-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <FontAwesomeIcon
        className="fa-check"
        icon={faCheck}
        onClick={(e) => editComponent(e)}
      />
    </div>
  );
}