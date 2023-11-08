import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import MiComponente from './Components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import Item from './Components/Item/Item';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
  <div className='app-completa'>
    <BrowserRouter>
    <MiComponente/>
    
      <Routes>
        <Route path="/" element={<ItemListContainer/>}   />
        <Route path="/item/:id"    element={<ItemDetailContainer/>}      />
        <Route path="/leagueshop/home"    element={<ItemListContainer/>}      />
        <Route path="/leagueshop/category/armas/"    element={<ItemListContainer/>}      />
        <Route path="/leagueshop/category/espadas/"    element={<ItemListContainer/>}      />
        <Route path="/leagueshop/shop"   element={<ItemListContainer/>}      />
        

      </Routes>
       
        
     
    </BrowserRouter>
    
  </div>
 
  
    
    
  );
}

export default App;
