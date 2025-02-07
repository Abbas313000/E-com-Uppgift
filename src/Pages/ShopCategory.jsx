// import React, { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";


// import "./CSS/ShopCategory.css";

// import dropdown_icon from "../Components/Assets/dropdown_icon.png";

// import Item from "../Components/Item/Item";


// const ShopCategory = (props) => {
//   const {all_product} = useContext(ShopContext);
//   return (
//     <div className="shop-category">
//         <img className="shopcategory-banner" src={props.banner} alt="" />
//         <div className="shopcategory-indexSort">
//            <p>
//             <span>Showing 1-12</span> out of 36 products
//            </p>
//            <div className="shopcategory-sort">
//             Sort by <img src={dropdown_icon} alt="" />
//            </div>
//         </div>

//         <div className="shopcategory-products">
//           {all_product.map((item,i)=>{
//             if (props.category===item.category) {
//               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             }
//             else{
//               return null;
//             }
//           })}
//         </div>

//         <div className="shopcategory-loadmore">
//           Explore More
//         </div>

//     </div>
//   )
// }

// export default ShopCategory




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Kunde inte hämta produkten.");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Laddar produkt...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;

