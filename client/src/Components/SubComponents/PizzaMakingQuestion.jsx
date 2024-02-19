import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';

export default function PizzaMakingQuestion() {
  const {
    redLine,
    showRedLine,
    pizzaParties,
    showPizzaParties
  } = useContext(AppContext);

  return (
    <div className='pizza-making-question'>
      Special events?

      <div className='yes-no'>
        {!pizzaParties && (
          <>
            <button className='clear-all' onClick={showPizzaParties}>Yes</button>
            <button className={redLine ? 'clear-all red-line' : 'clear-all'} onClick={showRedLine}>No</button>
          </>
        )}
        {pizzaParties && <button className='clear-all' onClick={showPizzaParties}>No</button>}
      </div>
    </div>
  );
}
