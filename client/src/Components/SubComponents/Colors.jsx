import React, { useState } from 'react';

function DarkLightToggle({ color, setColor }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColors = () => {
    setIsDarkMode(!isDarkMode);
    setColor(isDarkMode ? "black" : "white");
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <input type="checkbox" id="toggle" className="toggle-input" onChange={toggleColors} checked={isDarkMode} />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
}

export default function Colors({ color, setColor }) {
  return (
    <div>
      <DarkLightToggle color={color} setColor={setColor} />
    </div>
  );
}
