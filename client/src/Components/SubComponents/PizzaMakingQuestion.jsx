//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext';

export default function PizzaMakingQuestion() {

  const {

redLine, showRedLine,
pizzaParties,
showPizzaParties

  } = useContext(AppContext);


  return (
    <div
    className='pizza-making-question'
  >
    Pizza parties or Pizza making for children?

    <div className='yes-no'>
      {!pizzaParties && <button className='clear-all' onClick={showPizzaParties}>Yes</button>}
      {!pizzaParties && <button className={redLine ? 'clear-all red-line' : 'clear-all'} onClick={showRedLine}>No</button>}
    </div>
    {pizzaParties && <button className='clear-all' onClick={showPizzaParties}>No</button>}
  </div>
  )

}