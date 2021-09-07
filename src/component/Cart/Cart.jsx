import React from "react";

function Cart(props){
    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return(
        <div className="cart" onClick={handleBasketShow}>
            <i className="bi bi-cart3"></i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}
export default Cart;