import { useState } from "react";
import Basket from "./Basket";
import Main from "./Main";
import Header from "./header";
import data from "./products";

function Home() {
    const products = data.products;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exitObject = cartItems.find(x => x.id === product.id);
        if (exitObject) {
            const udpatedCartItems = cartItems.map((x) => x.id === product.id ? { ...exitObject, qty: exitObject.qty + 1 } : x);
            setCartItems(udpatedCartItems); 
        } else { 
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }
    const onRemove = (product) => {
        const exitObject = cartItems.find(x => x.id === product.id);
        if (exitObject.qty === 1) {
            const udpatedCartItems = cartItems.filter(x => x.id != product.id);
            setCartItems(udpatedCartItems); 
        } else {
            const udpatedCartItems = cartItems.map((x) => x.id === product.id ? { ...exitObject, qty: exitObject.qty - 1 } : x);
            setCartItems(udpatedCartItems);
        }
    }
    return (
        <div className="App">
            <Header itemsCount = {cartItems.length} />
            <div className="row">
                <Main products={products} onAdd={onAdd} />
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            </div>
        </div>
    );
}

export default Home;