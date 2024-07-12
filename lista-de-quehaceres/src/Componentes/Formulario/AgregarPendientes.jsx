import { useState } from "react";


 const AgregarPendientes = (props) =>{
    const[descripcionTarea, setDescripcionTarea]=useState("");
   
    const enviarNuevaTarea=(e) => {
        e.preventDefault();
        const nuevoPendiente={
            id:Math.random(),
            descripcion:descripcionTarea

        }
        props.actualizarLista(nuevoPendiente);
        setDescripcionTarea("");

    }
  
    return(
        <>
        <form onSubmit={enviarNuevaTarea}>
            <input type="text" 
                    placeholder="Agregar tarea"
                    value={descripcionTarea}
                    onChange={(e)=> setDescripcionTarea(e.target.value)}></input>
            <input type="submit" placeholder="Agregar"></input>
        </form>
        </>
    );
 };
 export default AgregarPendientes