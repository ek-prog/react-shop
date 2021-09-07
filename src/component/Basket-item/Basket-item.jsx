import React from "react";


function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li >
            {name}{' '}


            <i
                className='bi bi-dash-square'
                onClick={() => decQuantity(id)}
            >
                {/*REMOVE*/}
            </i>{' '}
            x{quantity}{' '}



            <i
                className='bi bi-plus-square'
                onClick={() => incQuantity(id)}
            >
                {/*ADD*/}
            </i>{' '}
            = {price * quantity} руб.


            <span

                onClick={() => removeFromBasket(id)}
            >

            </span>
        </li>
    );
}

export default BasketItem;