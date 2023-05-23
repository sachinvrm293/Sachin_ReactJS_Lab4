function Header(props) {
    return ( 
        <header className="block row center">
        <div>
            <a href="">
                <h1>Shopping Cart</h1>
            </a>
        </div>
        <div className="floatRight">
            <a href="">
                Cart
                {props.itemsCount ? <button className="badge">{props.itemsCount}</button> : ''}
            </a>
            {'  '}
            <a href="">
                Sign In
            </a>
        </div>
    </header>
    );
}

export default Header;