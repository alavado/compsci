import React from 'react'
import './QuienesSomos.css'

const QuienesSomos = () => {
  return (
    <div className="contenedor-quienes-somos">
      <h1>Quiénes somos</h1>
      <div className="contenedor-tarjetas-somos-esto">
        <div className="tarjeta-somos-esto">
          <h1>Alejandro</h1>
          <p>Entre los más ambiciosos objetivos de Alejandro se encuentra aprender a programar en Java, pero los pasajes son muy caros.</p>
        </div>
        <div className="tarjeta-somos-esto">
          <h1>Catalina</h1>
          <p>Especialista en Docker, Hadoop y Python, Catalina se vale de herramientas con logos de peligrosos animales para superar sus desafíos.</p>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos
