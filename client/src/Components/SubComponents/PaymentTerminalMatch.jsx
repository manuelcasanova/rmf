//Hooks

import { useState } from "react";

export default function PayTerminalMatch() {


  const [terminal, setTerminal] = useState(false)

  const showTerminal = (e) => {
    e.preventDefault();
    setTerminal(prev => !prev);
    setVisa1(0);
    setVisa2(0);
    setMasterCard1(0);
    setMasterCard2(0);
  }

  const [visa1, setVisa1] = useState(0)
  const [visa2, setVisa2] = useState(0)
  const totalVisa = (parseFloat(visa1) + parseFloat(visa2));

  const [masterCard1, setMasterCard1] = useState(0)
  const [masterCard2, setMasterCard2] = useState(0)
  const totalMasterCard = (parseFloat(masterCard1) + parseFloat(masterCard2));

  const [debit1, setDebit1] = useState(0)
  const [debit2, setDebit2] = useState(0)
  const totalDebit = (parseFloat(debit1) + parseFloat(debit2));

  return (
    <div
      className='pizza-making-question'
    >


      <div className='yes-no'>
        {!terminal && <button className='clear-all' onClick={showTerminal}>Payment Terminal Match</button>}
      </div>


      {terminal && <button className='clear-all-x' onClick={showTerminal}>x</button>}
      {terminal &&

<>

        <div className="card">
          <div className='card1'>
            <label className='inline-label-small'>Visa 1</label>
            <input type="number" className='cash-input-small' value={visa1} onChange={(e) => setVisa1(e.target.value)}
              onClick={() => setVisa1("")}
              onFocus={() => setVisa1("")}
            ></input>
          </div>

          <div className='card2'>
            <label className='inline-label-small'>Visa 2</label>
            <input type="number" className='cash-input-small' value={visa2} onChange={(e) => setVisa2(e.target.value)}
              onClick={() => setVisa2("")}
              onFocus={() => setVisa2("")}
            ></input>
          </div>

          <div className='cardtotal'>
            <label className='inline-label-small'>Total Visa:</label>
            <label className='total-card'>{totalVisa}</label>
          </div>
        </div>


        <div className="card">
          <div className='card1'>
            <label className='inline-label-small'>MasterCard 1</label>
            <input type="number" className='cash-input-small' value={masterCard1} onChange={(e) => setMasterCard1(e.target.value)}
              onClick={() => setMasterCard1("")}
              onFocus={() => setMasterCard1("")}
            ></input>
          </div>

          <div className='card2'>
            <label className='inline-label-small'>MasterCard 2</label>
            <input type="number" className='cash-input-small' value={masterCard2} onChange={(e) => setMasterCard2(e.target.value)}
              onClick={() => setMasterCard2("")}
              onFocus={() => setMasterCard2("")}
            ></input>
          </div>

          <div className='cardtotal'>
            <label className='inline-label-small'>Total MC:</label>
            <label className='total-card'>{totalMasterCard}</label>
          </div>
        </div>

        <div className="card">
          <div className='card1'>
            <label className='inline-label-small'>Debit 1</label>
            <input type="number" className='cash-input-small' value={debit1} onChange={(e) => setDebit1(e.target.value)}
              onClick={() => setDebit1("")}
              onFocus={() => setDebit1("")}
            ></input>
          </div>

          <div className='card2'>
            <label className='inline-label-small'>Debit 2</label>
            <input type="number" className='cash-input-small' value={debit2} onChange={(e) => setDebit2(e.target.value)}
              onClick={() => setDebit2("")}
              onFocus={() => setDebit2("")}
            ></input>
          </div>

          <div className='cardtotal'>
            <label className='inline-label-small'>Total Debit:</label>
            <label className='total-card'>{totalDebit}</label>
          </div>
        </div>
        
        
        </>      
        
        }



    </div>
  )
}