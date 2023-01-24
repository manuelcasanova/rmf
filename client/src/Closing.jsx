//Hooks

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

//Libraries

import ReactToPrint from 'react-to-print'

//Components

import Now from './Now';
import AmButton from './AmButton';

//Images

import brush from './images/brush.png'
import brushWhite from './images/brush-white.png'

export default function Closing({ color, setColor }) {

  const fullTips = 100;
  const assistantTips = 40;
  const kidsPizzaPrice = 25;
  const adultsPizzaPrice = 40;
  const adultsCocktailPrice = 25;
  const pizzaTipsPercent = 10;
  const kitchenTipsPercent = 30;
  const frontTipsPercent = 70;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev)
  }



  const now = Now()

  const [cashCounted, setCashCounted] = useState(0);
  const [receipts, setReceipts] = useState(0);
  const totalCash = parseFloat(cashCounted) + parseFloat(receipts)
  const [float, setFloat] = useState(0);
  const [cashSales, setCashSales] = useState(0);
  const cashTips = (parseFloat(cashCounted) + parseFloat(receipts) - parseFloat(cashSales) - parseFloat(float)).toFixed(2)
  const [creditCardTips, setCreditCardTips] = useState(0)
  const totalTips = parseFloat(cashTips) + parseFloat(creditCardTips)
  const [pizzaAdults, setPizzaAdults] = useState(0)
  const [cocktailAdults, setCocktailAdults] = useState(0)
  const [pizzaChildren, setPizzaChildren] = useState(0)
  const [pizzaServers, setPizzaServers] = useState(0)
  const pizzaTips = (parseFloat(pizzaChildren) * kidsPizzaPrice * pizzaTipsPercent / 100) + (parseFloat(pizzaAdults) * adultsPizzaPrice * pizzaTipsPercent / 100 + (parseFloat(cocktailAdults) * adultsCocktailPrice * pizzaTipsPercent / 100))
  const tipsAfterPizzaParty = (totalTips - pizzaTips).toFixed(2)
  const kitchenTips = (tipsAfterPizzaParty * kitchenTipsPercent / 100).toFixed(2);
  const frontTips = (tipsAfterPizzaParty * frontTipsPercent / 100).toFixed(2);
  const perServer = pizzaServers >= 1 && (pizzaTips / pizzaServers).toFixed(2);



  const [totalCashInfo, setTotalCashInfo] = useState(false)
  const [totalHoursInfo, setTotalHoursInfo] = useState(false)
  const [cashSalesInfo, setCashSalesInfo] = useState(false)
  const [cashTipsInfo, setCashTipsInfo] = useState(false)
  const [creditCardTipsInfo, setCreditCardTipsInfo] = useState(false)
  const [newFloatInfo, setNewFloatInfo] = useState(false)
  const [pizzaParties, setPizzaParties] = useState(false)
  const [supportServerInfo, setSupportServerInfo] = useState(true)

  const [colors, setColors] = useState(false)
  const [summary, setSummary] = useState(false)
  const [redLine, setRedLine] = useState(false)



  const showTotalCashInfo = (e) => {
    e.preventDefault();
    setTotalCashInfo(prev => !prev)
  }

  const showTotalHoursInfo = (e) => {
    e.preventDefault();
    setTotalHoursInfo(prev => !prev)
  }

  const showCashSalesInfo = (e) => {
    e.preventDefault();
    setCashSalesInfo(prev => !prev)
  }

  const showCashTipsInfo = (e) => {
    e.preventDefault();
    setCashTipsInfo(prev => !prev)
  }

  const showCreditCardTipsInfo = (e) => {
    e.preventDefault();
    setCreditCardTipsInfo(prev => !prev)
  }

  const showNewFloatInfo = (e) => {
    e.preventDefault();
    setNewFloatInfo(prev => !prev)
  }

  const showPizzaParties = (e) => {
    e.preventDefault();
    setPizzaParties(prev => !prev)
  }

  const showSupportServerInfo = (e) => {
    e.preventDefault();
    setSupportServerInfo(prev => !prev)
  }

  const showColors = () => {
    // e.preventDefault();
    setColors(prev => !prev)
  }

  const showSummary = () => {
    // e.preventDefault();
    setSummary(prev => !prev)
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

  const [pizzaMaking1Hours, setPizzaMaking1Hours] = useState(0);
  const [pizzaMaking2Hours, setPizzaMaking2Hours] = useState(0);
  const [pizzaMaking3Hours, setPizzaMaking3Hours] = useState(0);

  const [pizzaMaking1Name, setPizzaMaking1Name] = useState("");
  const [pizzaMaking2Name, setPizzaMaking2Name] = useState("");
  const [pizzaMaking3Name, setPizzaMaking3Name] = useState("");

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

  // useEffect(() => {
  //   console.log("tipsPerHour", frontTips / totalHours)
  // }, [tipsPerHour])

  const clearAll = () => {
    setCashCounted(0);
    setReceipts(0);
    setFloat(0);
    setCashSales(0);
    setCreditCardTips(0)
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
    setPizzaMaking1Hours(0);
    setPizzaMaking2Hours(0);
    setPizzaMaking3Hours(0);
    setPizzaMaking1Name("");
    setPizzaMaking2Name("");
    setPizzaMaking3Name("");

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
    setPizzaMaking1Hours(0);
    setPizzaMaking2Hours(0);
    setPizzaMaking3Hours(0);
    setPizzaMaking1Name("");
    setPizzaMaking2Name("");
    setPizzaMaking3Name("");
  }


  const test = () => {
    setCashCounted(990);
    setReceipts(10);
    setFloat(400);
    setCashSales(500);
    setCreditCardTips(500)
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
    setPizzaMaking1Hours(0);
    setPizzaMaking2Hours(0);
    setPizzaMaking1Name("Liz");
    setPizzaMaking2Name("Akasha");
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


        <div className='switch'>{now}</div>

        <div className='seccion'>





          <div className='title'>Shift</div>
          <Link to='/night' className='subtitle'><AmButton toggle={toggle} /></Link>

          <div className='clear-all-div'>
            <button className="clear-all" onClick={clearAll}>Clear all</button>
          </div>


          {/* {<div className='clear-all-div'>
<button className="clear-all" onClick={test}>Set an example</button>
</div>} */}

          <section className='money'>

            <div className='inline'>
              <label className='inline-label'>Cash counted</label>
              <input type="number" className='money-input' value={cashCounted} onChange={(e) => setCashCounted(e.target.value)}
                onClick={(e) => setCashCounted("")}
                onFocus={(e) => setCashCounted("")}
              ></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Receipts</label>
              <input type="number" className='money-input' value={receipts} onChange={(e) => setReceipts(e.target.value)} onClick={(e) => setReceipts("")}
                onFocus={(e) => setReceipts("")}></input>
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
                onFocus={(e) => setFloat("")}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Cash sales<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesInfo}>i</div></label>

              <input type="number" className='money-input' value={cashSales} onChange={(e) => setCashSales(e.target.value)}
                onClick={(e) => setCashSales("")}
                onFocus={(e) => setCashSales("")}
              ></input>
            </div>

            {cashSalesInfo && <div className='info-message'>Cash on print out</div>}

            <div className='inline'>
              <label className='inline-label'>Cash tips<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashTipsInfo}>i</div></label>
              <div className='money-input'>{!isNaN(cashTips) && cashTips}</div>
              {isNaN(cashTips)
                &&
                <div className='error-message'>Input fields cannot be empty. Set to 0 if necessary.</div>
              }
            </div>


            {cashTipsInfo && <div className='info-message'>Cash tips = Total cash - Float - Cash sales</div>}

            <div className='inline'>
              <label className='inline-label'>Credit card tips<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCreditCardTipsInfo}>i</div></label>
              <input type="number" className='money-input' value={creditCardTips} onChange={(e) => setCreditCardTips(e.target.value)} onClick={(e) => setCreditCardTips("")}
                onFocus={(e) => setCreditCardTips("")}></input>
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
              <label className='inline-label'>Pizza party servers</label>
              <input type="number" max="3" className='pizza-input' value={pizzaServers} onChange={(e) => setPizzaServers(e.target.value)} onClick={(e) => setPizzaServers("")}
                onFocus={(e) => setPizzaServers("")}></input>
            </div>

            <div className='inline'>
              <label className='inline-label'>Pizza/Cocktail making tips</label>
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
              <label className='inline-label'>Per server</label>
              <div className='pizza-input'>
                {
                  !perServer < "1"
                  && !perServer < 1
                  && perServer !== "Infinity"
                  && !isNaN(perServer)
                  // pizzaServers === "1" || pizzaServers === "2" || pizzaServers === "3" || pizzaServers === 1 || pizzaServers === 2 || pizzaServers === 3
                  && roundToTwo(perServer)}</div>

              {/* {pizzaServers !== "1" && pizzaServers !== "2" && pizzaServers !== "3"
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
              <div className='thirty-three'>Server</div>
              <div className='thirty-three'>Hours</div>
              <div className='thirty-three'>100%</div>
              <div className='thirty-three'>Tips</div>
            </div>


            <div className='server'>
              <input type="text" required value={server1Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setServer1Name(e.target.value)}></input>
              <input type="number" value={(server1Hours)} className="thirty-three input-width nameinput" onChange={(e) => setServer1Hours(e.target.value)} onClick={(e) => setServer1Hours("")}
                onFocus={(e) => setServer1Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server1Hours !== "" && (parseFloat(server1Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server1Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server1Hours).toFixed(2)}</div>
            </div>


            <div className='server'>
              <input value={server2Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setServer2Name(e.target.value)}></input>
              <input type="number" value={server2Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer2Hours(e.target.value)} onClick={(e) => setServer2Hours("")}
                onFocus={(e) => setServer2Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server2Hours !== "" && (parseFloat(server2Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server2Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server2Hours).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={server3Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setServer3Name(e.target.value)}></input>
              <input type="number" value={server3Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer3Hours(e.target.value)} onClick={(e) => setServer3Hours("")}
                onFocus={(e) => setServer3Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server3Hours !== "" && (parseFloat(server3Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server3Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server3Hours).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={server4Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setServer4Name(e.target.value)}></input>
              <input type="number" value={server4Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer4Hours(e.target.value)} onClick={(e) => setServer4Hours("")}
                onFocus={(e) => setServer4Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server4Hours !== "" && (parseFloat(server4Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server4Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server4Hours).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={server5Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setServer5Name(e.target.value)}></input>
              <input type="number" value={server5Hours} className="thirty-three input-width nameinput" onChange={(e) => setServer5Hours(e.target.value)} onClick={(e) => setServer5Hours("")}
                onFocus={(e) => setServer5Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && server5Hours !== "" && (parseFloat(server5Hours) * fullTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && server5Hours !== "" && server1Hours > 0 && (frontTips / totalHours * server5Hours).toFixed(2)}</div>
            </div>


            <div className='th margin-top margin-bottom'>
              <div className='thirty-three'>Support</div>
              <div className='thirty-three'>Hours</div>
              <div className='thirty-three'>40%</div>
              <div className='thirty-three'>Tips</div>
            </div>

            <div className='server'>
              <input value={assistant1Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setAssistant1Name(e.target.value)}></input>
              <input type="number" value={assistant1Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant1Hours(e.target.value)} onFocus={(e) => setAssistant1Hours("")} onClick={(e) => setAssistant1Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && assistant1Hours !== "" && (parseFloat(assistant1Hours) * assistantTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && assistant1Hours !== "" && server1Hours > 0 && (frontTips / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={assistant2Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setAssistant2Name(e.target.value)}></input>
              <input type="number" value={assistant2Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant2Hours(e.target.value)} onFocus={(e) => setAssistant2Hours("")} onClick={(e) => setAssistant2Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && assistant2Hours !== "" && (parseFloat(assistant2Hours) * assistantTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && assistant2Hours !== "" && server1Hours > 0 && (frontTips / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}</div>
            </div>

            <div className='server'>
              <input value={assistant3Name} placeholder="Name" className="thirty-three input-width nameinput" onChange={(e) => setAssistant3Name(e.target.value)}></input>
              <input type="number" value={assistant3Hours} className="thirty-three input-width nameinput" onChange={(e) => setAssistant3Hours(e.target.value)} onFocus={(e) => setAssistant3Hours("")} onClick={(e) => setAssistant1Hours("")}></input>
              <div className="thirty-three">{frontTips !== "0" && assistant3Hours !== "" && (parseFloat(assistant3Hours) * assistantTips / 100).toFixed(2)}</div>
              <div className="thirty-three">{frontTips !== "0" && assistant3Hours !== "" && server1Hours > 0 && (frontTips / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}</div>
            </div>




          </section>


          <section className={pizzaParties ? '' : 'pizza'}>


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

          </section>





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
              <div className='tips-input'>{totalHours !== "0" && tipsPerHour().toFixed(2)}</div>
            </div>

            <div className='inline'>
              <label className='inline-label'>NEW FLOAT <div className={color !== 'blue' ? "info" : "info-red"} onClick={showNewFloatInfo}>i</div></label>
              <div className='tips-input'>{cashCounted !== "0" && cashCounted !== "" && (cashCounted - frontTips - pizzaTips).toFixed(2)}</div>
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
        <button className='clear-all' onClick={showSummary}>X</button>

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
            <div className='print-line'>Cash counted: {cashCounted}$</div>
            <div className='print-line'>Receipts: {receipts}$</div>
            <div className='print-line'>TOTAL CASH: {totalCash}$</div>
            <div className='print-line'>Float: {float}$</div>
            <div className='print-line'>Cash sales: {cashSales}$</div>
            <div className='print-line'>Cash tips: {cashTips}$</div>
            <div className='print-line'>Credit card tips: {creditCardTips}$</div>
            <div className='print-line'>TOTAL TIPS: {totalTips}$</div>
            <div className='print-line'></div>
            <div className='print-line'>Pizza making Tips: {pizzaTips}$</div>
            <div className='print-line'>Kitchen Tips: {kitchenTips}$</div>
            <div className='print-line'>Front Tips: {frontTips}$</div>
            <div className='print-line'>Total hours: {totalHours.toFixed(2)}</div>
            <div className='print-line'>Tips per hour: {tipsPerHour().toFixed(2)}$</div>
            <div className='print-line'>NEW FLOAT: {(cashCounted - frontTips - pizzaTips).toFixed(2)}$</div>
            <div className='print-line'></div>
            <div className='print-line'>TIPS DISTRIBUTION:</div>

            <div className='print-servers-tip'>

              {server1Hours !== 0 && server1Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server1Name}</div>
                <div className='server-details'>{server1Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * server1Hours).toFixed(2)}$</div>
              </div>}

              {server2Hours !== 0 && server2Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server2Name}</div>
                <div className='server-details'>{server2Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * server2Hours).toFixed(2)}$</div>
              </div>}

              {server3Hours !== 0 && server3Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server3Name}</div>
                <div className='server-details'>{server3Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * server3Hours).toFixed(2)}$</div>
              </div>}

              {server4Hours !== 0 && server4Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server4Name}</div>
                <div className='server-details'>{server4Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * server4Hours).toFixed(2)}$</div>
              </div>}


              {server5Hours !== 0 && server5Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{server5Name}</div>
                <div className='server-details'>{server5Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * server5Hours).toFixed(2)}$</div>
              </div>}

              {assistant1Hours !== 0 && assistant1Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant1Name}</div>
                <div className='server-details'>{assistant1Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * assistant1Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {assistant2Hours !== 0 && assistant2Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant2Name}</div>
                <div className='server-details'>{assistant2Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * assistant2Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

              {assistant3Hours !== 0 && assistant3Hours !== "0" && <div className='print-server'>
                <div className='server-details'>{assistant3Name}</div>
                <div className='server-details'>{assistant3Hours} hours </div>
                <div className='server-details'>{(frontTips / totalHours * assistant3Hours * assistantTips / 100).toFixed(2)}$</div>
              </div>}

            </div>

          </div>




        </div>
      }


    </div>
  )
}