import React from "react";
import '../styles/Tarea.css';
import { AiTwotoneDelete } from "react-icons/ai";

export const Tarea = ({ id, texto, completado, completarTarea, eliminarTarea }) =>{
  return (
    <div className={completado ? 'tarea-contenedor completado' : 'tarea-contenedor'  }>
      <div className='tarea-text'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)} >
        <AiTwotoneDelete title='bote de eliminar' className='tarea-icono'/>
      </div>
    </div>
  );
}
