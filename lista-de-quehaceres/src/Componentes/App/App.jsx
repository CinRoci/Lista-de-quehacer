import { useState } from 'react';
import ListaDePendientes from '../Lista de pendientes/listadependientes';
import AgregarPendientes from '../Formulario/AgregarPendientes';


function App() {
  const tareasPendientes=[
    {
      tarea:"Lavar la ropa",
      id:1
    },
    {
      tarea:"Cortar el Cesped",
      id:2
    },
    {
      tarea:"Limpiar el Deposito",
      id:3
    }];
  const [tareas, setTareas] = useState([tareasPendientes]);
  
  const [nuevoPendiente,setnuevoPendiente]= useState("");
  
  const actualizarLista = ()=>{
    setnuevoPendiente([...tareas,nuevoPendiente]);
}

const  eliminarTareaDeLaLista =(id) =>{
  const listaTemporal=[...tareas];
  for ( let i = 0; i< listaTemporal.length; i ++){
    if (listaTemporal[i].id === id){
      listaTemporal.splice(i, 1);
    }
  }
setTareas(listaTemporal);

}
    return (
    <>
    <h1>Lista de Deberes</h1>
    {
    tareas.map((porHacer) =>{
      return(<ListaDePendientes tareas= {porHacer.tareas}
                                eliminarTareaDeLaLista={eliminarTareaDeLaLista}/>)
    })
    }

    <div>
      <AgregarPendientes actualizarLista={actualizarLista}/>
    </div>
    </>
  )
}

export default App
