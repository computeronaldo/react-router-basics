import React from "react";
import { Link } from "react-router-dom";

const PORDUCTS = [
  {
    id: "p1",
    item: "Product 1",
  },
  {
    id: "p2",
    item: "Product 2",
  },
  {
    id: "p3",
    item: "Product 3",
  },
];

const ProductsPage = () => {
  return (
    <>
      <div>The Products Page</div>
      {PORDUCTS.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.item}</Link>
          </li>
        );
      })}
    </>
  );
};

export default ProductsPage;
