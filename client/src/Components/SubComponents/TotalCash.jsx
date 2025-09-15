import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';
import ErrorMessageInputField from "./ErrorMessageInputField";

export default function TotalCash() {
  const {
    // Color
    color,
    // Cash
    cash,
    receipts,
    setReceipts,
    float,
    setFloat,
    cashCount,
    cashCounted,
    setCashCounted,
    totalCash,
    // Info
    totalCashInfo,
    showTotalCashInfo,
    showTotalHoursInfo
  } = useContext(AppContext);

  const handleCashCountChange = (e) => {
    setCashCounted(e.target.value);
  };

  return (
    <>
      {!cashCount && (
        <div className='inline'>
          <label className='inline-label highlight'>CASH COUNTED</label>
          <input type="number" className='money-input' value={cashCounted} onChange={handleCashCountChange} onClick={() => setCashCounted("")} onFocus={() => setCashCounted("")} />
        </div>
      )}

      {cashCount && (
        <div className='inline'>
          <label className='inline-label highlight'>CASH COUNTED</label>
          <div className='money-input'>{cash}</div>
        </div>
      )}

      <div className='inline'>
        <label className='inline-label highlight'>RECEIPTS</label>
        <input type="number" className='money-input' value={receipts} onChange={(e) => setReceipts(e.target.value)} onClick={() => setReceipts("")} onFocus={() => setReceipts("")} />
      </div>

      <div className='inline'>
        <label className='inline-label highlight' onClick={showTotalCashInfo}>TOTAL CASH <div className={color !== 'blue' ? "info" : "info-red"} onClick={showTotalHoursInfo}>i</div></label>
        <div className='money-input'>{!isNaN(totalCash.toFixed(2)) && totalCash.toFixed(2)}</div>

        {isNaN(totalCash.toFixed(2)) && <ErrorMessageInputField />}
      </div>

      {totalCashInfo && <div className='info-message'>Cash counted + receipts</div>}

      <div className='inline'>
        <label className='inline-label highlight'>FLOAT</label>
        <input type="number" className='money-input' value={float} onChange={(e) => setFloat(e.target.value)} onClick={() => setFloat("")} onFocus={() => setFloat("")} />
      </div>
    </>
  );
}
