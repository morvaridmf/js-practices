import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import SignInPage from "./../pages/SigninPage";
import ProductsPage from "../pages/ProductsPage";

export const routes = {
  root: "/",
  home: "/home",
  products: "/products",
  signin: "/signin",
};

function RoutesMap() {
  return (
    <Routes>
      <Route path={routes.root} element={<HomePage />} />
      <Route path={routes.home} element={<HomePage />} />

      <Route path={routes.signin} element={<SignInPage />} />
      <Route path={routes.products} element={<ProductsPage />} />
    </Routes>
  );
}

export default RoutesMap;
