import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./components/home.js";
import Festivals from "./components/festivals.js";
import Tilt from "react-parallax-tilt";
import Food from "./components/food";
import Clothing from "./components/clothing";
import Relig from "./components/relig";
import Lang from "./components/lang";
import Dance from "./components/dance";

function App() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollTop=950,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
      in place of 'smooth' */
    });
  };
  return (
    <>
      <div className="header">
        <h2>
          {" "}
          Being Indian <span> - A Glimpse of Incredible India </span>{" "}
        </h2>
      </div>

      <Router>
        <div className="cardblock">
          <Tilt>
            <Link to="/" class="card_category" onClick={scrollToBottom}>
              <img src="../images/home1.png" />
              Home{" "}
            </Link>{" "}
          </Tilt>
          <Tilt>
            <Link
              to="/festivals"
              class="card_category"
              onClick={scrollToBottom}
            >
              <img src="../images/festivals.png" /> Festivals{" "}
            </Link>
          </Tilt>
          <Tilt>
            <Link to="/food" class="card_category" onClick={scrollToBottom}>
              <img src="../images/food.png" /> Food varieties{" "}
            </Link>
          </Tilt>
          <Tilt>
            <Link to="/clothing" class="card_category" onClick={scrollToBottom}>
              <img src="../images/clothing.jpg" />
              Clothings{" "}
            </Link>
          </Tilt>
          <Tilt>
            <Link to="/religion" class="card_category" onClick={scrollToBottom}>
              <img src="../images/religion.png" /> Religions{" "}
            </Link>{" "}
          </Tilt>
          <Tilt>
            <Link to="/dance" class="card_category" onClick={scrollToBottom}>
              {" "}
              <img src="../images/dance.jpg" />
              Dance Forms{" "}
            </Link>
          </Tilt>
          <Tilt>
            <Link
              to="/languages"
              class="card_category"
              onClick={scrollToBottom}
            >
              <img src="../images/lang.jpg" /> Languages{" "}
            </Link>
          </Tilt>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/festivals" component={Festivals} />
        <Route exact path="/food" component={Food} />

        <Route exact path="/clothing" component={Clothing} />

        <Route exact path="/languages" component={Lang} />
        <Route exact path="/dance" component={Dance} />
        <Route exact path="/religion" component={Relig} />
      </Router>
    </>
  );
}

export default App;
