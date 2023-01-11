import { useState, useEffect } from 'react'
import './App.css';

function App() {


  const fullTips = 100;
  const assistantTips = 40;
  const kidsPizzaPrice = 25;
  const adultsPizzaPrice = 40;
  const pizzaTipsPercent = 10;
  const kitchenTipsPercent = 30;
  const frontTipsPercent = 70;


  const [cashCounted, setCashCounted] = useState(0);
  const [receipts, setReceipts] = useState(0);
  const totalCash = parseFloat(cashCounted) + parseFloat(receipts)
  const [float, setFloat] = useState(0);
  const [cashSales, setCashSales] = useState(0);
  const cashTips = parseFloat(cashCounted) - parseFloat(cashSales) - parseFloat(float)
  const [creditCardTips, setCreditCardTips] = useState(0)
  const totalTips = parseFloat(cashTips) + parseFloat(creditCardTips)
  const [pizzaAdults, setPizzaAdults] = useState(0)
  const [pizzaChildren, setPizzaChildren] = useState(0)
  const [pizzaServers, setPizzaServers] = useState(0)
  const pizzaTips = (parseFloat(pizzaChildren) * kidsPizzaPrice * pizzaTipsPercent / 100) + (parseFloat(pizzaAdults) * adultsPizzaPrice * pizzaTipsPercent / 100)
  const tipsAfterPizzaParty = totalTips - pizzaTips
  const kitchenTips = tipsAfterPizzaParty * kitchenTipsPercent / 100;
  const frontTips = tipsAfterPizzaParty * frontTipsPercent / 100;


  const [totalCashInfo, setTotalCashInfo] = useState(false)
  const [totalHoursInfo, setTotalHoursInfo] = useState(false)

  const showTotalCashInfo = (e) => {
    e.preventDefault();
    setTotalCashInfo(prev => !prev)
  }

  const showTotalHoursInfo = (e) => {
    e.preventDefault();
    setTotalHoursInfo(prev => !prev)
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

  const totalHours = parseFloat(server1Hours) + parseFloat(server2Hours) + parseFloat(server3Hours) + parseFloat(server4Hours) + parseFloat(server5Hours) + parseFloat(assistant1Hours) * assistantTips / 100 + parseFloat(assistant2Hours) * assistantTips / 100 + parseFloat(assistant3Hours) * assistantTips / 100;

  const tipsPerHour = () => {
    if (isNaN(frontTips / totalHours)) {
      return 0
    } else {
      return frontTips / totalHours
    }
  }


  // useEffect(() => {
  //   console.log(tipsPerHour)
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
  }


  return (
    <div className="App">

      <div className='clear-all-div'>
        <button className="clear-all" onClick={clearAll}>Clear all</button>
      </div>


      <section className='money'>

        <div className='inline'>
          <label className='inline-label'>Cash counted</label>
          <input className='money-input' value={cashCounted} onChange={(e) => setCashCounted(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Receipts</label>
          <input className='money-input' value={receipts} onChange={(e) => setReceipts(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label' onClick={showTotalCashInfo}>TOTAL CASH <div className="info" onClick={showTotalHoursInfo}>i</div></label>
          <div className='money-input'>{totalCash}</div>
        </div>

        {totalCashInfo && <div>Cash counted + receipts</div>}

        <div className='inline'>
          <label className='inline-label'>Float</label>
          <input className='money-input' value={float} onChange={(e) => setFloat(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Cash sales</label>
          <input className='money-input' value={cashSales} onChange={(e) => setCashSales(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Cash tips</label>
          <div className='money-input'>{cashTips}</div>
        </div>

        <div className='inline'>
          <label className='inline-label'>Credit card tips</label>
          <input className='money-input' value={creditCardTips} onChange={(e) => setCreditCardTips(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Total tips</label>
          <div className='money-input'>{cashTips}</div>
        </div>

      </section>

      <section className='pizza'>

        <div className='inline'>
          <label className='inline-label'>Pizza making adults</label>
          <input className='pizza-input' value={pizzaAdults} onChange={(e) => setPizzaAdults(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Pizza making children</label>
          <input className='pizza-input' value={pizzaChildren} onChange={(e) => setPizzaChildren(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Pizza making servers</label>
          <input className='pizza-input' value={pizzaServers} onChange={(e) => setPizzaServers(e.target.value)}></input>
        </div>

        <div className='inline'>
          <label className='inline-label'>Pizza making tips</label>
          <div className='pizza-input'>{pizzaTips}</div>
        </div>

      </section>

      <section className='tips'>

        <div className='inline'>
          <label className='inline-label'>Tips after Pizza party</label>
          <div className='tips-input'>{tipsAfterPizzaParty}</div>
        </div>


        <div className='inline'>
          <label className='inline-label'>Kitchen tips</label>
          <div className='tips-input'>{kitchenTips}</div>
        </div>


        <div className='inline'>
          <label className='inline-label'>Front tips</label>
          <div className='tips-input'>{frontTips}</div>
        </div>


      </section>

      <section className='servers'>

        <div className='th'>
          <div className='thirty-three'>Server</div>
          <div className='thirty-three'>Actual hours</div>
          <div className='thirty-three'>Hours for tips</div>
          <div className='thirty-three'>Tips</div>
        </div>


        <div className='server'>
          <input type="text" required value={server1Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setServer1Name(e.target.value)}></input>
          <input value={(server1Hours)} className="thirty-three input-width" onChange={(e) => setServer1Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(server1Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * server1Hours).toFixed(2)}</div>
        </div>


        <div className='server'>
          <input value={server2Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setServer2Name(e.target.value)}></input>
          <input value={server2Hours} className="thirty-three input-width" onChange={(e) => setServer2Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(server2Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * server2Hours).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={server3Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setServer3Name(e.target.value)}></input>
          <input value={server3Hours} className="thirty-three input-width" onChange={(e) => setServer3Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(server3Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * server3Hours).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={server4Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setServer4Name(e.target.value)}></input>
          <input value={server4Hours} className="thirty-three input-width" onChange={(e) => setServer4Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(server4Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * server4Hours).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={server5Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setServer5Name(e.target.value)}></input>
          <input value={server5Hours} className="thirty-three input-width" onChange={(e) => setServer5Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(server5Hours) * fullTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * server5Hours).toFixed(2)}</div>
        </div>


        <div className='th margin-top'>
          <div className='thirty-three'>Server</div>
          <div className='thirty-three'>Actual hours</div>
          <div className='thirty-three'>Hours for tips</div>
          <div className='thirty-three'>Tips</div>
        </div>

        <div className='server'>
          <input value={assistant1Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setAssistant1Name(e.target.value)}></input>
          <input value={assistant1Hours} className="thirty-three input-width" onChange={(e) => setAssistant1Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(assistant1Hours) * assistantTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * assistant1Hours * assistantTips/100).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={assistant2Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setAssistant2Name(e.target.value)}></input>
          <input value={assistant2Hours} className="thirty-three input-width" onChange={(e) => setAssistant2Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(assistant2Hours) * assistantTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * assistant2Hours * assistantTips/100).toFixed(2)}</div>
        </div>

        <div className='server'>
          <input value={assistant3Name} placeholder="Name" className="thirty-three input-width" onChange={(e) => setAssistant3Name(e.target.value)}></input>
          <input value={assistant3Hours} className="thirty-three input-width" onChange={(e) => setAssistant3Hours(e.target.value)}></input>
          <div className="thirty-three">{(parseFloat(assistant3Hours) * assistantTips / 100).toFixed(2)}</div>
          <div className="thirty-three">{(frontTips / totalHours * assistant3Hours * assistantTips/100).toFixed(2)}</div>
        </div>

      </section>


      <section className='summary'>

        <div className='inline'>
          <label className='inline-label'>TOTAL HOURS <div className="info" onClick={showTotalHoursInfo}>i</div></label>

          <div className='tips-input'>
            {
              !isNaN(totalHours.toFixed(2)) &&
              totalHours.toFixed(2)

            }

            {isNaN(totalHours.toFixed(2))
              &&
              <div className='error-message'>Actual hours field cannot be empty. Set to 0 if necessary.</div>
            }


          </div>

        </div>
        {totalHoursInfo && <div>Total hours considered for tips. It takes into consideration the difference between server and server support.</div>}

        <div className='inline'>
          <label className='inline-label'>TIPS per HOUR</label>
          <div className='tips-input'>{tipsPerHour().toFixed(2)}</div>
        </div>

        <div className='inline'>
          <label className='inline-label'>NEW FLOAT</label>
          <div className='tips-input'>{cashCounted - frontTips - pizzaTips}</div>
        </div>

      </section>




    </div>
  );
}

export default App;
