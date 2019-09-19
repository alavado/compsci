import React from 'react';
import './Pescaditos.css'
import Pescadito from './Pescadito';

const Pescaditos = () => {
  return (
    <div id="pescaditos">
      <Pescadito comentario="Videojuegos" />
      <Pescadito comentario="Inteligencia artificial" />
      <Pescadito comentario="Ciencia de datos" />
      <Pescadito comentario="Aplicaciones web" />
      <Pescadito comentario="Procesamiento de imágenes" />
    </div>
  );
};

export default Pescaditos;