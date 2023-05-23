import Product from "./product";

function Main(props) {
    const { products, onAdd } = props;

    return (
        <main className="block col-2">
            <h2>Products</h2>
            <hr />
            <div className="row">
                {products.map(product => <Product key={product.id} product={product} onAdd={onAdd} />)}
            </div>
        </main>
    );
}

export default Main;