//Hooks

import { useRef, useContext } from 'react'
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
import SummaryAm from './SubComponents/SummaryAm';
import ErrorMessageInputField from './SubComponents/ErrorMessageInputField';
import PayTerminalMatch from './SubComponents/PaymentTerminalMatch';



export default function ClosingAM() {


  const {
    // Data
    data, setData,

    // Color
    color, setColor,

    // Tips
    cashTips, creditCardsTipsAM, setCreditCardsTipsAM,

    //Surcharge
    creditCardsSurchargeAM, setCreditCardsSurchargeAM, creditCardsSurchargePrintOut, setCreditCardsSurchargePM,

    // Toggle and Visibility
    toggle, showData, setShowData,

    // Cash
    cashSales, setCashSales,

    // Information
    cashTipsInfo, cashSalesInfo, creditCardTipsInfo,

    // Summary
    summary,

    // Red Line and Display Toggle
    showCashSalesInfo, showCashTipsInfo,
    showCreditCardTipsInfo,


    // Rounding
    roundToTwo,

  } = useContext(AppContext);


  const componentRef = useRef();

  return (


    <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>
      <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>

        <Colors color={color} setColor={setColor} />

        <Navbar showData={showData} setShowData={setShowData} />

        <div className='seccion'>

          {showData && <DataComponent isAM={true} />}
          <div className='title'>Shift</div>
          <Link to='/pm'><AmButton /></Link>

          <ClearAll />

          <SupportCashCounting />

          <PayTerminalMatch />

          {/* <SetExample /> */}

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
              <label className='inline-label'>CC tips and CC Surcharge<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardTipsInfo}>i</div></label>

              <input type="number" className='money-input' value={creditCardsTipsAM} onChange={(e) => setCreditCardsTipsAM(e.target.value)} onClick={() => setCreditCardsTipsAM("")}
                onFocus={() => setCreditCardsTipsAM("")}></input>


            </div>

            {creditCardTipsInfo && <div className='info-message'>Tips paid on Touch Bistro's print out</div>}


            <div className='inline'>
              <label className='inline-label'>Credit Card Surcharge</label>

              <input type="number" className='money-input' value={creditCardsSurchargeAM} onChange={(e) => setCreditCardsSurchargeAM(e.target.value)} onClick={() => setCreditCardsSurchargeAM("")}
                onFocus={() => setCreditCardsSurchargeAM("")}></input>


            </div>

                        <div className='inline'>
              <label className='inline-label'>Actual Credit Card Tips</label>
              <div className='money-input'>{

                creditCardsTipsAM

                && roundToTwo((roundToTwo(
                  creditCardsTipsAM
                ) - roundToTwo(
                  creditCardsSurchargeAM
                )))


              }</div>

              {!creditCardsTipsAM && creditCardsTipsAM !== 0

                &&
                <ErrorMessageInputField />
              }
            </div>


            <div className='inline'>
              <label className='inline-label'>Total tips</label>
              <div className='money-input'>{

                creditCardsTipsAM

                && roundToTwo((roundToTwo(cashTips) + roundToTwo(creditCardsTipsAM) -  roundToTwo(creditCardsSurchargeAM)))


              }</div>

              {!creditCardsTipsAM && creditCardsTipsAM !== 0

                &&
                <ErrorMessageInputField />
              }
            </div>

          </section>

          <PizzaMakingQuestion />

          <PizzaParties isAM={true} />

          <TipsDistribution isAM={true} />

          <Totals isAM={true} />

          <SummaryAm />

        </div>

      </div>

    </div>

  )
}