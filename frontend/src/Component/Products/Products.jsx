import React from "react";
import { useState, useEffect, useRef } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import "./Product.css";
const Products = () => {
  const [product, setProduct] = useState([]);
  const formRef = useRef(null);
  const productPerPage = 4;
  const [lastPage, setLastPage] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      
      
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:5000/api/products",
          params: {
            productPerPage: productPerPage,
            page: page,
            searchProduct: searchProduct,
          },
        });
        const product = await response.data;
        setProduct(product.pageProducts);
        setLastPage((lastPage) => product.lastPageNumber);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [page, searchProduct]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  
  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((page) => page + 1);
    } else {
      setPage(1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    } else {
      setPage(lastPage);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formRef.current.click();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchProduct(search);
    setPage(1);
  };


  const renderProduct = product.map((item) => {
    return <SingleProduct key={item.id} product={item} />;
  });

  return (
    <div className="product">
      <div className="product-container">
        <div className="searchProduct">
          <form onSubmit={handleFormSubmit}>
            <input
            className="searchInput"
              type="text"
              value={search}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDown}
              placeholder="Search Product"
            />
            <button className="search-btn" ref={formRef} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className={` ${product.length<=2?"product-info-update":"product-info"}` } >{renderProduct}</div>
        <div className="pagination-buttons">
          <button onClick={handlePrevPage}>Prev</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
