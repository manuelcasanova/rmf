//Hooks

import { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';


//Components

import AmButton from './SubComponents/AmButton';
import DataComponent from './DataComponents/DataComponent';
import Colors from './SubComponents/Colors';
import Navbar from './SubComponents/Navbar';
import SupportCashCounting from './SubComponents/SupportCashCounting';
import SetExample from './SubComponents/SetExample';
import ClearAll from './SubComponents/ClearAll';
import TotalCash from './SubComponents/TotalCash';
import PizzaMakingQuestion from './SubComponents/PizzaMakingQuestion';
import PizzaParties from './SubComponents/PizzaParties';
import TipsDistribution from './SubComponents/TipsDistribution';
import Totals from './SubComponents/Totals';
import Summary from './SubComponents/Summary';
import ErrorMessageInputField from './SubComponents/ErrorMessageInputField';



export default function ClosingAM() {


  const {
    // Data
    data, setData,

    // Color
    color, setColor,

    // Tips
    fullTips, assistantTips,
    pizzaTips, tipsAfterPizzaParty,
    kitchenTips, frontTips,
    totalTipsAM, cashTips,
    creditCardTips, setCreditCardTips,

    // Toggle and Visibility
    toggle, showData, setShowData,


    // Cash
    cash, cashCounted,
    receipts, totalCash,
    float, cashSales, setCashSales,

    // Information
    totalHoursInfo,
    cashTipsInfo, cashSalesInfo, creditCardTipsInfo,
    newFloatInfo, supportServerInfo,


    // Summary
    summary,

    // Red Line and Display Toggle
    redLine, showTotalCashInfo, showTotalHoursInfo,
    showCashSalesInfo, showCashTipsInfo,
    showCreditCardTipsInfo, showNewFloatInfo,
    showPizzaParties,
    showSummary, showInstructors, showRedLine,

    // Server Hours and Names
    server1Hours, setServer1Hours, server2Hours, setServer2Hours,
    server3Hours, setServer3Hours, server4Hours, setServer4Hours,
    server5Hours, setServer5Hours, server1Name, setServer1Name,
    server2Name, setServer2Name, server3Name, setServer3Name,
    server4Name, setServer4Name, server5Name, setServer5Name,

    // Assistant Hours and Names
    assistant1Hours, setAssistant1Hours,
    assistant2Hours, setAssistant2Hours,
    assistant3Hours, setAssistant3Hours,
    assistant1Name, setAssistant1Name,
    assistant2Name, setAssistant2Name,
    assistant3Name, setAssistant3Name,


    // Total Hours, Tips Per Hour, and Rounding
    totalHours, tipsPerHour, roundToTwo,


    // Total Instructors
    totalInstructor1, totalInstructor2,
    totalInstructor3, totalInstructors,

    // Clear Functions and Test
    clearAll, clearServers, test
  } = useContext(AppContext);

  // console.log("data am", data)

  const componentRef = useRef();

  return (


    <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>
      <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>


        <Colors color={color} setColor={setColor} />

        <Navbar showData={showData} setShowData={setShowData} />

        <div className='seccion'>

          {showData && <DataComponent data={data} setData={setData} />}
          <div className='title'>Shift</div>
          <Link to='/pm'><AmButton /></Link>

          <ClearAll />

          <SupportCashCounting />

          <SetExample />

          <section className='money'>

            <TotalCash />

            <div className='inline'>
              <label className='inline-label'>Cash sales<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesInfo}>i</div></label>

              <input type="number" className='money-input' value={cashSales} onChange={(e) => setCashSales(e.target.value)}
                onClick={() => setCashSales("")}
                onFocus={() => setCashSales("")}
              ></input>
            </div>

            {cashSalesInfo && <div className='info-message'>Cash on print out</div>}

            <div className='inline'>
              <label className='inline-label'>Cash tips<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashTipsInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashTips) && cashTips}</div>
              {isNaN(cashTips)
                &&
                <ErrorMessageInputField />
              }
            </div>


            {cashTipsInfo && <div className='info-message'>Cash tips = Total cash - Float - Cash sales</div>}

            <div className='inline'>
              <label className='inline-label'>Credit card tips<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardTipsInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardTips} onChange={(e) => setCreditCardTips(e.target.value)} onClick={() => setCreditCardTips("")}
                onFocus={() => setCreditCardTips("")}></input>
            </div>

            {creditCardTipsInfo && <div className='info-message'>Tips paid on print out</div>}

            <div className='inline'>
              <label className='inline-label'>Total tips</label>
              <div className='money-input'>{

                creditCardTips

                && roundToTwo((roundToTwo(cashTips) + roundToTwo(creditCardTips)))


              }</div>
              {!creditCardTips && creditCardTips !== 0

                &&
                <ErrorMessageInputField />
              }
            </div>

          </section>

          <PizzaMakingQuestion />

          <PizzaParties />

          <TipsDistribution />

          <Totals />

          <Summary />

        </div>

      </div>

    </div>

  )
}