import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import './style.css';


function Header() {

  let [nav, setNav] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(response => {
        setNav(response)
      })
  })
  return (
    <>
      <header className="site-header sticky-top py-1 ">
        <nav className="container-fluid d-flex flex-direction-row justify-content-around align-items-center">
          <div className="nav-logo pointer" >
            <Link to="/">
              <h1>E-Com</h1>
            </Link>
          </div>
            <ul className="navbar-nav">
              {nav.map((item,index)=> {
                return <>
                  <li className="nav-item mx-1" onMouseOver='_' key={index}>
                    <Link category = {item} to={`/products/${item.split(' ').join('_')}`}>
                      {item.toUpperCase()}
                    </Link>
                  </li>
                </>
              })}
            </ul>
          <div className="nav-search py-2 d-none d-md-inline-block">
            <form class="d-flex flex-direction-row justify-content-center align-items-center">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </div>
          <div className="nav-user d-flex flex-md-row justify-content-between align-items-center">
            <Link to='/signin'>
            <div className="profile py-2 d-none d-md-inline-block m-1 pointer">Profile</div>
            </Link>
            <a className="wish-list py-2 d-none d-md-inline-block m-1 pointer" href="/">
              Wish List
            </a>
            <Link to={`/cart`}>
                <FontAwesomeIcon icon={faShoppingCart} /> <small>Cart</small>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

