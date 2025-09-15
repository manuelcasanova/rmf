//Hooks

import { useState, useContext } from "react";
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
import SummaryPm from "./SubComponents/SummaryPm";
import ErrorMessageInputField from "./SubComponents/ErrorMessageInputField";
import PayTerminalMatch from "./SubComponents/PaymentTerminalMatch";

export default function ClosingPM() {

  const {
    // Data
    data, setData,

    // Color
    color, setColor,

    // Tips
    creditCardsTipsAM, setCreditCardsTipsAM,
    creditCardsTipsPrintOut, setCreditCardsTipsPrintOut,
    cashTipsPM,
    totalTipsAndSurchargePM,
  
    //Surcharge
    creditCardsSurchargeAM,
    setCreditCardsSurchargeAM,
    creditCardsSurchargePM,
    setCreditCardsSurchargePM,

    // Toggle and Visibility
    toggle, showData, setShowData,

    // Cash
    cashSalesAM, setCashSalesAM,
    cashSalesPM, cashSalesPrintOut, setCashSalesPrintOut, cashCount,


    // Information
    cashTipsInfo,


    // Display Toggle
    showCashTipsInfo,


    // Rounding
    roundToTwo,

  } = useContext(AppContext);


  const [cashSalesAMInfo, setCashSalesAMInfo] = useState(false)
  const [cashSalesPrintOutInfo, setCashSalesPrintOutInfo] = useState(false)
  const [creditCardsTipsAMInfo, setCreditCardsTipsAMInfo] = useState(false)
  const [creditCardsTipsPMInfo, setCreditCardsTipsPMInfo] = useState(false)
  const [creditCardsPrintOutInfo, setCreditCardsTipsPrintOutInfo] = useState(false)
  const [cashSalesPMInfo, setCashSalesPMInfo] = useState(false)

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


  return (
    <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>
      <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>

        <Colors color={color} setColor={setColor} />

        <Navbar showData={showData} setShowData={setShowData} />

        <div className='seccion'>

          {showData && <DataComponent isAM={false}/>}
          <div className='title'>Shift</div>
          <Link to='/am'>< PmButton /></Link>

          <ClearAll />

          <SupportCashCounting />

          {/* <PayTerminalMatch /> */}

          {/* <SetExample /> */}

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
              <label className='inline-label highlight'>CASH SALES PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPMInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashSalesPM) && cashSalesPM}</div>
              {isNaN(cashSalesPM)
                &&
                <ErrorMessageInputField />
              }
            </div>

            {cashSalesPMInfo && <div className='info-message'>Cash sales PM = Cash sales on print out - AM shift cash sales</div>}


            <div className='inline'>
              <label className='inline-label highlight'>CASH TIPS PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashTipsInfo}>i</div></label>
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
              <label className='inline-label'>Credit card Surcharge AM</label>
              <input type="number" className='money-input' value={creditCardsSurchargeAM} onChange={(e) => setCreditCardsSurchargeAM(e.target.value)} onClick={() => setCreditCardsSurchargeAM("")}
                onFocus={() => setCreditCardsSurchargeAM("")}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Touch Bistro's Tips<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsPrintOutInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardsTipsPrintOut} onChange={(e) => setCreditCardsTipsPrintOut(e.target.value)} onClick={() => setCreditCardsTipsPrintOut("")}
                onFocus={() => setCreditCardsTipsPrintOut("")}></input>
            </div>

            {creditCardsPrintOutInfo && <div className='info-message'>Credit Card Tips paid on Touch Bistro's print out (include CC surcharge)</div>}

                        <div className='inline'>
              <label className='inline-label'>Credit card Surcharge Print Out (All day)</label>
              <input type="number" className='money-input' value={creditCardsSurchargePM} onChange={(e) => setCreditCardsSurchargePM(e.target.value)} onClick={() => setCreditCardsSurchargePM("")}
                onFocus={() => setCreditCardsSurchargePM("")}></input>
            </div>

                        <div className='inline'>
              <label className='inline-label highlight'>CREDIT CARDS SURCHARGE PM (ALL DAY MINUS AM)</label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && 
              roundToTwo(creditCardsSurchargePM) -
              roundToTwo(creditCardsSurchargeAM)
              } 
              
              </div>
              {!creditCardsTipsAM && creditCardsTipsAM !== 0
                &&
                <ErrorMessageInputField />
              }
            </div>

            <div className='inline'>
              <label className='inline-label highlight'>ACTUAL CREDIT CARD TIPS PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsPMInfo}>i</div></label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && 
              roundToTwo(
              roundToTwo(creditCardsTipsPrintOut) - 
              roundToTwo(creditCardsTipsAM) -
              roundToTwo(creditCardsSurchargePM) +
              roundToTwo(creditCardsSurchargeAM)
              )
              } 
              
              </div>
              {!creditCardsTipsAM && creditCardsTipsAM !== 0
                &&
                <ErrorMessageInputField />
              }
            </div>

            {creditCardsTipsPMInfo && <div className='info-message'>CC tips PM shift = CC tips on Print Out - CC tips AM shift</div>}



            <div className='inline'>
              <label className='inline-label highlight'>TOTAL TIPS PM</label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && 
              roundToTwo(
              roundToTwo(totalTipsAndSurchargePM)
              - roundToTwo(creditCardsSurchargePM)
              + roundToTwo(creditCardsSurchargeAM)
              )
              }</div>
              {!creditCardsTipsPrintOut && creditCardsTipsPrintOut !== 0
                &&
                <ErrorMessageInputField />
              }
            </div>

          </section>

          <PizzaMakingQuestion />

          <PizzaParties isAM={false} />

          <TipsDistribution isAM={false} />

          <Totals isAM={false} />

          <SummaryPm />

        </div>

      </div>




    </div>
  )
}