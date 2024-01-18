import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function EditTips({ data, setData, property, endpoint }) {
  const [value, setValue] = useState(data[0][property]);

  const editComponent = async (e) => {
    e.preventDefault();
    try {
      const body = { value }; // Assuming "value" is the property name expected by the backend
      await axios.put(`http://localhost:8001/data/${property}`, body, {
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