import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <div>Product Details</div>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailPage;
