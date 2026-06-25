import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';
import ErrorMessageInputField from "./ErrorMessageInputField";

export default function TotalCash({ cashSalesAM, isAM }) {
  const {
    // Color
    color,
    // Cash
    cash,
    cashSalesPM,
    receipts,
    setReceipts,
    float,
    setFloat,
    cashCount,
    cashCounted,
    setCashCounted,
    totalCash,
    netCashAccountedForAM,
    netCashAccountedForPM,
    setCashSalesAM,
    cashSalesPrintOut,
    setCashSalesPrintOut,
    // Info
    totalCashInfo,
    cashSalesAMInfo,
    showTotalCashInfo,
    showTotalHoursInfo,
    showCashSalesInfo,
    cashSalesInfo,
    cashSalesPMInfo,
    showCashSalesAMInfo,
    showCashSalesPMInfo,
    showCashSalesPrintOutInfo,
    cashSalesPrintOutInfo,
  } = useContext(AppContext);

  const handleCashCountChange = (e) => {
    setCashCounted(e.target.value);
  };

  return (
    <>
      {!cashCount && (
        <div className='inline'>
          <label className='inline-label highlight'>1. CASH COUNTED</label>
          <input type="number" className='money-input' value={cashCounted} onChange={handleCashCountChange} onClick={() => setCashCounted("")} onFocus={() => setCashCounted("")} />
        </div>
      )}

      {cashCount && (
        <div className='inline'>
          <label className='inline-label highlight'>1. CASH COUNTED</label>
          <div className='money-input'>{cash}</div>
        </div>
      )}

      <div className='inline'>
        <label className='inline-label highlight'>2. BILLS and RECEIPTS</label>
        <input type="number" className='money-input' value={receipts} onChange={(e) => setReceipts(e.target.value)} onClick={() => setReceipts("")} onFocus={() => setReceipts("")} />
      </div>

      <div className='inline'>
        <label className='inline-label' onClick={showTotalCashInfo}>Cash + Receipts or Notes<div className={color !== 'blue' ? "info" : "info-red"} onClick={showTotalHoursInfo}>i</div></label>
        <div className='money-input'>{!isNaN(totalCash.toFixed(2)) && totalCash.toFixed(2)}</div>
        {isNaN(totalCash.toFixed(2)) && <ErrorMessageInputField />}
      </div>

      {totalCashInfo && <div className='info-message'>Cash counted + receipts + other money taken from the till</div>}


      {isAM && <div className='inline'>
        <label className='inline-label highlight'>3. CASH SALES<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesInfo}>i</div></label>

        <input type="number" className='money-input' value={cashSalesAM} onChange={(e) => setCashSalesAM(e.target.value)}
          onClick={() => setCashSalesAM("")}
          onFocus={() => setCashSalesAM("")}
        ></input>
      </div>
      }

      {
        !isAM &&

        <>


          <div className='inline'>
            <label className='inline-label'>Cash sales AM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesAMInfo}>i</div></label>

            <input type="number" className='money-input' value={cashSalesAM} onChange={(e) => setCashSalesAM(e.target.value)}
              onClick={() => setCashSalesAM("")}
              onFocus={() => setCashSalesAM("")}
            ></input>
          </div>

          {cashSalesAMInfo && <div className='info-message'>Cash sales from the AM shift (Line 3)</div>}

          <div className='inline'>
            <label className='inline-label'>Cash sales Print Out<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPrintOutInfo}>i</div></label>

            <input type="number" className='money-input' value={cashSalesPrintOut} onChange={(e) => setCashSalesPrintOut(e.target.value)} onClick={() => setCashSalesPrintOut("")}
              onFocus={() => setCashSalesPrintOut("")}></input>
          </div>

          {cashSalesPrintOutInfo && <div className='info-message'>Total cash sales of the day (on Print Out)</div>}

          <div className='inline'>
            <label className='inline-label highlight'>3. CASH SALES PM<div className={color !== 'blue' ? "info" : "info-red"} onClick={showCashSalesPMInfo}>i</div></label>
            <div className='money-input'>{!isNaN(cashSalesPM) && cashSalesPM}</div>
            {isNaN(cashSalesPM)
              &&
              <ErrorMessageInputField />
            }
          </div>

          {cashSalesPMInfo && <div className='info-message'>Cash sales PM = Cash sales on print out - AM shift cash sales</div>}

        </>

      }


      {cashSalesInfo && <div className='info-message'>Touch Bistro AM printout</div>}


      <div className='inline'>
        <label className='inline-label highlight' >4. NET CASH ACCOUNTED FOR</label>

        {isAM ?         <div className='money-input'>{!isNaN(netCashAccountedForAM.toFixed(2)) && netCashAccountedForAM.toFixed(2)}</div> :          <div className='money-input'>{!isNaN(netCashAccountedForPM.toFixed(2)) && netCashAccountedForPM.toFixed(2)}</div>}




        {isNaN(totalCash.toFixed(2)) && <ErrorMessageInputField />}
      </div>

      <div className='inline'>
        <label className='inline-label highlight'>5. FLOAT</label>
        <input type="number" className='money-input' value={float} onChange={(e) => setFloat(e.target.value)} onClick={() => setFloat("")} onFocus={() => setFloat("")} />
      </div>
    </>
  );
}
