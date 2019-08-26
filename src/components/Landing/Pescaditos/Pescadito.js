import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

const crearPosicionAleatoria = () => ({
  marginLeft: `${100 * Math.random()}vw`,
  marginTop: `${20 * Math.random()}vh`,
})

const Pescadito = ({comentario}) => {

  const [posicion, setPosicion] = useState(crearPosicionAleatoria())
  const [direccion, setDireccion] = useState('der')

  const moverPescadito = () => {
    let nuevaPosicion = crearPosicionAleatoria()
    setDireccion(nuevaPosicion.marginLeft < posicion.marginLeft ? 'izq' : 'der')
    setPosicion(nuevaPosicion)
    setTimeout(moverPescadito, 3000 + Math.random() * 2000)
  }

  useEffect(() => {
    moverPescadito()
  }, [])

  return (
    <div className="pescadito" style={posicion}>
      <div className="comentario-pescadito">
        <p>{ comentario }</p>
      </div>
      <FontAwesomeIcon
        icon={faFish}
        size={'4x'}
        style={{transform: `rotateY(${direccion === 'der' ? '0turn' : '.5turn'})`}}
      />
    </div>
  );
};

export default Pescadito;