import { useState } from "react";


 const AgregarPendientes = (props) =>{
    const[agregarTarea, setAgregarTarea]=useState("");
   
    const enviarNuevaTarea=(e) => {
        e.preventDefault();
        const nuevoPendiente={
            tarea
        }
        props.actualizarLista(nuevoPendiente);
        setAgregarTarea("");

    }
  
    return(
        <>
        <form onSubmit={enviarNuevaTarea}>
            <input type="text" 
                    placeholder="Agregar tarea"
                    value={agregarTarea}
                    onChange={(e)=> setAgregarTarea (e.target.value)}></input>
            <button onClick={actualizarLista}>Agregar</button>
        </form>
        </>
    );
 };
 export default AgregarPendientes