//Hooks

import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';

export default function SupportCashCounting () {

const { 

    // Toggle and Visibility

  cashCount, 
  showCashCount,

    // Currency Denominations
    hundred, setHundred, fifty, setFifty,
    twenty, setTwenty, ten, setTen,
    five, setFive, two, setTwo,
    one, setOne, quarter, setQuarter,

} = useContext(AppContext);

  return (
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


        <div className='inline'>
          <label className='inline-label-small'>100 $</label>
          <input type="number" className='cash-input-small' value={hundred} onChange={(e) => setHundred(e.target.value)}
            onClick={() => setHundred("")}
            onFocus={() => setHundred("")}
          ></input>
          <label className='inline-label-small'>{hundred * 100} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>50 $</label>
          <input type="number" className='cash-input-small' value={fifty} onChange={(e) => setFifty(e.target.value)}
            onClick={() => setFifty("")}
            onFocus={() => setFifty("")}
          ></input>
          <label className='inline-label-small'>{fifty * 50} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>20 $</label>
          <input type="number" className='cash-input-small' value={twenty} onChange={(e) => setTwenty(e.target.value)}
            onClick={() => setTwenty("")}
            onFocus={() => setTwenty("")}
          ></input>
          <label className='inline-label-small'>{twenty * 20} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>10 $</label>
          <input type="number" className='cash-input-small' value={ten} onChange={(e) => setTen(e.target.value)}
            onClick={() => setTen("")}
            onFocus={() => setTen("")}
          ></input>
          <label className='inline-label-small'>{ten * 10} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>5 $</label>
          <input type="number" className='cash-input-small' value={five} onChange={(e) => setFive(e.target.value)}
            onClick={() => setFive("")}
            onFocus={() => setFive("")}
          ></input>
          <label className='inline-label-small'>{five * 5} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>2 $</label>
          <input type="number" className='cash-input-small' value={two} onChange={(e) => setTwo(e.target.value)}
            onClick={() => setTwo("")}
            onFocus={() => setTwo("")}
          ></input>
          <label className='inline-label-small'>{two * 2} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>1 $</label>
          <input type="number" className='cash-input-small' value={one} onChange={(e) => setOne(e.target.value)}
            onClick={() => setOne("")}
            onFocus={() => setOne("")}
          ></input>
          <label className='inline-label-small'>{one * 1} $</label>

        </div>

        <div className='inline'>
          <label className='inline-label-small'>.25 c</label>
          <input type="number" className='cash-input-small' value={quarter} onChange={(e) => setQuarter(e.target.value)}
            onClick={() => setQuarter("")}
            onFocus={() => setQuarter("")}
          ></input>
          <label className='inline-label-small'>{quarter * 0.25} $</label>

        </div>



      </div>}
  </div>
  )
}