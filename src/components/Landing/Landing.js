import React from 'react';
import './Landing.css'
import Pescaditos from './Pescaditos';
import Cotizador from '../Cotizador';
// import MenuNavegacion from '../MenuNavegacion';

const Landing = () => {
  return (
    <React.Fragment>
      {/* <MenuNavegacion /> */}
      <div id="top-stuff">
        <div className="wave1"></div>
        <div className="wave1 overlay"></div>
        <Pescaditos />
        <div className="bottom-bg overlay"></div>
        <div className="contenedor-flex">
          <div id="contenedor-logo">
            <h1>Compsci</h1>
            <p>Computación para la mar de conocimientos de nuestro mundo</p>
            <Cotizador />
          </div>
        </div>
        <div id="top-bg"></div>
        <div className="bottom-bg"></div>
      </div>
    </React.Fragment>
  );
};

export default Landing;