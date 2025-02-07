
// import React, { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { useParams } from "react-router-dom";
// import Breadcrum from "../Components/Breadcrums/Breadcrum";
// import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
// import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
// import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


// const Product = () => {
//   const {all_product} = useContext(ShopContext);
//   const {productId} = useParams();
//   const product = all_product.find((e)=> e.id === Number (productId));

//   return (
//     <div>
//         <Breadcrum product={product}/>
//         <ProductDisplay product={product}/>
//         <DescriptionBox/>
//         <RelatedProducts/>
        
//      </div>

//   )


// }

// export default Product




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

