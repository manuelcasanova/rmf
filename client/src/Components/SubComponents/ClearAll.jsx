//Hooks

import { useContext } from "react";
import { AppContext } from '../../contexts/AppContext';

export default function ClearAll() {

  const {

    // Clear fields

    clearAll

  } = useContext(AppContext);


  return (
    <div className='clear-all-div'>
    <button className="clear-all" onClick={clearAll}>Clear all</button>
  </div>
  )

}