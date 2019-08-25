import React from 'react';
import './Landing.css'

const Landing = () => {
  return (
    <React.Fragment>
      <div id="top-stuff">
        <div className="wave1"></div>
        <div className="wave1 overlay"></div>
        <div id="bottom-bg" className="overlay"></div>
        <div class="contenedor-flex">
          <div id="contenedor-logo">
            <h1>Compsci</h1>
            <p>Desarrollo de apps relacionadas con el mar</p>
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