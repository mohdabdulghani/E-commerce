import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/cart";
import Product from './components/product';
import Footer from "./components/Footer";
import Category from "./components/Category";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/products/:category" component={Category} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/cart/:id" component={Cart} />
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
