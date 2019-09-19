import React, { useState } from 'react';
import './Cotizador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes as IconoCerrar } from '@fortawesome/free-solid-svg-icons'

const Cotizador = () => {

  const [cotizar, setCotizar] = useState(false)
  
  return (
    <div id="cotizador">
      <div
        id="interfaz-cotizador"
        aria-label="cotizar"
        className={cotizar ? 'modo-formulario' : 'modo-boton'}
      >
        <h1 onClick={() => setCotizar(true)}>Cotiza tu proyecto</h1>
        <div id="contenedor-cotizacion">
          <div onClick={() => setCotizar(false)} id="boton-cerrar-cotizador">
            <FontAwesomeIcon
              icon={IconoCerrar}
              color={'#FFFFFF'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;