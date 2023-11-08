
import './styles.css'
import { useState, useEffect  } from "react"
import ItemDetail from "../../Components/ItemDetail/ItemDetail"

const itemSelectedId = '1';






const ItemDetailContainer = () => {
    const [itemSelected, setItemSelected] = useState(null);
    const fetchProduct = () =>{
        fetch(`https://fakestoreapi.com/products/${itemSelectedId}`)
            .then((res)  => res.json())
            .then((producto) => setItemSelected(producto))
            
    }

    useEffect(() => {
        fetchProduct();
    }, [])


    return(
       <div>
            {itemSelectedId &&(
                <div className="item-detail-container">
                    <ItemDetail  itemSelected ={itemSelected}/>
                    </div>
            )}
       </div>
            

       
    );
};
export default ItemDetailContainer