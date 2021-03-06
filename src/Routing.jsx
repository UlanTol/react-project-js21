import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import AddProduct from "./components/AddProduct/AddProduct";
import Basket from "./components/Basket/Basket";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import ProductsList from "./components/ProductsList/ProductsList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default Routing;
