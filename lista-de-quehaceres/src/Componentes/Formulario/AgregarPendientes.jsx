import { useState } from "react";

 const AgregarPendientes = ({setTareas, tareas}) =>{
    const [descripcion, seteDescripcion]= useState("")
    const tareaActual = (descripcion) =>{
        const nuevaTarea = {
            id: Math.random(),
            descripcion:descripcion,
            completado:false,

        }
        setTareas ([...tareas, nuevaTarea]);
    };
    const handleChange=(e)=>{
       seteDescripcion(e.target.value);
    }
   const handleSubmit = (e) => {
    e.preventDefault();
        if(descripcion.trim()){
            tareaActual(descripcion);
            seteDescripcion("");

        }

   }

 
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Agrega tarea" value={descripcion} onChange={(e)=>handleChange(e)}></input>
            <input type="submit" placeholder="Agregar"></input>
        </form>
        </>
    );
 };
 export default AgregarPendientes