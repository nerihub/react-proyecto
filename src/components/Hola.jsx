import React,{Fragment} from 'react';

function Hola() {
  let saludo = 'Hola Que tal con JSX'
  return (
      <Fragment>
        <h1>Primer Componente Hola {saludo}</h1>
        <p>Segundo Parrafo</p>
      </Fragment>
  );
}

export default Hola;