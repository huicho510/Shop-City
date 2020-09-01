import React, { useState, useEffect } from "react";
import Product from "../components/Product/index";
import Straw from "../images/straw.jpg";
import "./style.css";
import API from "../utils/API";

const Home = (props) => {
  // Setting our component's initial state
  const [products, setProducts] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadProduct();
  }, []);

  // Loads all books and sets them to books
  function loadProduct() {
    API.getProduct()
      .then((res) => setProducts(res.data))
      // then(res => loadProduct())
      .catch((err) => console.log(err));
  }

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://cdn.shopify.com/s/files/1/2634/9716/files/Banner-MINIFAN_1944x.gif?v=1595538366"
        alt="home"
      />
      <div className="home__row">
        {products.map((product) => (
          <Product key={product.id}>
            {product.image}
            {product.price}
            {product.title}
          </Product>
        ))}

        <Product
          id="1232"
          title="Headphones"
          price={12.95}
          rating={5}
          image="data:image/webp;base64,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"
        />
        <Product
          id="1232"
          title="Headphones"
          price={12.95}
          rating={5}
          image={Straw}
        />
      </div>
      <div className="home__row">
        <Product
          id="1232"
          title="Headphones"
          price={12.95}
          rating={5}
          image="data:image/webp;base64,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"
        />
      </div>
    </div>
  );
};

export default Home;
