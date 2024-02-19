//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext';

//Libraries

import ReactToPrint from 'react-to-print'

//Components

import Now from './Now';

export default function SummaryPM() {

  const {

    // Color
    color,

    // Tips
    assistantTips,
    pizzaTips,
    creditCardsTipsAM, 
    creditCardsTipsPrintOut,
    cashTipsPM, 
     kitchenTipsPM,
    frontTipsPM, 
    tipsPerHourPM,



    // Toggle and Visibility
    toggle,


    // Cash
    cash, cashCounted,
    receipts, totalCash,
    float, cashSalesAM,
    cashSalesPM, cashSalesPrintOut,


    // Summary
    summary,

    // Display Toggle
    showSummary, 

    // Server Hours and Names
    server1Hours, 
    server2Hours, 
    server3Hours, 
    server4Hours, 
    server5Hours, 

    server1Name, 
    server2Name, 
    server3Name, 
    server4Name, 
    server5Name, 

    // Assistant Hours and Names
    assistant1Hours, 
    assistant2Hours, 
    assistant3Hours, 
    assistant1Name, 
    assistant2Name, 
    assistant3Name, 

    // Total Hours, Tips Per Hour, and Rounding
    totalHours, roundToTwo,

    // Total Instructors
    totalInstructor1, totalInstructor2,
    totalInstructor3, totalInstructors,


  } = useContext(AppContext);

  const componentRef = useRef();
  const now = Now()

  return (
    <div
      className='pizza-making-question'>
      {!summary && <div className='padding-bottom'>
        <button className='clear-all' onClick={showSummary}>Show summary</button>

      </div>
      }


      {summary && <div>
        <button className='clear-all-x' onClick={showSummary}>X</button>

      </div>}


      {summary &&
        <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>

          <ReactToPrint
            trigger={() => {
              return <button className='clear-all'>Print summary</button>
            }}
            content={() => componentRef.current}
            documentTitle="new document"
            pageStyle="print"

          />

          <div className='print-component' ref={componentRef}>
            <div className='print-line'>{now}</div>
            <div className='print-line'>Cash counted: {cash > 0 ? cash : cashCounted}$</div>
            <div className='print-line'>Receipts: {receipts}$</div>
            <div className='print-line'>TOTAL CASH: {totalCash}$</div>
            <div className='print-line'>Float: {float}$</div>
            <div className='print-line'>Cash sales AM: {cashSalesAM}$</div>
            <div className='print-line'>Cash sales Print Out: {cashSalesPrintOut}$</div>
            <div className='print-line'>Cash sales PM: {cashSalesPM}$</div>
            <div className='print-line'>Cash tips: {cashTipsPM}$</div>
            <div className='print-line'>Credit card tips AM: {creditCardsTipsAM}$</div>
            <div className='print-line'>Credit card tips Print Out: {creditCardsTipsPrintOut}$</div>
            <div className='print-line'>Credit card tips PM: {roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)}$</div>
            <div className='print-line'>TOTAL TIPS PM: {(roundToTwo(cashTipsPM) + roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)).toFixed(2)}$</div>
            <div className='print-line'></div>
            <div className='print-line'>Special Events Tips: {pizzaTips}$</div>
            <div className='print-line'>Kitchen Tips: {kitchenTipsPM}$</div>
            <div className='print-line'>Front Tips: {frontTipsPM}$</div>
            <div className='print-line'>Total hours: {totalHours.toFixed(2)}</div>
            <div className='print-line'>Tips per hour: {tipsPerHourPM().toFixed(2)}$</div>
            <div className='print-line'>NEW FLOAT: {(cash > 0 ? (cash - frontTipsPM - pizzaTips) : (cashCounted - frontTipsPM - pizzaTips)).toFixed(2)}$</div>
            <div className='print-line'></div>
            <div className='print-line'>TIPS DISTRIBUTION:</div>

            <div className='print-servers-tip'>

              {server1Hours !== 0 && server1Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server1Name}</div>
                <div className='server-details'>{server1Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server1Hours).toFixed(2)}$</div>
              </div>}

              {server2Hours !== 0 && server2Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server2Name}</div>
                <div className='server-details'>{server2Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server2Hours).toFixed(2)}$</div>
              </div>}

              {server3Hours !== 0 && server3Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server3Name}</div>
                <div className='server-details'>{server3Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server3Hours).toFixed(2)}$</div>
              </div>}

              {server4Hours !== 0 && server4Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server4Name}</div>
                <div className='server-details'>{server4Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server4Hours).toFixed(2)}$</div>
              </div>}


              {server5Hours !== 0 && server5Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server5Name}</div>
                <div className='server-details'>{server5Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server5Hours).toFixed(2)}$</div>
              </div>}

              {assistant1Hours !== 0 && assistant1Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant1Name}</div>
                <div className='server-details'>{assistant1Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {assistant2Hours !== 0 && assistant2Hours !== "0" && assistant2Hours !== 0 && <div className='print-server'>
                <div className='server-details'>{assistant2Name}</div>
                <div className='server-details'>{assistant2Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {assistant3Hours !== 0 && assistant3Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant3Name}</div>
                <div className='server-details'>{assistant3Hours} h. </div>
                <div className='server-details'>{(frontTipsPM / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {parseInt(totalInstructor1) !== 0 && 
              
              
              parseInt(totalInstructors) === parseInt(pizzaTips) &&
              
              
              <div className='print-server'>
                <div className='server-details'>Special Event Server 1: </div>
                <div></div>
                <div className='server-details'>{totalInstructor1}$</div>
              </div>}

              {parseInt(totalInstructor2) !== 0 && 
              
              parseInt(totalInstructors) === parseInt(pizzaTips) &&
              
              <div className='print-server'>
                <div className='server-details'>Special Event Server 2: </div>
                <div></div>
                <div className='server-details'>{totalInstructor2}$</div>
              </div>}

              {parseInt(totalInstructor3) !== 0 && 
              
              parseInt(totalInstructors) === parseInt(pizzaTips) &&
              
              <div className='print-server'>
                <div className='server-details'>Special Event Server 3: </div>
                <div></div>
                <div className='server-details'>{totalInstructor3}$</div>
              </div>}

              {parseInt(totalInstructors) !== parseInt(pizzaTips) &&

<section className='servers warning-message'>
  <div className='warning-message'>Warning!! The pizza instructors' total tips and the tips distributed amongst the 3 instructors do not match! The sum of the total tips for the three instructors must match the total pizza instructor tips: {pizzaTips}$. However, the total sum of the tips for the three instructors currently adds to {parseFloat(totalInstructors).toFixed(2)} $.</div>
 
</section>
}

            </div>

          </div>




        </div>
      }
    </div>
  )

}