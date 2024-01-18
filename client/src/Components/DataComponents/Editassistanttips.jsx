import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Editassistanttips({ data, setData }) {
  const [assistanttips, setAssistanttips] = useState(data[0].assistanttips);

  const editAssistanttips = async (e) => {
    e.preventDefault();
    try {
      const body = { assistanttips };
      await axios.put(`http://localhost:8001/data/assistanttips`, body, {
        headers: { "Content-Type": "application/json" },
      });

      const response = await axios.get(`http://localhost:8001/data`);
      setData([...response.data]);
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
          value={assistanttips}
          onChange={(e) => setAssistanttips(e.target.value)}
        />
      </div>
      <FontAwesomeIcon
        className="fa-check"
        icon={faCheck}
        onClick={(e) => editAssistanttips(e)}
      />
    </div>
  );
}

// const assistantTips = data[0].assistanttips;
// const kidsPizzaPrice = data[0].kidspizzaprice;
// const adultsPizzaPrice = data[0].adultspizzaprice;
// const adultsCocktailPrice = data[0].adultscocktailprice;
// const fieldTripPrice = data[0].fieldtripprice;
// const pizzaTipsPercent = data[0].pizzatipspercent;
// const kitchenTipsPercent = data[0].kitchentipspercent;
// const frontTipsPercent = data[0].fronttipspercent;
// const sundaysPizzaTip = data[0].sundayspizzatip;