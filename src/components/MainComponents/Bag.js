import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import './style.css';

function Brand() {

    let [bag, setBag] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()
        fetch('https://fakestoreapi.com/products?limit=12',{signal:abortController.signal})
            .then(response => response.json())
            .then(response => {
                setBag(response)
            })
        
        return function cleanup() {
            abortController.abort()
        }
    })
    return (
        <>
            <div className="card-container">
                {bag.map((item) => {
                    return <>
                            <Card
                                key={item.id}
                                id={item.id}
                                catagory={item.catagory}
                                image={item.image}
                                price={item.price}
                                description={item.description}
                                title={item.title}
                                />
                    </>
               })}
            </div>
        </>
    )
}

export default Brand;



function Card(props) {
    return (
        <>
            <div class="card bag-card-container">
            <Link to={`product/${props.id}`}>
                <img src={props.image} class="bag-img mt-1 card-img-top " alt={props.title} />
                <div class="card-body">
                    <p class="card-text">{props.catagory}</p>
                    </div>
            </Link>
            </div>
        </>
    )
}


