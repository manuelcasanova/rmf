//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext';

export default function SetExample() {

  const {

    // Test

    test

  } = useContext(AppContext);


  return (
    <div className='clear-all-div'>
      <button className="clear-all" onClick={test}>Set an example</button>
    </div>
  )

}