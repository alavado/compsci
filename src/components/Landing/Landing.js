import React from 'react';
import './Landing.css'
import Pescaditos from './Pescaditos';
import Cotizador from '../Cotizador';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faKiwiBird, faDove, faCrow, faFeather } from '@fortawesome/free-solid-svg-icons';
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
        <div className="contenedor-flex contenedor-que-hacemos" style={{ '--posicion': 1 }}>
          <div className="tarjeta-hacemos-esto">
            <FontAwesomeIcon icon={faKiwiBird} size="3x" />
            <h1>Qué hacemos</h1>
            <p>
              Presionamos cientos de miles de teclas durante días,
              buscando la secuencia que mejor permita al computador hacer algo nuevo.
            </p>
          </div>
          <div className="tarjeta-hacemos-esto">
            <FontAwesomeIcon icon={faFeather} size="3x" />
            <h1>Cómo lo hacemos</h1>
            <p>
              Utilizamos nuestro ingenio para intentar presionar
              las teclas apropiadas tan rápido como sea posible.
            </p>
          </div>
          <div className="tarjeta-hacemos-esto">
            <FontAwesomeIcon icon={faDove} size="3x" />
            <h1>Qué dicen nuestros clientes</h1>
            <p>
              Nuestros clientes dicen muchas cosas, como cualquier
              persona saludable. Sin embargo, siempre es posible que
              estén todos callados.
            </p>
          </div>
        </div>
        <div id="top-bg"></div>
        <div className="bottom-bg"></div>
      </div>
    </React.Fragment>
  );
};

export default Landing;