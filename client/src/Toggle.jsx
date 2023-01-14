import { useState } from "react";

export default function Toggle (toggle, setToggle) {



  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  return (
    <label className="switch">
    <input type="checkbox" onChange={handleToggle} />
    <span className="slider round"></span>
  </label>
  )
}