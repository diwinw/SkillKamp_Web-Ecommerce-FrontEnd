import React from "react";
import Product from "../product/Product";
import Product1 from "../../image/product/Product1.png";
import Product2 from "../../image/product/Product2.png";
const ShopAll = () => {
  const items = [
    {
      id: 1,
      name: "Product 1",
      price: "9.99$",
      image: Product1,
    },
    {
      id: 2,
      name: "Product 2",
      price: "9.99$",
      image: Product2,
    },
    {
      id: 3,
      name: "Product 3",
      price: "9.99$",
      image: Product1,
    },
    {
      id: 4,
      name: "Product 4",
      price: "9.99$",
      image: Product2,
    },
    // Add more items as needed
  ];
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
          {items.map((item) => (
            <Product />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopAll;
