
const ListaDePendientes=(props)=>{
    console.log(props)
    const eliminarTarea = () => {
        props.eliminarTareaDeLaLista(props.id)
    }

    return(
        <>
            <p>{props.unaTarea.descripcion}</p>
            <button onClick={eliminarTarea}>Eliminar</button>
        </>
    );

}
export default ListaDePendientes