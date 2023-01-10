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
  const totalCash = parseInt(cashCounted) + parseInt(receipts)
  const [float, setFloat] = useState(0);
  const [cashSales, setCashSales] = useState(0);
  const cashTips = parseInt(cashCounted) - parseInt(cashSales) - parseInt(float)
  const [creditCardTips, setCreditCardTips] = useState(0)
  const totalTips = parseInt(cashTips) + parseInt(creditCardTips)
  const [pizzaAdults, setPizzaAdults] = useState(0)
  const [pizzaChildren, setPizzaChildren] = useState(0)
  const [pizzaServers, setPizzaServers] = useState(0)
  const pizzaTips = (parseInt(pizzaChildren) * kidsPizzaPrice * pizzaTipsPercent / 100) + (parseInt(pizzaAdults) * adultsPizzaPrice * pizzaTipsPercent / 100)
  const tipsAfterPizzaParty = totalTips - pizzaTips
  const kitchenTips = tipsAfterPizzaParty * kitchenTipsPercent / 100;
  const frontTips = tipsAfterPizzaParty * frontTipsPercent / 100;

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

  const totalHours = parseInt(server1Hours) + parseInt(server2Hours) + parseInt(server3Hours) + parseInt(server4Hours) + parseInt(server5Hours) + parseInt(assistant1Hours) * assistantTips / 100 + parseInt(assistant2Hours) * assistantTips / 100 + parseInt(assistant3Hours) * assistantTips / 100;

  const tipsPerHour = frontTips/totalHours

  // useEffect(() => {
  //   console.log("cash counted", cashCounted)
  // }, [cashCounted])

  const clearAll = () => {
    setCashCounted(0);
    setReceipts(0);
    setFloat(0);
    setCashSales(0);
    setCreditCardTips(0)
    setPizzaAdults(0);
    setPizzaChildren(0);
    setPizzaServers(0)
  }


  return (
    <div className="App">

      <button onClick={clearAll}>Clear all</button>

      <label>Cash counted</label>
      <input value={cashCounted} onChange={(e) => setCashCounted(e.target.value)}></input>

      <label>Receipts</label>
      <input value={receipts} onChange={(e) => setReceipts(e.target.value)}></input>

      <label>TOTAL CASH</label>
      <>{totalCash}</>

      <label>Float</label>
      <input value={float} onChange={(e) => setFloat(e.target.value)}></input>

      <label>Cash sales</label>
      <input value={cashSales} onChange={(e) => setCashSales(e.target.value)}></input>

      <label>Cash tips</label>
      <>{cashTips}</>

      <label>Credit card tips</label>
      <input value={creditCardTips} onChange={(e) => setCreditCardTips(e.target.value)}></input>

      <label>Total tips</label>
      <>{cashTips}</>

      <label>Pizza making adults</label>
      <input value={pizzaAdults} onChange={(e) => setPizzaAdults(e.target.value)}></input>

      <label>Pizza making children</label>
      <input value={pizzaChildren} onChange={(e) => setPizzaChildren(e.target.value)}></input>

      <label>Pizza making servers</label>
      <input value={pizzaServers} onChange={(e) => setPizzaServers(e.target.value)}></input>

      <label>Pizza making tips</label>
      <>{pizzaTips}</>

      <label>Tips after Pizza party</label>
      <>{tipsAfterPizzaParty}</>

      <label>Kitchen tips</label>
      <>{kitchenTips}</>

      <label>Front tips</label>
      <>{frontTips}</>

      <label>Server 1 name</label>
      <input value={server1Name} onChange={(e) => setServer1Name(e.target.value)}></input>
      <label>Server actual hours</label>
      <input value={server1Hours} onChange={(e) => setServer1Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(server1Hours) * fullTips / 100}
      <label>Total tips</label>
      {tipsPerHour*server1Hours}

      <label>Server 2 name</label>
      <input value={server2Name} onChange={(e) => setServer2Name(e.target.value)}></input>
      <label>Server actual hours</label>
      <input value={server2Hours} onChange={(e) => setServer2Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(server2Hours) * fullTips / 100}
      <label>Total tips</label>
      {tipsPerHour*server2Hours}

      <label>Server 3 name</label>
      <input value={server3Name} onChange={(e) => setServer3Name(e.target.value)}></input>
      <label>Server actual hours</label>
      <input value={server3Hours} onChange={(e) => setServer3Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(server3Hours) * fullTips / 100}
      <label>Total tips</label>
      {tipsPerHour*server3Hours}

      <label>Server 4 name</label>
      <input value={server4Name} onChange={(e) => setServer4Name(e.target.value)}></input>
      <label>Server actual hours</label>
      <input value={server4Hours} onChange={(e) => setServer4Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(server1Hours) * fullTips / 100}
      <label>Total tips</label>
      {tipsPerHour*server4Hours}

      <label>Server 5 name</label>
      <input value={server5Name} onChange={(e) => setServer5Name(e.target.value)}></input>
      <label>Server actual hours</label>
      <input value={server5Hours} onChange={(e) => setServer5Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(server5Hours) * fullTips / 100}
      <label>Total tips</label>
      {tipsPerHour*server5Hours}

      <label>Assistant server 1 name</label>
      <input value={assistant1Name} onChange={(e) => setAssistant1Name(e.target.value)}></input>
      <label>Assistant Server actual hours</label>
      <input value={assistant1Hours} onChange={(e) => setAssistant1Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(assistant1Hours) * assistantTips / 100}
      <label>Total tips</label>
      {tipsPerHour*assistant1Hours*assistantTips/100}

      <label>Assistant server 2 name</label>
      <input value={assistant2Name} onChange={(e) => setAssistant2Name(e.target.value)}></input>
      <label>Assistant Server actual hours</label>
      <input value={assistant2Hours} onChange={(e) => setAssistant2Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(assistant2Hours) * assistantTips / 100}

      <label>Assistant server 3 name</label>
      <input value={assistant3Name} onChange={(e) => setAssistant3Name(e.target.value)}></input>
      <label>Assistant Server actual hours</label>
      <input value={assistant3Hours} onChange={(e) => setAssistant3Hours(e.target.value)}></input>
      <label>Server hours for tips</label>
      {parseInt(assistant3Hours) * assistantTips / 100}

      <label>TOTAL HOURS for tips</label>
      {totalHours}

      <label>NEW FLOAT</label>
      {cashCounted - frontTips - pizzaTips}

<label>TOTAL TIPS per HOUR</label>
{tipsPerHour.toFixed(2)}


    </div>
  );
}

export default App;
