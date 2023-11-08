import MiComponente from '../../Components/NavBar/NavBar';
import {useState, useEffect} from 'react';
import ItemList from "../../Components/ItemList/ItemList";
const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const fetchProducts = () =>{
         fetch('https://fakestoreapi.com/products')
            .then((response)=> response.json())
            .then((data) => setProductList(data))
            .catch((err) => console.log(err))
            
            
    };
    useEffect(() => {fetchProducts()}, []);
    return(
       
        <div> 
            
            <ItemList productList={productList}/>
        </div>
    )
}
export default ItemListContainer