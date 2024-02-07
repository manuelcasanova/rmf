//Hooks

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from '../contexts/AppContext';

//Components

import PmButton from "./SubComponents/PmButton";
import DataComponent from './DataComponents/DataComponent';
import Colors from "./SubComponents/Colors";
import Navbar from "./SubComponents/Navbar";
import SupportCashCounting from './SubComponents/SupportCashCounting';
import SetExample from './SubComponents/SetExample';
import ClearAll from "./SubComponents/ClearAll";
import TotalCash from "./SubComponents/TotalCash";
import PizzaMakingQuestion from "./SubComponents/PizzaMakingQuestion";
import PizzaParties from "./SubComponents/PizzaParties";
import TipsDistribution from "./SubComponents/TipsDistribution";
import Totals from "./SubComponents/Totals";
import Summary from "./SubComponents/Summary";
import ErrorMessageInputField from "./SubComponents/ErrorMessageInputField";

export default function ClosingPM() {

  const {
    // Data
    data, setData,

    // Color
    color, setColor,

    // Tips
    fullTips, assistantTips,
    pizzaTips,
    creditCardsTipsAM, setCreditCardsTipsAM,
    creditCardsTipsPrintOut, setCreditCardsTipsPrintOut,
    cashTipsPM, tipsAfterPizzaPartyPM,
    totalTipsPM, kitchenTipsPM,
    frontTipsPM, sundaysPizzaTip,
    tipsPerHourPM,

    // Prices
    kidsPizzaPrice, adultsPizzaPrice,
    adultsCocktailPrice, fieldTripPrice,

    // Percentages
    pizzaTipsPercent,

    // Toggle and Visibility
    toggle, showData, setShowData,

    // Currency Denominations
    hundred, setHundred, fifty, setFifty,
    twenty, setTwenty, ten, setTen,
    five, setFive, two, setTwo,
    one, setOne, quarter, setQuarter,

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




  const [cashSalesAMInfo, setCashSalesAMInfo] = useState(false)
  const [cashSalesPrintOutInfo, setCashSalesPrintOutInfo] = useState(false)

  const [creditCardsTipsAMInfo, setCreditCardsTipsAMInfo] = useState(false)
  const [creditCardsTipsPMInfo, setCreditCardsTipsPMInfo] = useState(false)
  const [creditCardsPrintOutInfo, setCreditCardsTipsPrintOutInfo] = useState(false)

  const [cashSalesPMInfo, setCashSalesPMInfo] = useState(false)

  const [sundaysInfo, setSundaysInfo] = useState(false)


  const [colors, setColors] = useState(false)



  const showCashSalesAMInfo = (e) => {
    e.preventDefault();
    setCashSalesAMInfo(prev => !prev)
  }

  const showCashSalesPrintOutInfo = (e) => {
    e.preventDefault();
    setCashSalesPrintOutInfo(prev => !prev)
  }

  const showCashSalesPMInfo = (e) => {
    e.preventDefault();
    setCashSalesPMInfo(prev => !prev)
  }


  const showCreditCardsTipsAMInfo = (e) => {
    e.preventDefault();
    setCreditCardsTipsAMInfo(prev => !prev)
  }

  const showCreditCardsTipsPrintOutInfo = (e) => {
    e.preventDefault();
    setCreditCardsTipsPrintOutInfo(prev => !prev)
  }

  const showCreditCardsTipsPMInfo = (e) => {
    e.preventDefault();
    setCreditCardsTipsPMInfo(prev => !prev)
  }



  const showSundaysInfo = (e) => {
    e.preventDefault();
    setSundaysInfo(prev => !prev)
  }





  const componentRef = useRef();




  return (
    <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>
      <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>

        <Colors color={color} setColor={setColor} />

        <Navbar showData={showData} setShowData={setShowData} />

        <div className='seccion'>

          {showData && <DataComponent data={data} setData={setData} />}
          <div className='title'>Shift</div>
          <Link to='/am'>< PmButton /></Link>

          <ClearAll />

          <SupportCashCounting />

          <SetExample />

          <section className='money'>

            <TotalCash />

            <div className='inline'>
              <label className='inline-label'>Cash sales AM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesAMInfo}>i</div></label>

              <input type="number" className='money-input' value={cashSalesAM} onChange={(e) => setCashSalesAM(e.target.value)}
                onClick={() => setCashSalesAM("")}
                onFocus={() => setCashSalesAM("")}
              ></input>
            </div>

            {cashSalesAMInfo && <div className='info-message'>Cash sales from the AM shift</div>}

            <div className='inline'>
              <label className='inline-label'>Cash sales Print Out<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPrintOutInfo}>i</div></label>

              <input type="number" className='money-input' value={cashSalesPrintOut} onChange={(e) => setCashSalesPrintOut(e.target.value)} onClick={() => setCashSalesPrintOut("")}
                onFocus={() => setCashSalesPrintOut("")}></input>
            </div>

            {cashSalesPrintOutInfo && <div className='info-message'>Total cash sales of the day (on Print Out)</div>}



            <div className='inline'>
              <label className='inline-label'>Cash sales PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPMInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashSalesPM) && cashSalesPM}</div>
              {isNaN(cashSalesPM)
                &&
                <ErrorMessageInputField />
              }
            </div>

            {cashSalesPMInfo && <div className='info-message'>Cash sales PM = Cash sales on print out - AM shift cash sales</div>}


            <div className='inline'>
              <label className='inline-label'>Cash tips PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashTipsInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashTipsPM) && cashTipsPM}</div>
              {isNaN(cashTipsPM)
                &&
                <ErrorMessageInputField />
              }
            </div>


            {cashTipsInfo && <div className='info-message'>Cash tips = Total cash - Float - Cash sales</div>}

            <div className='inline'>
              <label className='inline-label'>Credit card tips AM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsAMInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardsTipsAM} onChange={(e) => setCreditCardsTipsAM(e.target.value)} onClick={() => setCreditCardsTipsAM("")}
                onFocus={() => setCreditCardsTipsAM("")}></input>
            </div>

            {creditCardsTipsAMInfo && <div className='info-message'>Credit Card tips from the AM shift</div>}


            <div className='inline'>
              <label className='inline-label'>Credit card tips Print Out<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsPrintOutInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardsTipsPrintOut} onChange={(e) => setCreditCardsTipsPrintOut(e.target.value)} onClick={() => setCreditCardsTipsPrintOut("")}
                onFocus={() => setCreditCardsTipsPrintOut("")}></input>
            </div>

            {creditCardsPrintOutInfo && <div className='info-message'>Credit Card tips from the Print Out</div>}

            <div className='inline'>
              <label className='inline-label'>Credit card tips PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsPMInfo}>i</div></label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && roundToTwo((roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)))}</div>
              {!creditCardsTipsAM && creditCardsTipsAM !== 0
                &&
                <ErrorMessageInputField />
              }
            </div>

            {creditCardsTipsPMInfo && <div className='info-message'>CC tips PM shift = CC tips on Print Out - CC tips AM shift</div>}



            <div className='inline'>
              <label className='inline-label'>Total Tips PM</label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && totalTipsPM}</div>
              {!creditCardsTipsPrintOut && creditCardsTipsPrintOut !== 0
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