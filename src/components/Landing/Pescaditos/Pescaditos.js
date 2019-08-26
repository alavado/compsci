import React from 'react';
import './Pescaditos.css'
import Pescadito from './Pescadito';

const Pescaditos = () => {
  return (
    <div id="pescaditos">
      <Pescadito comentario="Apps web progresivas" />
      <Pescadito comentario="Inteligencia artificial" />
      <Pescadito comentario="Ciencia de datos" />
      <Pescadito comentario="Web browser APIs" />
      <Pescadito comentario="Edge computing" />
    </div>
  );
};

export default Pescaditos;