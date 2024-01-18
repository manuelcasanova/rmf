import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Editfulltips({ data, setData }) {
  const [fulltips, setFullTips] = useState(data[0].fulltips);

  const editFulltips = async (e) => {
    e.preventDefault();
    try {
      const body = { fulltips };
      await axios.put(`http://localhost:8001/data/fulltips`, body, {
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
          value={fulltips}
          onChange={(e) => setFullTips(e.target.value)}
        />
      </div>
      <FontAwesomeIcon
        className="fa-check"
        icon={faCheck}
        onClick={(e) => editFulltips(e)}
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