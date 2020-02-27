import React, { useState, useEffect } from 'react';
import './Cotizador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes as IconoCerrar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Cotizador = () => {

  const [cotizar, setCotizar] = useState(false)
  const [pregunta, setPregunta] = useState(0)
  const [total, setTotal] = useState(0)
  const [valorUF, setValorUF] = useState(28350)

  const preguntas = [
    {
      enunciado: '¿Dónde imaginas tu proyecto?',
      alternativas: [
        {
          enunciado: 'En una aplicación para celular',
          valor: 120
        },
        {
          enunciado: 'En un programa en el computador',
          valor: 100
        },
        {
          enunciado: 'En una página en Internet',
          valor: 80
        },
        {
          enunciado: 'La opción más simple',
          valor: 80
        }
      ]
    },
    {
      enunciado: '¿En cuánto tiempo te gustaría tenerlo listo?',
      alternativas: [
        {
          enunciado: 'En 1 mes',
          valor: 100
        },
        {
          enunciado: 'En 3 meses',
          valor: 50
        },
        {
          enunciado: 'En 6 meses',
          valor: 30
        },
        {
          enunciado: 'No tengo apuro',
          valor: 0
        }
      ]
    },
    {
      enunciado: '¿A quiénes imaginas usando tu proyecto?',
      alternativas: [
        {
          enunciado: 'A todo el mundo',
          valor: 100
        },
        {
          enunciado: 'A las personas de mi organización',
          valor: 60
        },
        {
          enunciado: 'A un par de personas que conozco',
          valor: 30
        },
        {
          enunciado: 'Solo a mí',
          valor: 0
        }
      ]
    }
  ]

  useEffect(() => {
    axios.get('https://mindicador.cl/api')
      .then(res => setValorUF(res.data.uf.valor))
  }, [])
  
  return (
    <div id="cotizador">
      <div
        id="interfaz-cotizador"
        aria-label="cotizar"
        className={cotizar ? 'modo-formulario' : 'modo-boton'}
      >
        <h1 onClick={() => setCotizar(true)}>Cotiza tu proyecto</h1>
        <div id="contenedor-cotizacion">
          <div
            onClick={() => {
              setCotizar(false)
              setPregunta(0)
              setTotal(0)
            }}
            id="boton-cerrar-cotizador"
          >
            <FontAwesomeIcon
              icon={IconoCerrar}
              color={'#FFFFFF'}
            />
          </div>
          {cotizar &&
            (pregunta < preguntas.length ?
            <div className="contenedor-formulario-cotizador">
              <h2>
                <div>
                  Pregunta {pregunta + 1} / {preguntas.length}
                </div>
                {preguntas[pregunta].enunciado}
              </h2>
              <div className="botones-cotizador" key={`pregunta-${pregunta}`}>
                {preguntas[pregunta].alternativas.map((a, i) => (
                  <button
                    key={`boton-alternativa-${i}`}
                    onClick={() => {
                      setTotal(total + a.valor)
                      setPregunta(pregunta + 1)
                    }}
                    style={{ animationDelay: `${.75 + i * .15}s` }}
                  >
                    {a.enunciado}
                  </button>
                ))}
              </div>
            </div>
            :
            <div className="resultado-cotizacion">
              <p>Por tu proyecto te cobraríamos aproximadamente</p>
              <h2>{total} UF</h2>
              <h6>(actualmente esto equivale a ${Math.round(total * valorUF).toLocaleString('de-DE')})</h6>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Cotizador;