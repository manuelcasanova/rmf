//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../../contexts/AppContext';

//Libraries

import ReactToPrint from 'react-to-print'

//Components

import Now from './../SubComponents/Now';

export default function Summary() {

  const {

    // Color
    color, 

    // Tips
    fullTips, assistantTips,
    pizzaTips,
    creditCardsTipsAM, setCreditCardsTipsAM,
    creditCardsTipsPrintOut, setCreditCardsTipsPrintOut,
    cashTipsPM, tipsAfterPizzaPartyPM,
    totalTipsPM, kitchenTipsPM,
    frontTipsPM, sundaysPizzaTip,
    tipsPerHourPM,



    // Toggle and Visibility
    toggle, 


    // Cash
    cash, cashCounted, setCashCounted,
    receipts, setReceipts, totalCash,
    float, setFloat, cashSalesAM, setCashSalesAM,
    cashSalesPM, cashSalesPrintOut, setCashSalesPrintOut, cashCount,


    // Information
    totalCashInfo, totalHoursInfo, cashTipsInfo, newFloatInfo, pizzaParties, supportServerInfo,

    // Party Numbers
    pizzaAdults, setPizzaAdults,
    cocktailAdults, setCocktailAdults,
    pizzaChildren, setPizzaChildren, fieldTrip, setFieldTrip,

    // Summary
    summary,

    // Red Line and Display Toggle
    redLine, showTotalCashInfo, showTotalHoursInfo,
    showCashTipsInfo, showNewFloatInfo,
    showPizzaParties, showCashCount,
    showSummary, showInstructors, showRedLine,

    // Server Hours and Names
    server1Hours, setServer1Hours,
    server2Hours, setServer2Hours,
    server3Hours, setServer3Hours,
    server4Hours, setServer4Hours,
    server5Hours, setServer5Hours,

    server1Name, setServer1Name,
    server2Name, setServer2Name,
    server3Name, setServer3Name,
    server4Name, setServer4Name,
    server5Name, setServer5Name,

    // Assistant Hours and Names
    assistant1Hours, setAssistant1Hours,
    assistant2Hours, setAssistant2Hours,
    assistant3Hours, setAssistant3Hours,
    assistant1Name, setAssistant1Name,
    assistant2Name, setAssistant2Name,
    assistant3Name, setAssistant3Name,

    // Sundays Server Hours
    sundaysServerHours, setSundaysServerHours,

    // Total Hours, Tips Per Hour, and Rounding
    totalHours, roundToTwo,

    // Instructor Information
    instructors,
    instructor1Adults, setInstructor1Adults,
    instructor2Adults, setInstructor2Adults,
    instructor3Adults, setInstructor3Adults,
    instructor1Cocktail, setInstructor1Cocktail,
    instructor2Cocktail, setInstructor2Cocktail,
    instructor3Cocktail, setInstructor3Cocktail,
    instructor1Children, setInstructor1Children,
    instructor2Children, setInstructor2Children,
    instructor3Children, setInstructor3Children,
    instructor1FieldTrip, setInstructor1FieldTrip,
    instructor2FieldTrip, setInstructor2FieldTrip,
    instructor3FieldTrip, setInstructor3FieldTrip,

    // Total Instructors
    totalInstructor1, totalInstructor2,
    totalInstructor3, totalInstructors,

    // Clear Functions and Test
    clearAll, clearServers, test

  } = useContext(AppContext);

  const componentRef = useRef();
  const now = Now()

  return (
    <>
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
            <div className='print-line'>Pizza making Tips: {pizzaTips}$</div>
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
                <div className='server-details'>{server1Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server1Hours).toFixed(2)}$</div>
              </div>}

              {server2Hours !== 0 && server2Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server2Name}</div>
                <div className='server-details'>{server2Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server2Hours).toFixed(2)}$</div>
              </div>}

              {server3Hours !== 0 && server3Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server3Name}</div>
                <div className='server-details'>{server3Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server3Hours).toFixed(2)}$</div>
              </div>}

              {server4Hours !== 0 && server4Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server4Name}</div>
                <div className='server-details'>{server4Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server4Hours).toFixed(2)}$</div>
              </div>}


              {server5Hours !== 0 && server5Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server5Name}</div>
                <div className='server-details'>{server5Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * server5Hours).toFixed(2)}$</div>
              </div>}

              {assistant1Hours !== 0 && assistant1Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant1Name}</div>
                <div className='server-details'>{assistant1Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {assistant2Hours !== 0 && assistant2Hours !== "0" && assistant2Hours !== 0 && <div className='print-server'>
                <div className='server-details'>{assistant2Name}</div>
                <div className='server-details'>{assistant2Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {assistant3Hours !== 0 && assistant3Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant3Name}</div>
                <div className='server-details'>{assistant3Hours} hours </div>
                <div className='server-details'>{(frontTipsPM / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {parseInt(totalInstructor1) !== 0 && <div className='print-server'>
                <div className='server-details'>Instructor 1: </div>

                <div className='server-details'>{totalInstructor1}$</div>
              </div>}

              {parseInt(totalInstructor2) !== 0 && <div className='print-server'>
                <div className='server-details'>Instructor 2: </div>

                <div className='server-details'>{totalInstructor2}$</div>
              </div>}

              {parseInt(totalInstructor3) !== 0 && <div className='print-server'>
                <div className='server-details'>Instructor 3: </div>

                <div className='server-details'>{totalInstructor3}$</div>
              </div>}

            </div>

          </div>




        </div>
      }
    </>
  )

}