import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import '../styles/TareaFormulario.css'

export const TareaFormulario = (prosp) => {

  const [input, setInput] = useState();

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    console.log('Enviando formulario');

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false
    };
    prosp.onSubmit(tareaNueva);
  };

  return (
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
      
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button 
        className='tarea-boton'
        onClick={manejarEnvio}>
        Agrega tarea
      </button>
    </form>

  );
}