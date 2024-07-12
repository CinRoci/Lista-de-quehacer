import { useState } from 'react';
import ListaDePendientes from '../ListaDePendientes/ListaDePendientes';
import AgregarPendientes from '../Formulario/AgregarPendientes';


function App() {
 
  const [tareas, setTareas] = useState([]);
  
  const [nuevoPendiente,setnuevoPendiente]= useState("");
  
  const actualizarLista = (newPendiente)=>{
    setTareas([...tareas,newPendiente]);
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
    tareas.map((unaTarea) =>{
      return(<ListaDePendientes  key={unaTarea.id}
                                unaTarea = {unaTarea}
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
