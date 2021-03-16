import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Deals from "./pages/Deals";
import ItemPage from "./pages/ItemPage";
import Checkout from "./pages/Checkout";

import { CartProvider } from "./contexts/CartContext";

import { CartProvider } from "./contexts/CartContext";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/deals">
            <Deals />
          </Route>

          <Route path="/item/:id">
            <ItemPage />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
