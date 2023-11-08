import './NavBar.css';
import ItemList from '../ItemList/ItemList';
import CarritoC from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const MiComponente = () => {
    return (
        
        <div className='nav-container'>
            <div className='logo-titulo'>
                <Link to={'/leagueshop/home'}>
            <img className='foto-logo' src="https://www.zonadeleyendas.com/wp-content/uploads/2018/04/3382.jpg" alt="Logo Tienda" />
            </Link>
            </div>
            <div >
            <ul className='list-container'>
                
                <li> <Link to={'/leagueshop/category/armas'} className='navbar-button'>
                    <button className='category-button'>Armas</button>
                    </Link>
                    </li>

                <li>
                    <Link to={'/leagueshop/category/espadas'} className='navbar-button'>
                    <button className='category-button'>Espadas</button>
                    </Link>
                    </li>
                <li>
                    <Link to={'/leagueshop/shop'} className='navbar-button'>
                    <button className='category-button'>Tienda</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/leagushop/ayuda'} className='navbar-button'>
                    <button className='category-button'>Ayuda</button>
                    </Link>
                </li>
                <Link to={'/leagueshop/category/carrito'}>
                <CarritoC> </CarritoC>
                
                </Link>
            </ul>
            
            </div>
           
        </div>
        
        
    );
};
export default MiComponente;







  