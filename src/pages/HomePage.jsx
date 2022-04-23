import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/shopping.jpg";

function HomePage() {
  return (
    <div>
      <Header />
      <img src={image} className="image1" alt="imge" />

      <Footer />
    </div>
  );
}

export default HomePage;
