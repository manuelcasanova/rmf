//Hooks

import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';

//Components

import ErrorMessageInputField from "./ErrorMessageInputField";

export default function PizzaParties() {

  const {

    // Color

    color,

    //Tips 

    pizzaTips, sundaysPizzaTip, tipsAfterPizzaParty,

    // Party numbers

    pizzaAdults, setPizzaAdults,
    cocktailAdults, setCocktailAdults,
    pizzaChildren, setPizzaChildren,
    fieldTrip, setFieldTrip,

    // Money

    pizzaParties,
    cashSalesPM,

    // Server Hours 

    sundaysServerHours, setSundaysServerHours,

    // Information

    supportServerInfo, sundaysInfo, showSundaysInfo,

  } = useContext(AppContext);


  return (

    <section className={pizzaParties ? '' : 'pizza'}>

      <div className='inline'>
        <label className='inline-label'>Pizza party adults</label>
        <input type="number" className='pizza-input' value={pizzaAdults} onChange={(e) => setPizzaAdults(e.target.value)} onClick={() => setPizzaAdults("")}
          onFocus={() => setPizzaAdults("")}></input>
      </div>

      <div className='inline'>
        <label className='inline-label'>Cocktail making adults</label>
        <input type="number" className='pizza-input' value={cocktailAdults} onChange={(e) => setCocktailAdults(e.target.value)} onClick={() => setCocktailAdults("")}
          onFocus={() => setCocktailAdults("")}></input>
      </div>

      <div className='inline'>
        <label className='inline-label'>Pizza party children</label>
        <input type="number" className='pizza-input' value={pizzaChildren} onChange={(e) => setPizzaChildren(e.target.value)} onClick={() => setPizzaChildren("")}
          onFocus={() => setPizzaChildren("")}></input>
      </div>

      <div className='inline'>
        <label className='inline-label'>Field Trip</label>
        <input type="number" className='pizza-input' value={fieldTrip} onChange={(e) => setFieldTrip(e.target.value)} onClick={() => setFieldTrip("")}
          onFocus={() => setFieldTrip("")}></input>
      </div>

      {cashSalesPM > 0 &&
        <div className='inline'>
          <label className='inline-label'>Sunday's pizza making server hours <div className={color !== 'blue' ? "info" : "info-red"} onClick={showSundaysInfo}>i</div></label>
          <input type="number" className='pizza-input' value={sundaysServerHours} onChange={(e) => setSundaysServerHours(e.target.value)} onClick={() => setSundaysServerHours("")}
            onFocus={() => setSundaysServerHours("")}></input>
        </div>
      }

      {sundaysInfo && <div className='info-message'>Sunday's pizza maker gets {sundaysPizzaTip} $ per hour worked</div>}

      <div className='inline'>
        <label className='inline-label'>Pizza/Cocktail making tips</label>
        <div className='pizza-input'>{!isNaN(pizzaTips) && pizzaTips.toFixed(2)}</div>
        {isNaN(pizzaTips)
          &&
          <ErrorMessageInputField />
        }
      </div>



      {pizzaTips !== 0 && supportServerInfo &&
        <div className='error-message'>Do not forget that the pizza making servers may have as well work as support over the shift. Tip accordingly.</div>
      }


      <div className='inline'>
        <label className='inline-label'>Tips after Pizza party</label>
        <div className='tips-input'>{!isNaN(pizzaTips) && tipsAfterPizzaParty}</div>
        {isNaN(pizzaTips)
          &&
          <ErrorMessageInputField />
        }
      </div>

    </section>
  )

}