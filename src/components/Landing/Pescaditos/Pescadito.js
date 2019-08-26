import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

const Pescadito = () => {

  const [posicion, setPosicion] = useState({
    marginLeft: `${100 * Math.random()}vw`,
    marginTop: `${30 * Math.random()}vh`,
  })

  const moverPescadito = () => {
    let nuevaPosicion = {
      marginLeft: `${100 * Math.random()}vw`,
      marginTop: `${30 * Math.random()}vh`,
    }
    nuevaPosicion.transform = nuevaPosicion.marginLeft < posicion.marginLeft ? 'rotateY(.5turn)' : 'rotateY(0turn)'
    setPosicion(nuevaPosicion)
    setTimeout(moverPescadito, Math.random() * 2000)
  }

  useEffect(() => {
    moverPescadito()
  }, [])

  return (
    <div className="pescadito" style={posicion}>
      <FontAwesomeIcon icon={faFish} />
    </div>
  );
};

export default Pescadito;