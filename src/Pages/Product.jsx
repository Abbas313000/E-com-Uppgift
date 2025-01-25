// import React, { useState } from "react";

import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number (productId));

  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
        
     </div>

  )


}

export default Product






// const Product = () => {
//   const { all_product } = useContext(ShopContext);
//   const { productId } = useParams();
//   const product = all_product.find((e) => e.id === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <Breadcrum product={product} />
//       <div className="product-details">
//         <h1>{product.name}</h1>
//         <img src={product.image} alt={product.name} />
//         <p>{product.description}</p>
//         <p>Price: {product.new_price}kr</p>
//         {product.old_price && <p>Old Price: {product.old_price}kr</p>}
//       </div>
//     </div>
//   );
// };

// export default Product;
