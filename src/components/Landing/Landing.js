import React from 'react';
import './Landing.css'
import Pescaditos from './Pescaditos';
import MenuNavegacion from '../MenuNavegacion';

const Landing = () => {
  return (
    <React.Fragment>
      <MenuNavegacion />
      <div id="top-stuff">
        <div className="wave1"></div>
        <div className="wave1 overlay"></div>
        <Pescaditos />
        <div className="bottom-bg overlay"></div>
        <div className="contenedor-flex">
          <div id="contenedor-logo">
            <h1>Compsci</h1>
            <p>Apps para la mar de conocimientos de nuestro mundo</p>
            <button>Cotiza tu App</button>
          </div>
        </div>
        <div id="top-bg"></div>
        <div className="bottom-bg"></div>
      </div>
      <div id="bla">
        asdasd
      </div>
    </React.Fragment>
  );
};

export default Landing;