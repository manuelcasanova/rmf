import React from 'react';

//Hooks

import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (

        <div className="app-container">
          <div className="rectangle"></div>
          <div className="shift">
            <Link to='/am' className="am">AM</Link>
            <Link to='/pm' className="pm">PM</Link>
          </div>
          <div className="by">
            <img src="rmf.png" alt="Logo" />
          </div>
        </div>

  );
};

export default FrontPage;


