import {Link} from "react-router-dom";
import React,{useState,useEffect} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style.css';


function Deals() {

    let [deal,setDeal] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        fetch('https://fakestoreapi.com/products?limit=5',{signal:abortController.signal})
            .then(response => response.json())
            .then(response => {
                setDeal(response)
            })
        return function cleanUp() {
            abortController.abort()
        }
    })


    return (
        <>
            <div className="card-container">
                {deal.map((item, index) => {
                    return <>
                        <Cards
                            key = {index}
                            imageUrl = {item.image}
                            price={item.price}
                            title={item.title}
                            id = {item.id}
                        />
                     </>
                })}
            </div>

        </>
    )
}


export default Deals;


function Cards(props) {
    return (
       <Link to={`/product/${props.id}`}> 
        <div className="card card-deal" >
            <img className="product-img" src={props.imageUrl} alt="product-img"/>
            <div className="card-body">
                <p className="t">Para one</p><hr/>
                <small>{props.title}</small><hr/>
                <small>{props.price}</small><hr/>
                <p className="fs-6 fw-light">T&C</p>
                </div>
            </div>
        </Link>
    )
}
