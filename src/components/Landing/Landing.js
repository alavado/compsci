import React from 'react';
import './Landing.css'
import Pescaditos from './Pescaditos';

const Landing = () => {
  return (
    <React.Fragment>
      <div id="top-stuff">
        <div className="wave1"></div>
        <div className="wave1 overlay"></div>
        <Pescaditos />
        <div id="bottom-bg" className="overlay"></div>
        <div className="contenedor-flex">
          <div id="contenedor-logo">
            <h1>Compsci</h1>
            <p>Apps para la mar de conocimientos de nuestro mundo</p>
            <button>Cotiza tu App</button>
          </div>
        </div>
        <div id="top-bg"></div>
        <div id="bottom-bg"></div>
      </div>
      <div id="bla">
        asdasd
      </div>
    </React.Fragment>
  );
};

export default Landing;