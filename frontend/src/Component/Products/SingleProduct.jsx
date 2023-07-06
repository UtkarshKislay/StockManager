import React from "react";
import "./SingleProduct.css";
const SingleProduct = ({ product }) => {
  return (
    <div className="singleProductCard">
      <div className="product-card">
        <div className="prod-category">
          <span className="gap">Category: </span> {product.category}
        </div>
        {product.image ? (
          <div className="img">
            <img src={product.image} alt="" />
          </div>
        ) : null}
        <div className="product-title">
          <span className="gap">Product: </span>
          {product.name}
        </div>
        <div className="price">
          <span className="gap"> Price</span>
          {product.price}
          <span>Rs</span>
        </div>
        <div className="description">
          <span className="gap">Description:</span> {product.description}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
