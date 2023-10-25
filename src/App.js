
import './App.css';
import MiComponente from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
  <div className='app-completa'>
    <MiComponente/>
    <ItemListContainer greeting="Hola soy un contenedor jaja salu2"/>
  </div>
 
  
    
    
  );
}

export default App;
