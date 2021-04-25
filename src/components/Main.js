import React,{useEffect} from "react";
// import Carousel from "./MainComponents/Carousel";
import Carousel from "./MainComponents/CarouselBar";
import Deals from './MainComponents/Deals';
import Brand from "./MainComponents/Brand";
import Bag from "./MainComponents/Bag";
import Explore from './MainComponents/Explore';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style.css';


function Main() {
  useEffect(() => {
    // localStorage.clear();
  })

  return (
    <>
    <div className="main-container">
    <Carousel/>
    <div className="deal-heading">DEALS OF THE DAY</div>
    <Deals/>
    <div className="deal-heading">BIGGEST DEALS ON TOP BRANDS</div>
    <Brand/>
    <div className="deal-heading">CATEGORIES TO BAG</div>
    <Bag/>
    <div className="deal-heading">EXPLORE TOP BRANDS</div>
    <Explore/>
    </div>

    </>
  )
}

export default Main;
