import './App.css';
import { Logo } from './components/Logo';
import { ListaDeTarea } from './components/ListaDeTarea';
function App() {
  return (
    <div className="App">
      <Logo />
      <div className='tarea-lista-principal'>
        <h1>
          Mis Tareas
        </h1>
       <ListaDeTarea />
      </div>
    </div>
  );
}

export default App;
