import React from "react";
import GoodsListItem from "../Goods-item-list";


function GoodsList(props){
    const{ goods = [], addToBasket = Function.prototype } = props

    if(!goods.length){
        return <h3>Nothing here, try again in a few minutes</h3>
    }
    return(
       <div className="goods">
           {goods.map((item)=>(
               <GoodsListItem key={item.id} {...item} addToBasket={addToBasket}/>
           ))}
       </div>


    );
}
export default GoodsList;