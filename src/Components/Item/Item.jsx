// import React, { useState } from "react";
// import "./Item.css"

// import { Link } from "react-router-dom";
 
// const Item = (props) => {
//         return (
//             <div className="item">

//       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
//                 <p>{props.name}</p>   
//                 <div className="item-prices">

//                     <div className="item-price-new">
//                         {props.new_price}kr
//                     </div>

//                     <div className="item-price-old">
//                         {props.old_price}kr
//                      </div>
//                  </div> 

//             </div>
//         )
//     }

//     export default Item







import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}kr</div>
        {props.old_price && (
          <div className="item-price-old">{props.old_price}kr</div>
        )}
      </div>
    </div>
  );
};

export default Item;






