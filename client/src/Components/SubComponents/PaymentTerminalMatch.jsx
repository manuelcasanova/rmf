import React, { useState } from 'react';

export default function PayTerminalMatch() {
  const [terminal, setTerminal] = useState(false);

  const showTerminal = (e) => {
    e.preventDefault();
    setTerminal(prev => !prev);
    resetValues();
  };

  const resetValues = () => {
    setAmex1(0);
    setAmex2(0);
    setVisa1(0);
    setVisa2(0);
    setMasterCard1(0);
    setMasterCard2(0);
    setDebit1(0);
    setDebit2(0);
  };

  const [amex1, setAmex1] = useState(0);
  const [amex2, setAmex2] = useState(0);
  const totalAmex = parseFloat(amex1) + parseFloat(amex2);

  const [visa1, setVisa1] = useState(0);
  const [visa2, setVisa2] = useState(0);
  const totalVisa = parseFloat(visa1) + parseFloat(visa2);

  const [masterCard1, setMasterCard1] = useState(0);
  const [masterCard2, setMasterCard2] = useState(0);
  const totalMasterCard = parseFloat(masterCard1) + parseFloat(masterCard2);

  const [debit1, setDebit1] = useState(0);
  const [debit2, setDebit2] = useState(0);
  const totalDebit = parseFloat(debit1) + parseFloat(debit2);

  return (
    <div className='pizza-making-question'>
      <div className='yes-no'>
        {!terminal && <button className='clear-all' onClick={showTerminal}>Payment Terminal Match</button>}
      </div>
      {terminal && <button className='clear-all-x' onClick={showTerminal}>x</button>}
      {terminal && (
        <>
          <CardInput label1='Amex 1' label2='Amex 2' value1={amex1} value2={amex2} setValue1={setAmex1} setValue2={setAmex2} total={isNaN(totalAmex) ? "Avoid empty values" : totalAmex}totalLabel='Total Amex:' />
          <CardInput label1='Visa 1' label2='Visa 2' value1={visa1} value2={visa2} setValue1={setVisa1} setValue2={setVisa2} total={isNaN(totalVisa) ? "Avoid empty values" : totalVisa} totalLabel='Total Visa:' />
          <CardInput label1='MasterCard 1' label2='MasterCard 2' value1={masterCard1} value2={masterCard2} setValue1={setMasterCard1} setValue2={setMasterCard2} total={isNaN(totalMasterCard) ? "Avoid empty values" : totalMasterCard} totalLabel='Total MC:' />
          <CardInput label1='Debit 1' label2='Debit 2' value1={debit1} value2={debit2} setValue1={setDebit1} setValue2={setDebit2} total={isNaN(totalDebit) ? "Avoid empty values" : totalDebit} totalLabel='Total Debit:' />
        </>
      )}
    </div>
  );
}

function CardInput({ label1, label2, value1, value2, setValue1, setValue2, total, totalLabel }) {
  return (
    <div className='card'>
      <div className='card1'>
        <label className='inline-label-small'>{label1}</label>
        <input type='number' className='cash-input-small' value={value1} onChange={(e) => setValue1(e.target.value)} onClick={() => setValue1('')} onFocus={() => setValue1('')} />
      </div>
      <div className='card2'>
        <label className='inline-label-small'>{label2}</label>
        <input type='number' className='cash-input-small' value={value2} onChange={(e) => setValue2(e.target.value)} onClick={() => setValue2('')} onFocus={() => setValue2('')} />
      </div>
      <div className='cardtotal'>
        <label className='inline-label-small'>{totalLabel}</label>
        <label className='total-card'>{total}</label>
      </div>
    </div>
  );
}



  