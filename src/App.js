import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import CardOld from "./components/Card-old";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RoutesMap from "./routes/index";

function App() {
  let [categoryProducts, setCategoryProducts] = useState([]);
  let [jeweleryProducts, setJeweleryProducts] = useState([]);
  // let [electronicsProducts, setElectronicsProducts] = useState([]);
  const [quantityTotal, setQuantityTotal] = useState(0);
  const [likeStatus, setLikeStatus] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setJeweleryProducts(data))
      .catch((error) => console.log(error));
  }, []);

  function getCategoryProducts(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data))
      .catch((error) => console.log(error));
  }

  const calculateQuantity = () => {
    setQuantityTotal(quantityTotal + 1);
  };
  const likeButton = () => {
    setLikeStatus(!likeStatus);
  };

  return (
    <Router>
      <RoutesMap />
    </Router>
  );
}

export default App;

// <div className="App">
//   <Header/>

/* qt={quantityTotal}
        setLike={likeButton}
        setCategory={getCategoryProducts}
      />

      <section className="cards">
        {categoryProducts.length
          ? categoryProducts.map((item) => (
              <Card
                setQt={calculateQuantity}
                likeB={likeStatus}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))
          : []}
      </section>
      <br></br>
      <h1 className="sale">Items in sale </h1>
      <section className="cards-old">
        {jeweleryProducts.map((item) => (
          <CardOld
            setQt={calculateQuantity}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </section>

      <Footer />
    </div> */
