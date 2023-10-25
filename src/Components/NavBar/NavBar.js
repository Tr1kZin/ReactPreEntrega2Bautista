import './NavBar.css';
import CarritoC from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
const MiComponente = () => {
    return (
        
        <div className='nav-container'>
            <div className='logo-titulo'>
            <img className='foto-logo' src="https://www.zonadeleyendas.com/wp-content/uploads/2018/04/3382.jpg" alt="Logo Tienda" />
            
            </div>
            <div >
            <ul className='list-container'>
                
                <li><button className='category-button'>Armas</button></li>
                <li><button className='category-button'>Espadas</button></li>
                <li><button className='category-button'>Tienda</button></li>
                <li><button className='category-button'>Ayuda</button></li>
                <CarritoC></CarritoC>
            </ul>

            </div>
           
        </div>
    );
};
export default MiComponente;