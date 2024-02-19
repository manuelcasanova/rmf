import React, { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';
import ErrorMessageInputField from "./ErrorMessageInputField";

const PizzaParties = ({ isAM }) => {
  const {
    // Color
    color,
    // Tips
    pizzaTips,
    sundaysPizzaTip,
    tipsAfterPizzaParty,
    tipsAfterPizzaPartyPM,
    // Party numbers
    pizzaAdults,
    setPizzaAdults,
    cocktailAdults,
    setCocktailAdults,
    pizzaChildren,
    setPizzaChildren,
    fieldTrip,
    setFieldTrip,
    // Money
    pizzaParties,
    cashSalesPM,
    // Server Hours
    sundaysServerHours,
    setSundaysServerHours,
    // Information
    supportServerInfo,
    sundaysInfo,
    showSundaysInfo,
  } = useContext(AppContext);

  return (
    <section className={pizzaParties ? '' : 'pizza'}>
      <div className='inline'>
        <label className='inline-label'>Special event Menu#1</label>
        <input 
          type="number" 
          className='pizza-input' 
          value={pizzaAdults} 
          onChange={(e) => setPizzaAdults(e.target.value)} 
          onClick={() => setPizzaAdults("")}
          onFocus={() => setPizzaAdults("")} 
        />
      </div>

      <div className='inline'>
        <label className='inline-label'>Special event Menu#2</label>
        <input 
          type="number" 
          className='pizza-input' 
          value={cocktailAdults} 
          onChange={(e) => setCocktailAdults(e.target.value)} 
          onClick={() => setCocktailAdults("")}
          onFocus={() => setCocktailAdults("")} 
        />
      </div>

      <div className='inline'>
        <label className='inline-label'>Special event Menu#3</label>
        <input 
          type="number" 
          className='pizza-input' 
          value={pizzaChildren} 
          onChange={(e) => setPizzaChildren(e.target.value)} 
          onClick={() => setPizzaChildren("")}
          onFocus={() => setPizzaChildren("")} 
        />
      </div>

      <div className='inline'>
        <label className='inline-label'>Special event Menu#4</label>
        <input 
          type="number" 
          className='pizza-input' 
          value={fieldTrip} 
          onChange={(e) => setFieldTrip(e.target.value)} 
          onClick={() => setFieldTrip("")}
          onFocus={() => setFieldTrip("")} 
        />
      </div>

      {cashSalesPM > 0 &&
        <div className='inline'>
          <label className='inline-label'>Special server support
            <div className={color !== 'blue' ? "info" : "info-red"} onClick={showSundaysInfo}>i</div>
          </label>
          <input 
            type="number" 
            className='pizza-input' 
            value={sundaysServerHours} 
            onChange={(e) => setSundaysServerHours(e.target.value)} 
            onClick={() => setSundaysServerHours("")}
            onFocus={() => setSundaysServerHours("")} 
          />
        </div>
      }

      {sundaysInfo && <div className='info-message'>Special server support, such as staff in training, receive {sundaysPizzaTip} $ per hour worked</div>}

      <div className='inline'>
        <label className='inline-label'>Special events total tips</label>
        <div className='pizza-input'>
          {!isNaN(pizzaTips) && pizzaTips.toFixed(2)}
        </div>
        {isNaN(pizzaTips) && <ErrorMessageInputField />}
      </div>

      {pizzaTips !== 0 && supportServerInfo &&
        <div className='error-message'>Do not forget that the special events servers may have as well work as support or servers over the shift. Tip accordingly.</div>
      }

      <div className='inline'>
        <label className='inline-label'>{isAM ? 'AM' : 'PM'} Tips after special events</label>
        <div className='tips-input'>
          {!isNaN(pizzaTips) && (isAM ? tipsAfterPizzaParty : tipsAfterPizzaPartyPM)}
        </div>
        {isNaN(pizzaTips) && <ErrorMessageInputField />}
      </div>
    </section>
  );
}

export default PizzaParties;
