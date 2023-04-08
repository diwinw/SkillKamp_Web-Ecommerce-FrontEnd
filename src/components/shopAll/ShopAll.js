import React, { useState, useEffect } from "react";
import Product from "../product/Product";

const ShopAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8844/api/products");
      const data = await response.json();
      setProducts(data);
      console.log(products);
    };

    fetchProducts();
  }, []);

  const TShirtFilter = async () => {
    const response = await fetch(
      "http://localhost:8844/api/products/filter/c001"
    );
    const data = await response.json();
    setProducts(data);
    console.log(products);
  };

  const BodyFilter = async () => {
    const response = await fetch(
      "http://localhost:8844/api/products/filter/c002"
    );
    const data = await response.json();
    setProducts(data);
    console.log(products);
  };

  const AllFilter = async () => {
    const response = await fetch("http://localhost:8844/api/products");
    const data = await response.json();
    setProducts(data);
    console.log(products);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>New Arrivals</h2>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div clclassName ass="btn-group">
              <button
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul className="dropdown-menu">
                <button
                  className="text-center btn btn-light"
                  style={{ width: "100%" }}
                  onClick={AllFilter}
                >
                  All
                </button>
                <button
                  className="text-center btn btn-light"
                  style={{ width: "100%" }}
                  onClick={TShirtFilter}
                >
                  T-shirts
                </button>
                <button
                  className="text-center btn btn-light"
                  style={{ width: "100%" }}
                  onClick={BodyFilter}
                >
                  {" "}
                  Bodysuits
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          {products.map((product) => (
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopAll;
