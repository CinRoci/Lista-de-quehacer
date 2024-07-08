import { useState,useEffect } from 'react';
import './App.css';
import AgregarPendientes from '../Formulario/AgregarPendientes';
import ListaDePendientes from '../Lista de pendientes/ListaDePendientes';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect (()=>
    {console.log(tareas);
    },[tareas]);

  return (
    <>
    <div>
      <ListaDePendientes/>
    </div>
    <div>
      <AgregarPendientes setTareas={setTareas} tareas={tareas}/>
    </div>
    </>
  )
}

export default App
