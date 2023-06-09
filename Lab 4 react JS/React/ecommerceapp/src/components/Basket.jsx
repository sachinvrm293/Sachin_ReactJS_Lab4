function Basket(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * .14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>

            {cartItems.length === 0 && <div> Cart is Empty!</div>}
            {cartItems.map(item => {
                return <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onRemove(item)} className="remove"> - </button>
                        <button onClick={() => onAdd(item)} className="add"> + </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty}  X  &#x20B9; {item.price.toFixed(2)}
                    </div>
                </div>
            })
            }
            {
                cartItems.length !== 0 && (
                    <>
                        <hr />
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-2 text-right"> &#x20B9; {itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-2 text-right"> &#x20B9; {taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-2 text-right"> &#x20B9; {shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2"><strong>Total Price</strong></div>
                            <div className="col-2 text-right">
                                <strong>&#x20B9; {totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <div><button className="add-to-cart" onClick={() => alert("Thanks for shopping, Implement Checkout!")}>Checkout</button></div>
                    </>
                )
            }

        </aside>
    );
}

export default Basket;