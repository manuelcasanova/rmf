//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext';

//Components

import ErrorMessageInputField from "./ErrorMessageInputField";

export default function Totals({isAM}) {

  const {

    //Hours

    totalHours,

    // Color

    color,

    // Cash

    cash,
    cashCounted, 

    //Tips

    tipsPerHour, 
    tipsPerHourPM,
    frontTips,
    frontTipsPM,
    pizzaTips,
    pizzaTipsPM,

    // Info

    totalHoursInfo, showTotalHoursInfo, newFloatInfo, showNewFloatInfo


  } = useContext(AppContext);


  return (
    <section className='summary'>

    <div className='inline'>
      <label className='inline-label'>TOTAL HOURS <div className={color !== 'blue' ? "info" : "info-red"} onClick={showTotalHoursInfo}>i</div></label>

      <div className='tips-input'>
        {
          !isNaN(totalHours.toFixed(2)) &&
          totalHours.toFixed(2)

        }

        {isNaN(totalHours.toFixed(2))
          &&
          <ErrorMessageInputField />
        }


      </div>

    </div>
    {totalHoursInfo && <div className='info-message'>Total hours considered for tips. It takes into consideration the difference between server and server support.</div>}

    <div className='inline'>
      <label className='inline-label'>TIPS per HOUR</label>
      <div className='tips-input'>{totalHours !== 0 && 
      (isAM ? tipsPerHour : tipsPerHourPM)
      ().toFixed(2)}</div>
    </div>

    <div className='inline'>
      <label className='inline-label'>NEW FLOAT <div className={color !== 'blue' ? "info" : "info-red"} onClick={showNewFloatInfo}>i</div></label>
      <div className='tips-input'>

        {

          // cashCounted !== 0 || cash !== 0

          // &&

          // (cashCounted - frontTips - pizzaTips).toFixed(2)

          (isAM ? 
            
            (cash > 0 ? (cash - frontTips - pizzaTips) : (cashCounted - frontTips - pizzaTips)).toFixed(2)
            
            : 
            
            (cash > 0 ? (cash - frontTipsPM - pizzaTipsPM) : (cashCounted - frontTipsPM - pizzaTipsPM)).toFixed(2)
            
            )
          
       

          


        }</div>
    </div>

    {newFloatInfo && <div className='info-message'>New float = Cash counted - Pizza making tips - front tips</div>}

  </section>

  )

}