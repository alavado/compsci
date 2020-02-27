import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKiwiBird, faDove, faFeather } from '@fortawesome/free-solid-svg-icons';
import './QueHacemos.css'

const QueHacemos = () => {
  return (
    <div className="contenedor-que-hacemos">
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
          Dirigimos nuestro ingenio y buenos deseos a intentar presionar
          las teclas adecuadas tan rápido como sea posible.
        </p>
      </div>
      <div className="tarjeta-hacemos-esto">
        <FontAwesomeIcon icon={faDove} size="3x" />
        <h1>Qué dicen nuestros clientes</h1>
        <p>
          Nuestros clientes dicen muchas cosas, como cualquier
          persona adulta saludable.
        </p>
      </div>
    </div>
  )
}

export default QueHacemos
