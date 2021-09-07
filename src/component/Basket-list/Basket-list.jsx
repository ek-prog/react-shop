import React from "react";
import BasketItem from "../Basket-item";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
    <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Корзина</h5>
                    <button onClick={handleBasketShow} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                    </button>
                </div>
                <div className="modal-body">
                    <ul>

                    {order.length ? (
                        order.map((item) => (
                            <BasketItem
                                key={item.id}
                                removeFromBasket={removeFromBasket}
                                incQuantity={incQuantity}
                                decQuantity={decQuantity}
                                {...item}
                            />
                        ))
                    ) : (
                        <li >Корзина пуста</li>
                    )}
                    <li>
                        Общая стоимость: {totalPrice} руб.
                    </li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Оформить</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BasketList;