import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

const crearPosicionAleatoria = () => ({
  marginLeft: `${100 * Math.random()}vw`,
  marginTop: `${30 * Math.random()}vh`,
})

const Pescadito = () => {

  const [posicion, setPosicion] = useState(crearPosicionAleatoria())

  const moverPescadito = () => {
    let nuevaPosicion = crearPosicionAleatoria()
    nuevaPosicion.transform = nuevaPosicion.marginLeft < posicion.marginLeft ? 'rotateY(.5turn)' : 'rotateY(0turn)'
    setPosicion(nuevaPosicion)
    setTimeout(moverPescadito, 3000 + Math.random() * 2000)
  }

  useEffect(() => {
    moverPescadito()
  }, [])

  return (
    <div className="pescadito" style={posicion}>
      <FontAwesomeIcon icon={faFish} size={'4x'} />
    </div>
  );
};

export default Pescadito;