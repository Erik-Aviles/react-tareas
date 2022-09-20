import React, { useState} from "react";
import { TareaFormulario } from "./TareaFormulario";
import { Tarea } from "./Tarea";
import '../styles/ListaDeTarea.css';

export const ListaDeTarea = () => {

  const [tareas, SetTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto.trim();
      const tareaActualizadas = [tarea, ...tareas];
      SetTareas(tareaActualizadas)
    }
  };

  const eliminarTarea = id =>{
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
    SetTareas(tareaActualizadas);
  };

  const tareaCompletada = id => {
    const tareaActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completado = !tarea.completado;
      }
      return tarea;
    });
    SetTareas(tareaActualizadas);
  };

  return (
    <>
      <TareaFormulario 
        onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completado={tarea.completado}
              completarTarea={tareaCompletada}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}