function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className="product-style">
            <img className="small" src={product.image} alt={product.image} />
            <h3>{product.name}</h3>
            <div>&#x20B9; {product.price}</div>
            <div className="add-to-cart" onClick={() => onAdd(product)}>
                Add to Cart
            </div>
        </div>

    );
}

export default Product;