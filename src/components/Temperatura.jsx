import React, {Fragment,useState} from 'react'

const Temperatura = () => {

  const [temperatura,setTemperatura] = useState(19)

  const Subir = () => {

    setTemperatura(temperatura + 1)
  }

  const Bajar = () => {

    setTemperatura(temperatura - 1)
  }

  return (
    <div className="container">
      <h2> La Temperatura es:{temperatura} </h2>
      <p>
        {
          temperatura >= 22 ? 'Hace Calor' : 'Hace Frio'
        }
      </p>
      <button className="btn btn-success btn-block" onClick={Subir}> Aumentar la Temperatura </button>
      <button className="btn btn-success btn-block" onClick={Bajar}> Reducir la temperatura </button>
    </div>
  );

}

export default Temperatura