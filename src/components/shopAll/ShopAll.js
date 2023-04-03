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

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h2>New Arrivals</h2>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul class="dropdown-menu">
                <button
                  className="text-center btn btn-light"
                  style={{ width: "100%" }}
                >
                  All
                </button>
                <button
                  className="text-center btn btn-light"
                  style={{ width: "100%" }}
                >
                  T-shirts
                </button>
                <button
                  className="text-center btn btn-light"
                  style={{ width: "100%" }}
                >
                  {" "}
                  Bodysuits
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          {products.map((product) => (
            <Product
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
