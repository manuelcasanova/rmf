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



    </div>
  );
}

export default App;
