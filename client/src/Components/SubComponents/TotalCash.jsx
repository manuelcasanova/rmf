//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext';

export default function TotalCash() {

  const {

    // Color

    color,

    // Cash

    cash,
    receipts, setReceipts,
    float, setFloat,
    cashCount,
    cashCounted, setCashCounted,
    totalCash,

    // Info

    totalCashInfo, showTotalCashInfo, showTotalHoursInfo


  } = useContext(AppContext);


  return (
    <>
      {!cashCount && (

        <div className='inline'>
          <label className='inline-label'>Cash counted</label>
          <input type="number" className='money-input' value={cashCounted} onChange={(e) => setCashCounted(e.target.value)}
            onClick={() => setCashCounted("")}
            onFocus={() => setCashCounted("")}
          ></input>
        </div>
      )}

      {cashCount && (

        <div className='inline'>
          <label className='inline-label'>Cash counted</label>
          <div className='money-input'>{cash}</div>
        </div>
      )}


      <div className='inline'>
        <label className='inline-label'>Receipts</label>
        <input type="number" className='money-input' value={receipts} onChange={(e) => setReceipts(e.target.value)} onClick={() => setReceipts("")} onFocus={() => setReceipts("")}></input>
      </div>

      <div className='inline'>
        <label className='inline-label' onClick={showTotalCashInfo}>TOTAL CASH <div className={color !== 'blue' ? "info" : "info-red"} onClick={showTotalHoursInfo}>i</div></label>
        <div className='money-input'>{!isNaN(totalCash.toFixed(2)) && totalCash.toFixed(2)}</div>

        {isNaN(totalCash.toFixed(2))
          &&
          <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
        }
      </div>

      {totalCashInfo && <div className='info-message'>Cash counted + receipts</div>}

      <div className='inline'>
        <label className='inline-label'>Float</label>
        <input type="number" className='money-input' value={float} onChange={(e) => setFloat(e.target.value)}
          onClick={() => setFloat("")}
          onFocus={() => setFloat("")}
        ></input>
      </div>
    </>
  )

}