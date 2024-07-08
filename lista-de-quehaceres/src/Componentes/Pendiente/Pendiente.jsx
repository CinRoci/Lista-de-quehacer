import AgregarPendientes from "../Formulario/AgregarPendientes";
const Pendiente=({tareas})=>{
    return(
        <>
        <input type="checbox" checked={tareas.completado}></input>
        <span>{tareas.descripcion}</span>
        </>
    );

}
export default Pendiente