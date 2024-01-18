//Hooks

import { useState, useRef } from "react";
import { Link } from "react-router-dom"

//Libraries

import ReactToPrint from 'react-to-print'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components

import Now from './Now';
import PmButton from "./PmButton";
import DataComponent from './DataComponents/DataComponent';

//Images

import brush from '../images/brush.png'
import brushWhite from '../images/brush-white.png'
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function ClosingNight({color, setColor, data, setData}) {

// console.log("data night", data)

  const fullTips = data[0].fulltips;
  const assistantTips = data[0].assistanttips;
  const kidsPizzaPrice = data[0].kidspizzaprice;
  const adultsPizzaPrice = data[0].adultspizzaprice;
  const adultsCocktailPrice = data[0].adultscocktailprice;
  const fieldTripPrice = data[0].fieldtripprice;
  const pizzaTipsPercent = data[0].pizzatipspercent;
  const kitchenTipsPercent = data[0].kitchentipspercent;
  const frontTipsPercent = data[0].fronttipspercent;
  const sundaysPizzaTip = data[0].sundayspizzatip;



  const [toggle, setToggle] = useState(false);

  const [showData, setShowData] = useState(false)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

const handleData = () => {
  setShowData(!showData)
}

  const now = Now()

  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [two, setTwo] = useState(0);
  const [one, setOne] = useState(0);
  const [quarter, setQuarter] = useState(0);

  let cash =
    (
      parseFloat(hundred * 100) +
      parseFloat(fifty * 50) +
      parseFloat(twenty * 20) +
      parseFloat(ten * 10) +
      parseFloat(five * 5) +
      parseFloat(two * 2) +
      parseFloat(one * 1) +
      parseFloat(quarter * 0.25)
    ).toFixed(2);

  const [cashCounted, setCashCounted] = useState(0);
  const [receipts, setReceipts] = useState(0);
  const totalCash = cash > 0 ? parseFloat(cash) + parseFloat(receipts) : parseFloat(cashCounted) + parseFloat(receipts);



  const [float, setFloat] = useState(0);
  const [cashSalesAM, setCashSalesAM] = useState(0);
  const [cashSalesPrintOut, setCashSalesPrintOut] = useState(0)
  const cashSalesPM = (cashSalesPrintOut - cashSalesAM).toFixed(2)
  const cashTips = (
    cash > 0
      ? (parseFloat(cash) + parseFloat(receipts) - parseFloat(cashSalesPM) - parseFloat(float)).toFixed(2)
      : (parseFloat(cashCounted) + parseFloat(receipts) - parseFloat(cashSalesPM) - parseFloat(float)).toFixed(2)
  );
  
  const [creditCardsTipsAM, setCreditCardsTipsAM] = useState(0)
  const [creditCardsTipsPrintOut, setCreditCardsTipsPrintOut] = useState(0)
  const totalTips = parseFloat(cashTips) + parseFloat(creditCardsTipsPrintOut) - parseFloat(creditCardsTipsAM)
  const [pizzaAdults, setPizzaAdults] = useState(0)
  const [cocktailAdults, setCocktailAdults] = useState(0)
  const [pizzaChildren, setPizzaChildren] = useState(0)
  const [fieldTrip, setFieldTrip] = useState(0)
  const [sundaysServerHours, setSundaysServerHours] = useState(0)
  const [pizzaServers, setPizzaServers] = useState(0)
  const pizzaTips = 
  (parseFloat(pizzaChildren) * kidsPizzaPrice * pizzaTipsPercent / 100) 
  + 
  parseFloat(pizzaAdults) * adultsPizzaPrice * pizzaTipsPercent / 100 
  + 
  (parseFloat(cocktailAdults) * adultsCocktailPrice * pizzaTipsPercent / 100) 
  + 
  (parseFloat(sundaysServerHours) * sundaysPizzaTip)
  +
  (parseFloat(fieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)
  
  const tipsAfterPizzaParty = (totalTips - pizzaTips).toFixed(2)
  const kitchenTips = (tipsAfterPizzaParty * kitchenTipsPercent / 100).toFixed(2);
  const frontTips = (tipsAfterPizzaParty * frontTipsPercent / 100).toFixed(2);
  // const perServer = pizzaServers >= 1 && (pizzaTips / pizzaServers).toFixed(2);



  const [totalCashInfo, setTotalCashInfo] = useState(false)
  const [totalHoursInfo, setTotalHoursInfo] = useState(false)
  const [cashSalesAMInfo, setCashSalesAMInfo] = useState(false)
  const [cashSalesPrintOutInfo, setCashSalesPrintOutInfo] = useState(false)
  const [cashTipsInfo, setCashTipsInfo] = useState(false)
  const [creditCardsTipsAMInfo, setCreditCardsTipsAMInfo] = useState(false)
  const [creditCardsTipsPMInfo, setCreditCardsTipsPMInfo] = useState(false)
  const [creditCardsPrintOutInfo, setCreditCardsTipsPrintOutInfo] = useState(false)
  const [newFloatInfo, setNewFloatInfo] = useState(false)
  const [pizzaParties, setPizzaParties] = useState(false)
  const [cashSalesPMInfo, setCashSalesPMInfo] = useState(false)
  const [supportServerInfo, setSupportServerInfo] = useState(true)
const [sundaysInfo, setSundaysInfo] = useState(false)
const [cashCount, setCashCount] = useState(false) 

  const [colors, setColors] = useState(false)
  const [summary, setSummary] = useState(false)
  const [instructors, setInstructors] = useState(false)
  const [redLine, setRedLine] = useState(false)

  const showTotalCashInfo = (e) => {
    e.preventDefault();
    setTotalCashInfo(prev => !prev)
  }

  const showTotalHoursInfo = (e) => {
    e.preventDefault();
    setTotalHoursInfo(prev => !prev)
  }

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

  const showCashTipsInfo = (e) => {
    e.preventDefault();
    setCashTipsInfo(prev => !prev)
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

  const showNewFloatInfo = (e) => {
    e.preventDefault();
    setNewFloatInfo(prev => !prev)
  }

  const showPizzaParties = (e) => {
    e.preventDefault();
    setPizzaParties(prev => !prev)
  }

  const showCashCount = (e) => {
    e.preventDefault();
    setCashCount(prev => !prev)
    setHundred(0)
    setFifty(0)
    setTwenty(0)
    setTen(0)
    setFive(0)
    setTwo(0)
    setOne(0)
    setQuarter(0)
    setCashCounted(0)
  }

  // const showSupportServerInfo = (e) => {
  //   e.preventDefault();
  //   setSupportServerInfo(prev => !prev)
  // }

  const showSundaysInfo = (e) => {
    e.preventDefault();
    setSundaysInfo(prev => !prev)
  }

  const showColors = () => {
    // e.preventDefault();
    setColors(prev => !prev)
  }

  const showSummary = () => {
    // e.preventDefault();
    setSummary(prev => !prev)
  }

  const showInstructors = () => {
    // e.preventDefault();
    setInstructors(prev => !prev)
    clearInstructors()
  }

  const showRedLine = () => {
    // e.preventDefault();
    setRedLine(prev => !prev)
  }


  const [server1Hours, setServer1Hours] = useState(0);
  const [server2Hours, setServer2Hours] = useState(0);
  const [server3Hours, setServer3Hours] = useState(0);
  const [server4Hours, setServer4Hours] = useState(0);
  const [server5Hours, setServer5Hours] = useState(0);

  const [server1Name, setServer1Name] = useState("");
  const [server2Name, setServer2Name] = useState("");
  const [server3Name, setServer3Name] = useState("");
  const [server4Name, setServer4Name] = useState("");
  const [server5Name, setServer5Name] = useState("");

  const [assistant1Hours, setAssistant1Hours] = useState(0);
  const [assistant2Hours, setAssistant2Hours] = useState(0);
  const [assistant3Hours, setAssistant3Hours] = useState(0);

  const [assistant1Name, setAssistant1Name] = useState("");
  const [assistant2Name, setAssistant2Name] = useState("");
  const [assistant3Name, setAssistant3Name] = useState("");

  // const [pizzaMaking1Hours, setPizzaMaking1Hours] = useState(0);
  // const [pizzaMaking2Hours, setPizzaMaking2Hours] = useState(0);
  // const [pizzaMaking3Hours, setPizzaMaking3Hours] = useState(0);

  // const [pizzaMaking1Name, setPizzaMaking1Name] = useState("");
  // const [pizzaMaking2Name, setPizzaMaking2Name] = useState("");
  // const [pizzaMaking3Name, setPizzaMaking3Name] = useState("");


  const [instructor1Adults, setInstructor1Adults] = useState(0);
  const [instructor2Adults, setInstructor2Adults] = useState(0);
  const [instructor3Adults, setInstructor3Adults] = useState(0);

  const [instructor1Cocktail, setInstructor1Cocktail] = useState(0);
  const [instructor2Cocktail, setInstructor2Cocktail] = useState(0);
  const [instructor3Cocktail, setInstructor3Cocktail] = useState(0);

  const [instructor1Children, setInstructor1Children] = useState(0);
  const [instructor2Children, setInstructor2Children] = useState(0);
  const [instructor3Children, setInstructor3Children] = useState(0);

  const [instructor1FieldTrip, setInstructor1FieldTrip] = useState(0);
  const [instructor2FieldTrip, setInstructor2FieldTrip] = useState(0);
  const [instructor3FieldTrip, setInstructor3FieldTrip] = useState(0);

  const totalInstructor1 = parseFloat(
    (parseFloat(instructor1Adults) * adultsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor1Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor1Children) * kidsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor1FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

  ).toFixed(2)

const totalInstructor3 = parseFloat(
  (parseFloat(instructor3Adults) * adultsPizzaPrice * pizzaTipsPercent / 100)
  +
  (parseFloat(instructor3Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100)
  +
  (parseFloat(instructor3Children) * kidsPizzaPrice * pizzaTipsPercent / 100)
  +
  (parseFloat(instructor3FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

).toFixed(2)

const totalInstructor2 = parseFloat(
  (parseFloat(instructor2Adults) * adultsPizzaPrice * pizzaTipsPercent / 100)
  +
  (parseFloat(instructor2Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100)
  +
  (parseFloat(instructor2Children) * kidsPizzaPrice * pizzaTipsPercent / 100)
  +
  (parseFloat(instructor2FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

).toFixed(2)

const totalInstructors = parseFloat(totalInstructor1) + parseFloat(totalInstructor2) + parseFloat(totalInstructor3)

  const totalHours = parseFloat(server1Hours) + parseFloat(server2Hours) + parseFloat(server3Hours) + parseFloat(server4Hours) + parseFloat(server5Hours) + parseFloat(assistant1Hours) * assistantTips / 100 + parseFloat(assistant2Hours) * assistantTips / 100 + parseFloat(assistant3Hours) * assistantTips / 100;

  const tipsPerHour = () => {
    if (isNaN(frontTips / totalHours)) {
      return 0
    } else {
      return frontTips / totalHours
    }
  }

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  }


  const clearAll = () => {
    setCashCounted(0);
    setReceipts(0);
    setFloat(0);
    setCashSalesAM(0);
    setCashSalesPrintOut(0);
    setCreditCardsTipsAM(0)
    setCreditCardsTipsPrintOut(0)
    setPizzaAdults(0);
    setPizzaChildren(0);
    setPizzaServers(0)
    setServer1Name("");
    setServer2Name("");
    setServer3Name("");
    setServer4Name("");
    setServer5Name("");
    setAssistant1Name("");
    setAssistant2Name("");
    setAssistant3Name("");
    setServer1Hours(0);
    setServer2Hours(0);
    setServer3Hours(0);
    setServer4Hours(0);
    setServer5Hours(0);
    setAssistant1Hours(0);
    setAssistant2Hours(0);
    setAssistant3Hours(0);
    // setPizzaMaking1Hours(0);
    // setPizzaMaking2Hours(0);
    // setPizzaMaking3Hours(0);
    // setPizzaMaking1Name("");
    // setPizzaMaking2Name("");
    // setPizzaMaking3Name("");
    setHundred(0);
    setFifty(0);
    setTwenty(0);
    setTen(0);
    setFive(0);
    setTwo(0);
    setOne(0);
    setQuarter(0);
    setPizzaAdults(0);
    setCocktailAdults(0);
    setPizzaChildren(0);
    setFieldTrip(0);
    setPizzaServers(0);
    setInstructor1Adults(0);
    setInstructor2Adults(0);
    setInstructor3Adults(0);
    setInstructor1Cocktail(0);
    setInstructor2Cocktail(0);
    setInstructor3Cocktail(0);
    setInstructor1Children(0);
    setInstructor2Children(0);
    setInstructor3Children(0);
    setInstructor1FieldTrip(0);
    setInstructor2FieldTrip(0);
    setInstructor3FieldTrip(0);
    showInstructors();
    setPizzaParties(prev => !prev)
  }

  const clearServers = () => {
    setServer1Name("");
    setServer2Name("");
    setServer3Name("");
    setServer4Name("");
    setServer5Name("");
    setAssistant1Name("");
    setAssistant2Name("");
    setAssistant3Name("");
    setServer1Hours(0);
    setServer2Hours(0);
    setServer3Hours(0);
    setServer4Hours(0);
    setServer5Hours(0);
    setAssistant1Hours(0);
    setAssistant2Hours(0);
    setAssistant3Hours(0);
    // setPizzaMaking1Hours(0);
    // setPizzaMaking2Hours(0);
    // setPizzaMaking3Hours(0);
    // setPizzaMaking1Name("");
    // setPizzaMaking2Name("");
    // setPizzaMaking3Name("");
  }

  const clearInstructors = () => {
    setInstructor1Adults(0);
    setInstructor2Adults(0);
    setInstructor3Adults(0);
    setInstructor1Cocktail(0);
    setInstructor2Cocktail(0);
    setInstructor3Cocktail(0);
    setInstructor1Children(0);
    setInstructor2Children(0);
    setInstructor3Children(0);
    setInstructor1FieldTrip(0);
    setInstructor2FieldTrip(0);
    setInstructor3FieldTrip(0);
  }



  const test = () => {
    setCashCounted(990);
    setReceipts(10);
    setFloat(550.5);
    setCashSalesAM(500);
    setCashSalesPrintOut(900);
    setCreditCardsTipsAM(500)
    setCreditCardsTipsPrintOut(1000);
    setPizzaAdults(10);
    setPizzaChildren(10);
    setPizzaServers(2)
    setServer1Name("Manuel");
    setServer2Name("Dom");
    setServer3Name("Suz");
    setAssistant1Name("Jasmine");
    setServer1Hours(5);
    setServer2Hours(5);
    setServer3Hours(4);
    setAssistant1Hours(4);
    // setPizzaMaking1Hours(0);
    // setPizzaMaking2Hours(0);
    // setPizzaMaking1Name("Liz");
    // setPizzaMaking2Name("Akasha");
  }

  const componentRef = useRef();




  return (
    <div className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>

<div


className={toggle ? `App day-mode ${color}` : `App night-mode ${color}`}>


{color === 'black' &&
<><img className='brush' src={brushWhite} alt="Brush" onClick={showColors} /></>
}

{color !== 'black' &&
<><img className='brush' src={brush} alt="Brush" onClick={showColors} /></>
}


{colors && <div className='colors'>
<div className='color black white-line' onClick={(e) => setColor("black")}></div>
  <div className='color white black-line' onClick={(e) => setColor("white")}></div>
  <div className='color pink black-line' onClick={(e) => setColor("pink")}></div>
  <div className='color blue black-line' onClick={(e) => setColor("blue")}></div>
  <div className='color green black-line' onClick={(e) => setColor("green")}></div>
  <div className='color red black-line' onClick={(e) => setColor("red")}></div>
</div>}

        {/* <label className="switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider round"></span>
        </label> */}

<div className='navbar'>

<div className='switch'>{now}</div>
<div className='switch'><FontAwesomeIcon icon={faGear} 
onClick={handleData}/></div>


</div>







        <div className='seccion'>

        {showData && <DataComponent data={data} setData={setData}/>
} 

          <div className='title'>Shift</div>
          <Link to='/closing'>< PmButton /></Link>

          <div className='clear-all-div'>
            <button className="clear-all" onClick={clearAll}>Clear all</button>
          </div>


          <div
            className='pizza-making-question'
          >


            <div className='yes-no'>
              {!cashCount && <button className='clear-all' onClick={showCashCount}>Support for Cash Counting</button>}
              {/* {!cashCount && <button className='clear-all' onClick={showRedLine}>No</button>} */}
            </div>
            {cashCount && <button className='clear-all-x' onClick={showCashCount}>x</button>}
            {cashCount &&
              <div>

                {/* HERE */}
                <div className='inline'>
                  <label className='inline-label-small'>100 $</label>
                  <input type="number" className='cash-input-small' value={hundred} onChange={(e) => setHundred(e.target.value)}
                    onClick={(e) => setHundred("")}
                    onFocus={(e) => setHundred("")}
                  ></input>
                  <label className='inline-label-small'>{hundred * 100} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>50 $</label>
                  <input type="number" className='cash-input-small' value={fifty} onChange={(e) => setFifty(e.target.value)}
                    onClick={(e) => setFifty("")}
                    onFocus={(e) => setFifty("")}
                  ></input>
                  <label className='inline-label-small'>{fifty * 50} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>20 $</label>
                  <input type="number" className='cash-input-small' value={twenty} onChange={(e) => setTwenty(e.target.value)}
                    onClick={(e) => setTwenty("")}
                    onFocus={(e) => setTwenty("")}
                  ></input>
                  <label className='inline-label-small'>{twenty * 20} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>10 $</label>
                  <input type="number" className='cash-input-small' value={ten} onChange={(e) => setTen(e.target.value)}
                    onClick={(e) => setTen("")}
                    onFocus={(e) => setTen("")}
                  ></input>
                  <label className='inline-label-small'>{ten * 10} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>5 $</label>
                  <input type="number" className='cash-input-small' value={five} onChange={(e) => setFive(e.target.value)}
                    onClick={(e) => setFive("")}
                    onFocus={(e) => setFive("")}
                  ></input>
                  <label className='inline-label-small'>{five * 5} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>2 $</label>
                  <input type="number" className='cash-input-small' value={two} onChange={(e) => setTwo(e.target.value)}
                    onClick={(e) => setTwo("")}
                    onFocus={(e) => setTwo("")}
                  ></input>
                  <label className='inline-label-small'>{two * 2} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>1 $</label>
                  <input type="number" className='cash-input-small' value={one} onChange={(e) => setOne(e.target.value)}
                    onClick={(e) => setOne("")}
                    onFocus={(e) => setOne("")}
                  ></input>
                  <label className='inline-label-small'>{one * 1} $</label>

                </div>

                <div className='inline'>
                  <label className='inline-label-small'>.25 c</label>
                  <input type="number" className='cash-input-small' value={quarter} onChange={(e) => setQuarter(e.target.value)}
                    onClick={(e) => setQuarter("")}
                    onFocus={(e) => setQuarter("")}
                  ></input>
                  <label className='inline-label-small'>{quarter * 0.25} $</label>

                </div>



              </div>}
          </div>

          {<div className='clear-all-div'>
            <button className="clear-all" onClick={test}>Set an example</button>
          </div>}

          <section className='money'>

          {!cashCount && (

<div className='inline'>
  <label className='inline-label'>Cash counted</label>
  <input type="number" className='money-input' value={cashCounted} onChange={(e) => setCashCounted(e.target.value)}
    onClick={(e) => setCashCounted("")}
    onFocus={(e) => setCashCounted("")}
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
              <input type="number" className='money-input' value={receipts} onChange={(e) => setReceipts(e.target.value)} onClick={(e) => setReceipts("")} onFocus={(e) => setReceipts("")}></input>
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
                onClick={(e) => setFloat("")}
                onFocus={(e) => setFloat("")}
              ></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Cash sales AM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesAMInfo}>i</div></label>

              <input type="number" className='money-input' value={cashSalesAM} onChange={(e) => setCashSalesAM(e.target.value)}
                onClick={(e) => setCashSalesAM("")}
                onFocus={(e) => setCashSalesAM("")}
              ></input>
            </div>

            {cashSalesAMInfo && <div className='info-message'>Cash sales from the AM shift</div>}

            <div className='inline'>
              <label className='inline-label'>Cash sales Print Out<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPrintOutInfo}>i</div></label>

              <input type="number" className='money-input' value={cashSalesPrintOut} onChange={(e) => setCashSalesPrintOut(e.target.value)} onClick={(e) => setCashSalesPrintOut("")}
                onFocus={(e) => setCashSalesPrintOut("")}></input>
            </div>

            {cashSalesPrintOutInfo && <div className='info-message'>Total cash sales of the day (on Print Out)</div>}



            <div className='inline'>
              <label className='inline-label'>Cash sales PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPMInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashSalesPM) && cashSalesPM}</div>
              {isNaN(cashSalesPM)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>

            {cashSalesPMInfo && <div className='info-message'>Cash sales PM = Cash sales on print out - AM shift cash sales</div>}


            <div className='inline'>
              <label className='inline-label'>Cash tips PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashTipsInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashTips) && cashTips}</div>
              {isNaN(cashTips)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>


            {cashTipsInfo && <div className='info-message'>Cash tips = Total cash - Float - Cash sales</div>}

            <div className='inline'>
              <label className='inline-label'>Credit card tips AM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsAMInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardsTipsAM} onChange={(e) => setCreditCardsTipsAM(e.target.value)} onClick={(e) => setCreditCardsTipsAM("")}
                onFocus={(e) => setCreditCardsTipsAM("")}></input>
            </div>

            {creditCardsTipsAMInfo && <div className='info-message'>Credit Card tips from the AM shift</div>}


            <div className='inline'>
              <label className='inline-label'>Credit card tips Print Out<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsPrintOutInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardsTipsPrintOut} onChange={(e) => setCreditCardsTipsPrintOut(e.target.value)} onClick={(e) => setCreditCardsTipsPrintOut("")}
                onFocus={(e) => setCreditCardsTipsPrintOut("")}></input>
            </div>

            {creditCardsPrintOutInfo && <div className='info-message'>Credit Card tips from the Print Out</div>}

            <div className='inline'>
              <label className='inline-label'>Credit card tips PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardsTipsPMInfo}>i</div></label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && roundToTwo((roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)))}</div>
              {!creditCardsTipsAM && creditCardsTipsAM !== 0
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>

            {creditCardsTipsPMInfo && <div className='info-message'>CC tips PM shift = CC tips on Print Out - CC tips AM shift</div>}



            <div className='inline'>
              <label className='inline-label'>Total Tips PM</label>
              <div className='money-input'>{creditCardsTipsAM && creditCardsTipsPrintOut && roundToTwo((roundToTwo(cashTips) + roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)))}</div>
              {!creditCardsTipsPrintOut && creditCardsTipsPrintOut !== 0
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>

          </section>

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


          <section className={pizzaParties ? '' : 'pizza'}>

            <div className='inline'>
              <label className='inline-label'>Pizza party adults</label>
              <input type="number" className='pizza-input' value={pizzaAdults} onChange={(e) => setPizzaAdults(e.target.value)} onClick={(e) => setPizzaAdults("")}
                onFocus={(e) => setPizzaAdults("")}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Cocktail making adults</label>
              <input type="number" className='pizza-input' value={cocktailAdults} onChange={(e) => setCocktailAdults(e.target.value)} onClick={(e) => setCocktailAdults("")}
                onFocus={(e) => setCocktailAdults("")}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Pizza party children</label>
              <input type="number" className='pizza-input' value={pizzaChildren} onChange={(e) => setPizzaChildren(e.target.value)} onClick={(e) => setPizzaChildren("")}
                onFocus={(e) => setPizzaChildren("")}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Field Trip</label>
              <input type="number" className='pizza-input' value={fieldTrip} onChange={(e) => setFieldTrip(e.target.value)} onClick={(e) => setFieldTrip(0)}
                onFocus={(e) => setFieldTrip(0)}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Sunday's pizza making server hours <div className={color !== 'blue' ? "info" : "info-red"} onClick={showSundaysInfo}>i</div></label>
              <input type="number" className='pizza-input' value={sundaysServerHours} onChange={(e) => setSundaysServerHours(e.target.value)} onClick={(e) => setSundaysServerHours("")}
                onFocus={(e) => setSundaysServerHours("")}></input>
            </div>


            {sundaysInfo && <div className='info-message'>Sunday's pizza maker gets {sundaysPizzaTip} $ per hour worked</div>}


            {/* <div className='inline'>
              <label className='inline-label'>Pizza party servers</label>
              <input type="number" max="3" className='pizza-input' value={pizzaServers} onChange={(e) => setPizzaServers(e.target.value)} onClick={(e) => setPizzaServers("")}
                onFocus={(e) => setPizzaServers("")}></input>
            </div> */}

            <div className='inline'>
              <label className='inline-label'>Pizza making tips</label>
              <div className='pizza-input'>{!isNaN(pizzaTips) && pizzaTips.toFixed(2)}</div>
              {isNaN(pizzaTips)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>

            {/* <div className='inline'>
  <label className='inline-label'>Per server</label>
  <div className='pizza-input'>{pizzaAdults !== "" && pizzaAdults !== 0 && pizzaAdults !== "0" && pizzaServers !== "0" && pizzaServers !== 0 && pizzaServers !== "" && (pizzaTips / pizzaServers).toFixed(2)}</div>
</div> */}

            <div className='inline'>
              {/* <label className='inline-label'>Per server</label> */}
              {/* <div className='pizza-input'>{!perServer < "1" && perServer !== "Infinity" && !isNaN(perServer) && roundToTwo(perServer)}</div> */}
              {/* 
  {pizzaServers !== "1" && pizzaServers !== "2" && pizzaServers !== "3"
    &&
    <div className='error-message'>Only accepts 1, 2 or 3.</div>
  } */}
            </div>

            {pizzaTips !== 0 && supportServerInfo &&
              <div className='error-message'>Do not forget that the pizza making servers may have as well work as support over the shift. Tip accordingly.</div>
            }

            <div className='inline'>
              <label className='inline-label'>Tips after Pizza party</label>
              <div className='tips-input'>{!isNaN(pizzaTips) && tipsAfterPizzaParty}</div>
              {isNaN(pizzaTips)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>

          </section>


          <section className='tips'>


            <div className='inline'>
              <label className='inline-label'>Kitchen tips</label>
              <div className='tips-input'>{!isNaN(pizzaTips) && kitchenTips}</div>
              {isNaN(pizzaTips)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>


            <div className='inline'>
              <label className='inline-label'>Front tips</label>
              <div className='tips-input'>{!isNaN(pizzaTips) && frontTips}</div>
              {isNaN(pizzaTips)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>


          </section>


          <div className='clear-all-div'>
            <button className="clear-all" onClick={clearServers}>Clear servers</button>
          </div>

          <section className='servers'>

            <div className='th margin-top margin-bottom'>
              <div className='thirty-three server-name-width'>Server</div>
              <div className='thirty-three'>Hours</div>
              <div className='thirty-three'>100%</div>
              <div className='thirty-three'>Tips</div>
            </div>


            <div className='server'>
              <input type="text" required value={server1Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer1Name(e.target.value)}></input>
              <input type="number" value={(server1Hours)} className="thirty-three input-width nameinput" onChange={(e) => setServer1Hours(e.target.value)} onClick={(e) => setServer1Hours("")} onFocus={(e) => setServer1Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server1Hours !== "" && (parseFloat(server1Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server1Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server1Hours).toFixed(2)}</div>
            </div>


            <div className='server'>
              <input value={server2Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer2Name(e.target.value)}></input>
              <input type="number" value={server2Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer2Hours(e.target.value)} onClick={(e) => setServer2Hours("")} onFocus={(e) => setServer2Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server2Hours !== "" && (parseFloat(server2Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server2Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server2Hours).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={server3Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer3Name(e.target.value)}></input>
              <input type="number" value={server3Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer3Hours(e.target.value)} onClick={(e) => setServer3Hours("")} onFocus={(e) => setServer3Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server3Hours !== "" && (parseFloat(server3Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server3Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server3Hours).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={server4Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer4Name(e.target.value)}></input>
              <input type="number" value={server4Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer4Hours(e.target.value)} onClick={(e) => setServer4Hours("")} onFocus={(e) => setServer4Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server4Hours !== "" && (parseFloat(server4Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server4Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server4Hours).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={server5Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setServer5Name(e.target.value)}></input>
              <input type="number" value={server5Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer5Hours(e.target.value)} onClick={(e) => setServer5Hours("")} onFocus={(e) => setServer5Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server5Hours !== "" && (parseFloat(server5Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server5Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server5Hours).toFixed(2)}</div>
            </div>


            <div className='th margin-top margin-bottom'>
              <div className='thirty-three server-name-width'>Support</div>
              <div className='thirty-three'>Hours</div>
              <div className='thirty-three'>40%</div>
              <div className='thirty-three'>Tips</div>
            </div>

            <div className='server'>
              <input value={assistant1Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setAssistant1Name(e.target.value)}></input>
              <input type="number" value={assistant1Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant1Hours(e.target.value)} onClick={(e) => setAssistant1Hours("")} onFocus={(e) => setAssistant1Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && assistant1Hours !== "" && (parseFloat(assistant1Hours) * assistantTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && assistant1Hours !== "" && server1Hours > 0 && (frontTips / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={assistant2Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setAssistant2Name(e.target.value)}></input>
              <input type="number" value={assistant2Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant2Hours(e.target.value)} onClick={(e) => setAssistant2Hours("")} onFocus={(e) => setAssistant2Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && assistant2Hours !== "" && (parseFloat(assistant2Hours) * assistantTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && assistant2Hours !== "" && server1Hours > 0 && (frontTips / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={assistant3Name} placeholder="Name" className="thirty-three server-name-width nameinput" onChange={(e) => setAssistant3Name(e.target.value)}></input>
              <input type="number" value={assistant3Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant3Hours(e.target.value)} onClick={(e) => setAssistant3Hours("")} onFocus={(e) => setAssistant3Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && assistant3Hours !== "" && (parseFloat(assistant3Hours) * assistantTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && assistant3Hours !== "" && server1Hours > 0 && (frontTips / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}</div>
            </div>

          </section>

          <section className='servers'>
            <div className='th margin-top margin-bottom'>
              <div className='thirty-three'>Pizza instructors</div>
              <div className="thirty-three"></div>
              <div className="thirty-three"></div>
              <div className="thirty-three">{!isNaN(pizzaTips) && pizzaTips.toFixed(2)}</div>

          



            </div>
          </section>

          {/* <section className={pizzaParties ? '' : 'pizza'}>


            <div className='pmserv'>


              <div className='th margin-top margin-bottom'>
                <div className='thirty-three'>Pizza making</div>
                <div className='thirty-three'>Tips</div>
              </div>

              <div className='server'>
                <input value={pizzaMaking1Name} onChange={(e) => setPizzaMaking1Name(e.target.value)} placeholder="Name" className="thirty-three input-width nameinput"></input>
                <div className="thirty-three">{pizzaTips !== "0" && (pizzaServers === 1 || pizzaServers === 2 || pizzaServers === 3 || pizzaServers === "1" || pizzaServers === "2" || pizzaServers === "3") && (pizzaTips / pizzaServers).toFixed(2)}</div>
              </div>

              <div className='server'>
                <input value={pizzaMaking2Name} onChange={(e) => setPizzaMaking2Name(e.target.value)} placeholder="Name" className="thirty-three input-width nameinput"></input>
                <div className="thirty-three">{pizzaTips !== "0" && (pizzaServers === 2 || pizzaServers === 3 || pizzaServers === "2" || pizzaServers === "3") && (pizzaTips / pizzaServers).toFixed(2)}</div>
              </div>

              <div className='server'>
                <input value={pizzaMaking3Name} onChange={(e) => setPizzaMaking3Name(e.target.value)} placeholder="Name" className="thirty-three input-width nameinput"></input>
                <div className="thirty-three">{(pizzaTips !== 0 && (pizzaServers === 3 || pizzaServers === "3")) && (pizzaTips / pizzaServers).toFixed(2)}</div>
              </div>

            </div>

          </section> */}

<div className='pizza-making-question'>

            {!instructors && <div className='padding-bottom'>
              <button className='clear-all' onClick={showInstructors}>More than one pizza maker?</button>

            </div>
            }


            {instructors && <div>
              <button className='clear-all-x' onClick={showInstructors}>X</button>

            </div>}

            {instructors &&
              <div className='instructors'>



{ parseInt(totalInstructors) !== parseInt(pizzaTips) && 

<section className='servers'>
  <div className='warning-message'>Warning!! The pizza instructors' tips and the tips distributed amongst the 3 instructors do not match! The sum of the total tips for the three instructors must match the total pizza instructor tips shown above: {pizzaTips}$.</div>
</section>
}

                <div className='instructor'>
                  <div className='instructor-detail'>Instructor 1:</div>






                  <div className='instructor-detail'>

                    <div>Adults:</div>
                    <input type="number" value={instructor1Adults} className="instructor-detail-input" onChange={(e) => setInstructor1Adults(e.target.value)} onFocus={(e) => setInstructor1Adults("")} onClick={(e) => setInstructor1Adults("")}></input>
                    <div >{frontTips !== 0 && instructor1Adults !== "" && (parseFloat(instructor1Adults) * adultsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Cocktail:</div>
                    <input type="number" value={instructor1Cocktail} className="instructor-detail-input" onChange={(e) => setInstructor1Cocktail(e.target.value)} onFocus={(e) => setInstructor1Cocktail("")} onClick={(e) => setInstructor1Cocktail("")}></input>
                    <div >{frontTips !== 0 && instructor1Cocktail !== "" && (parseFloat(instructor1Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Children:</div>
                    <input type="number" value={instructor1Children} className="instructor-detail-input" onChange={(e) => setInstructor1Children(e.target.value)} onFocus={(e) => setInstructor1Children("")} onClick={(e) => setInstructor1Children("")}></input>
                    <div >{frontTips !== 0 && instructor1Children !== "" && (parseFloat(instructor1Children) * kidsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Field Trip:</div>
                    <input type="number" value={instructor1FieldTrip} className="instructor-detail-input" onChange={(e) => setInstructor1FieldTrip(e.target.value)} onFocus={(e) => setInstructor1FieldTrip("")} onClick={(e) => setInstructor1FieldTrip("")}></input>
                    <div >{frontTips !== 0 && instructor1FieldTrip !== "" && (parseFloat(instructor1FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>



                  <div className='instructor-detail'>Total Instructor 1: {totalInstructor1} $</div>

                </div>


                <div className='instructor'>
                  <div className='instructor-detail'>Instructor 2:</div>






                  <div className='instructor-detail'>

                    <div>Adults:</div>
                    <input type="number" value={instructor2Adults} className="instructor-detail-input" onChange={(e) => setInstructor2Adults(e.target.value)} onFocus={(e) => setInstructor2Adults("")} onClick={(e) => setInstructor2Adults("")}></input>
                    <div >{frontTips !== 0 && instructor2Adults !== "" && (parseFloat(instructor2Adults) * adultsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Cocktail:</div>
                    <input type="number" value={instructor2Cocktail} className="instructor-detail-input" onChange={(e) => setInstructor2Cocktail(e.target.value)} onFocus={(e) => setInstructor2Cocktail("")} onClick={(e) => setInstructor2Cocktail("")}></input>
                    <div >{frontTips !== 0 && instructor2Cocktail !== "" && (parseFloat(instructor2Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Children:</div>
                    <input type="number" value={instructor2Children} className="instructor-detail-input" onChange={(e) => setInstructor2Children(e.target.value)} onFocus={(e) => setInstructor2Children("")} onClick={(e) => setInstructor2Children("")}></input>
                    <div >{frontTips !== 0 && instructor2Children !== "" && (parseFloat(instructor2Children) * kidsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Field Trip:</div>
                    <input type="number" value={instructor2FieldTrip} className="instructor-detail-input" onChange={(e) => setInstructor2FieldTrip(e.target.value)} onFocus={(e) => setInstructor2FieldTrip("")} onClick={(e) => setInstructor2FieldTrip("")}></input>
                    <div >{frontTips !== 0 && instructor2FieldTrip !== "" && (parseFloat(instructor2FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>



                  <div className='instructor-detail'>Total Instructor 1: {totalInstructor2} $</div>

                </div>


                <div className='instructor'>
                  <div className='instructor-detail'>Instructor 3:</div>






                  <div className='instructor-detail'>

                    <div>Adults:</div>
                    <input type="number" value={instructor3Adults} className="instructor-detail-input" onChange={(e) => setInstructor3Adults(e.target.value)} onFocus={(e) => setInstructor3Adults("")} onClick={(e) => setInstructor3Adults("")}></input>
                    <div >{frontTips !== 0 && instructor3Adults !== "" && (parseFloat(instructor3Adults) * adultsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Cocktail:</div>
                    <input type="number" value={instructor3Cocktail} className="instructor-detail-input" onChange={(e) => setInstructor3Cocktail(e.target.value)} onFocus={(e) => setInstructor3Cocktail("")} onClick={(e) => setInstructor3Cocktail("")}></input>
                    <div >{frontTips !== 0 && instructor3Cocktail !== "" && (parseFloat(instructor3Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Children:</div>
                    <input type="number" value={instructor3Children} className="instructor-detail-input" onChange={(e) => setInstructor3Children(e.target.value)} onFocus={(e) => setInstructor3Children("")} onClick={(e) => setInstructor3Children("")}></input>
                    <div >{frontTips !== 0 && instructor3Children !== "" && (parseFloat(instructor3Children) * kidsPizzaPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>

                  <div className='instructor-detail'>

                    <div>Field Trip:</div>
                    <input type="number" value={instructor3FieldTrip} className="instructor-detail-input" onChange={(e) => setInstructor3FieldTrip(e.target.value)} onFocus={(e) => setInstructor3FieldTrip("")} onClick={(e) => setInstructor3FieldTrip("")}></input>
                    <div >{frontTips !== 0 && instructor3FieldTrip !== "" && (parseFloat(instructor3FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100).toFixed(2)}</div>
                  </div>



                  <div className='instructor-detail'>Total Instructor 3: {totalInstructor3} $</div>

                </div>


              </div>
            }
          </div>


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
                  <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
                }


              </div>

            </div>
            {totalHoursInfo && <div className='info-message'>Total hours considered for tips. It takes into consideration the difference between server and server support.</div>}

            <div className='inline'>
              <label className='inline-label'>TIPS per HOUR</label>
              <div className='tips-input'>{totalHours !== 0 && tipsPerHour !== "Infinity" && tipsPerHour().toFixed(2)}</div>
            </div>
            <div className='inline'>
              <label className='inline-label'>NEW FLOAT <div className={color !== 'blue' ? "info" : "info-red"} onClick={showNewFloatInfo}>i</div></label>
              <div className='tips-input'>

                {

                  // cashCounted !== 0 || cash !== 0

                  // &&

                  // (cashCounted - frontTips - pizzaTips).toFixed(2)
                  (cash > 0 ? (cash - frontTips - pizzaTips) : (cashCounted - frontTips - pizzaTips)).toFixed(2)




                }</div>
            </div>

            {newFloatInfo && <div className='info-message'>New float = Cash counted - Pizza making tips - front tips</div>}

          </section>








        </div>

      </div>

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
  <div className='print-line'>Cash tips: {cashTips}$</div>
  <div className='print-line'>Credit card tips AM: {creditCardsTipsAM}$</div>
  <div className='print-line'>Credit card tips Print Out: {creditCardsTipsPrintOut}$</div>
  <div className='print-line'>Credit card tips PM: {roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)}$</div>
  <div className='print-line'>TOTAL TIPS PM: {(roundToTwo(cashTips) + roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)).toFixed(2)}$</div>
  <div className='print-line'></div>
  <div className='print-line'>Pizza making Tips: {pizzaTips}$</div>
  <div className='print-line'>Kitchen Tips: {kitchenTips}$</div>
  <div className='print-line'>Front Tips: {frontTips}$</div>
  <div className='print-line'>Total hours: {totalHours.toFixed(2)}</div>
  <div className='print-line'>Tips per hour: {tipsPerHour().toFixed(2)}$</div>
  <div className='print-line'>NEW FLOAT: {(cash > 0 ? (cash - frontTips - pizzaTips) : (cashCounted - frontTips - pizzaTips)).toFixed(2)}$</div>
  <div className='print-line'></div>
  <div className='print-line'>TIPS DISTRIBUTION:</div>

  <div className='print-servers-tip'>

  {server1Hours !== 0 && server1Hours !== "0" && <div className='print-server'>
      <div className='server-details'>{server1Name}</div>
      <div className='server-details'>{server1Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * server1Hours).toFixed(2)}$</div>
    </div>}

    {server2Hours !== 0 && server2Hours !== "0" &&  <div className='print-server'>
      <div className='server-details'>{server2Name}</div>
      <div className='server-details'>{server2Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * server2Hours).toFixed(2)}$</div>
    </div>}

    {server3Hours !== 0 && server3Hours !== "0" &&  <div className='print-server'>
      <div className='server-details'>{server3Name}</div>
      <div className='server-details'>{server3Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * server3Hours).toFixed(2)}$</div>
    </div>}

    {server4Hours !== 0 && server4Hours !== "0" &&  <div className='print-server'>
      <div className='server-details'>{server4Name}</div>
      <div className='server-details'>{server4Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * server4Hours).toFixed(2)}$</div>
    </div>}


    {server5Hours !== 0 && server5Hours !== "0" &&  <div className='print-server'>
      <div className='server-details'>{server5Name}</div>
      <div className='server-details'>{server5Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * server5Hours).toFixed(2)}$</div>
    </div>}

    {assistant1Hours !== 0 && assistant1Hours !== "0" && <div className='print-server'>
      <div className='server-details'>{assistant1Name}</div>
      <div className='server-details'>{assistant1Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}$</div>
    </div>}

    {assistant2Hours !== 0 && assistant2Hours !== "0" && assistant2Hours !== 0 && <div className='print-server'>
      <div className='server-details'>{assistant2Name}</div>
      <div className='server-details'>{assistant2Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}$</div>
    </div>}

    {assistant3Hours !== 0 && assistant3Hours !== "0" && <div className='print-server'>
      <div className='server-details'>{assistant3Name}</div>
      <div className='server-details'>{assistant3Hours} hours </div>
      <div className='server-details'>{(frontTips / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}$</div>
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
      

    </div>
  )
}