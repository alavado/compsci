import React from 'react';
import './Pescaditos.css'
import Pescadito from './Pescadito';

const Pescaditos = () => {
  return (
    <div id="pescaditos">
      <Pescadito comentario="aplicaciones web progresivas" />
      <Pescadito comentario="inteligencia artificial" />
      <Pescadito comentario="ciencia de datos" />
      <Pescadito comentario="internet de las cosas" />
      <Pescadito comentario="aplicaciones nativas" />
    </div>
  );
};

export default Pescaditos;