import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import CardOld from "./components/Card-old";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashLink as Link } from "react-router-hash-link";

import pic1 from "./assets/image-1.jpg";
import pic2 from "./assets/image-2.jpg";
import pic3 from "./assets/image-3.jpg";
import pic4 from "./assets/image-4.jpg";
import pic5 from "./assets/image-5.jpg";
import pic6 from "./assets/image-6.jpg";
import pic7 from "./assets/image-7.jpg";
import pic8 from "./assets/image-8.jpg";

const products = [
  {
    image: pic1,
    title: " Lorem ipsum dolor sit adipisicing elit. Velit, ullam",
    price: 20,
  },
  {
    image: pic2,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing ",
    price: 10,
  },
  {
    image: pic3,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 25,
  },
  {
    image: pic4,
    title: " Lorem ipsum dolor sit amet consectetur",
    price: 30,
  },
];

const productsOld = [
  {
    image: pic5,
    title: "Lorem ipsum dolor sit amet consectetur",
    newprice: 7,
    oldprice: 10,
  },
  {
    image: pic6,
    title: "Lorem ipsum dolor sit amet consectetur",
    newprice: 11,
    oldprice: 15,
  },
  {
    image: pic7,
    title: "Lorem ipsum dolor sit amet consectetur",
    newprice: 17,
    oldprice: 20,
  },
  {
    image: pic8,
    title: "Lorem ipsum dolor sit amet Lorem ipsum dolor ",
    newprice: 14,
    oldprice: 17,
  },
];

function App() {
  const [quantityTotal, setQuantityTotal] = useState(0);
  const [likeStatus, setLikeStatus] = useState(false);
  const calculateQuantity = () => {
    setQuantityTotal(quantityTotal + 1);
  };
  const likeButton = () => {
    setLikeStatus(!likeStatus);
  };
  return (
    <div className="App">
      <Header qt={quantityTotal} setLike={likeButton} />

      <section className="cards">
        {products.map((item) => (
          <Card
            setQt={calculateQuantity}
            likeB={likeStatus}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </section>
      <br></br>
      <h1 className="sale">Items in sale </h1>
      <section className="cards-old">
        {productsOld.map((item) => (
          <CardOld
            setQt={calculateQuantity}
            image={item.image}
            title={item.title}
            newprice={item.newprice}
            oldprice={item.oldprice}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
