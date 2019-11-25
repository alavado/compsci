import React from 'react';
import './Ceres.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';

const Ceres = () => {

  const hablar = hablo => {
    document.getElementById('habla-salmon-ceres').style.opacity = hablo ? 1 : 0
  }

  return (
    <div id="contenedor-ceres">
      <div id="contenedor-descarga-ceres">
        <div id="habla-salmon-ceres">
          Soy un salmón
        </div>
        <div onMouseOver={() => hablar(true)} onMouseOut={() => hablar(false)} >
          <FontAwesomeIcon icon={faFish} size="6x" />
        </div>
        <a href="http://abarzuaingenieria.cl/simulador-ceres-bca.exe">Descargar Simulador CERES BCA - IMVIXA</a>
        <a href="https://docs.google.com/document/d/1C-1nUW4ET-PAAAn90KmngnbF0Z5yKcjhzgCHjpO32zY/export?format=pdf">Descargar manual de uso</a>
      </div>
    </div>
  );
};

export default Ceres;