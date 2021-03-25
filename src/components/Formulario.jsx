import React, {useState} from 'react';

const Formulario = () => {

  const [nombre,setNombre] = useState('');
  const [edad,setEdad] = useState('');

  const Validar = (event) => {
      event.preventDefault()
      console.log("Boton precionado")
      if(!nombre.trim())
      {
        console.log("El nombre esta vacio");
        return;
      }
      if(!edad.trim())
      {
        console.log("La edad esta vacia");
        return;
      }
  }
  return (
    <div className="container">
      <form onSubmit={Validar} className="form-group" > 
        <input 
          placeholder="Nombre" 
          className="form-control mb-3" 
          type="text"
          onChange={ (e)=>{setNombre(e.target.value)} }
        />
        <input 
          placeholder="Edad" 
          className="form-control mb-3" 
          type="text"
          onChange={ (e) => {setEdad(e.target.value)} }
        />
        <input 
          className="btn btn-info btn-block" 
          type="submit"
        />
      </form>
    </div>
  );

}

export default Formulario;