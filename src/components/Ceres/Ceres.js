import React from 'react';
import './Ceres.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';

const Ceres = () => {

  const hablar = () => {
    document.getElementById('habla-salmon-ceres').classList.add('habla-visible')
    console.log('hablar');
  }

  return (
    <div id="contenedor-ceres">
      <div id="contenedor-descarga-ceres">
        <div id="habla-salmon-ceres">
          Soy un salmón
        </div>
        <div onMouseOver={hablar}>
          <FontAwesomeIcon icon={faFish} size="6x" />
        </div>
        <a href="http://abarzuaingenieria.cl/simulador-ceres-bca.exe">Descargar Simulador Ceres BCA</a>
      </div>
    </div>
  );
};

export default Ceres;