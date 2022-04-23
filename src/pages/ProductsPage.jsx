import React from "react";
import Card from "../components/Card";
import CardOld from "../components/Card-old";
import Header from "../components/Header";
function ProductsPage() {
  return (
    <div className="products">
      <Header />
      <Card />
      <CardOld />
    </div>
  );
}

export default ProductsPage;
