function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price,
        displayAssets,
        addToBasket = Function.prototype,
    } = props;
    
    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets[0].url + '100'} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price: price.regularPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: '1.8rem' }}>
                    {price.regularPrice} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
