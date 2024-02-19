import React from 'react';

//Hooks

import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (

    <div className="app-container">
      <div className="rectangle">
        <img src="tips-final.jpg" alt="Logo" />
      </div>
      <div className="shift">
        <Link to='/am' className="am">AM</Link>
        <Link to='/pm' className="pm">PM</Link>
      </div>
      <div className="home-footer">
        <div className="footerp">Tips! by&nbsp;

        <a className="home-ext-link link-black" href="https://www.manucasanova.com/" rel="noreferrer noopener" target="_blank"> <strong>M. Casanova</strong></a>  &nbsp;
        </div>
      </div>
    </div>

  );
};

export default FrontPage;


