import React, { useState } from 'react';


function DarkLightToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <input type="checkbox" id="toggle" className="toggle-input" onChange={handleToggle} checked={isDarkMode} />
      <label htmlFor="toggle" className="toggle-label"></label>
      {/* <span className="toggle-text">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span> */}
    </div>
  );
}

export default DarkLightToggle;
