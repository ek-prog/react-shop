import React from "react";

function GoodsListItem(props){
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype
    } = props;
    return(
    <div className="card">
        <img src={full_background} className="cart-img"  alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h3 className="card-text">{price} RUB</h3>
                <button onClick={()=>
                            addToBasket({
                                id,
                                name,
                                price
                            })
                } className="btn btn-primary">Add</button>
            </div>
    </div>

    )
}
export default GoodsListItem;