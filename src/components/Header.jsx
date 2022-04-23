import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

function Header(props) {
  const [selected, setSelected] = useState(true);
  const [categories, setCategories] = useState([]);
  const signed = () => {
    setSelected(!selected);
    props.setLike();
  };

  const CategoryButton = (event) => {
    props.setCategory(event.target.innerText);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <header>
      <div className="title">
        {categories.map((item) => (
          <button className="category" onClick={CategoryButton}>
            {item}
          </button>
        ))}
      </div>
      <div className="logo">
        <h1>Online-Shopping</h1>
      </div>
      <div className="search">
        <input type="text" value="search" id="search" placeholder="Search" />
        <button class="btn" type="submit">
          Search
        </button>
        <i class="fa-solid fa-cart-shopping"></i>
        <span className="quantityT">{props.qt}</span>
        {/* <button
          className={`sign-in ${selected ? "" : "sign-out"}`}
          onClick={signed}
        >
          {selected ? "Sign In" : "Sign Out"}
        </button> */}
        {selected ? (
          <button className="sign-in" onClick={signed}>
            Sign In
          </button>
        ) : (
          <button className="sign-out" onClick={signed}>
            Sign Out
          </button>
        )}
      </div>
      <div className="link">
        <Link className="nav-link" to={routes.home}>
          Home
        </Link>
        <Link className="nav-link" to={routes.products}>
          Products
        </Link>
        <Link className="nav-link" to={routes.signin}>
          SignIn
        </Link>
      </div>
    </header>
  );
}

export default Header;
