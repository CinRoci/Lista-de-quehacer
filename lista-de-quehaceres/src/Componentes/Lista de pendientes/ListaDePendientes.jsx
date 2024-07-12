
const ListaDePendientes=(props)=>{
    const eliminarTarea = () => {
        props.eliminarTareaDeLaLista(props.id)
    }

    return(
        <>
            <p>{props.tareas}</p>
            <button onClick={eliminarTarea}>Eliminar</button>
        </>
    );

}
export default ListaDePendientes