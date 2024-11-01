function Basket(props) { 
    const {
        quantity = 0,
        handleBasketShow = Function.prototype,
    } = props;
    return (
        <div
            className="basket #9fa8da indigo lighten-3 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span >{quantity}</span>
            ) : null}
        </div>
    );

}

export { Basket };