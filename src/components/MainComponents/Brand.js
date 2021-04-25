import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './style.css';

function Brand() {

    let [brand, setBrand] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        fetch("https://fakestoreapi.com/products/category/jewelery", { signal: abortController.signal })
            .then(response => response.json())
            .then(response => {
                setBrand(response)
            })

        return function cleanUp() {
            abortController.abort()
        }
    })

    return (
        <>
            <div className="card-container">
                {brand.map((item, index) => {
                    return <>
                        <Card
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                            catagory={item.catagory}
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
        <Link to={`/product/${props.id}`}>
            <div class="card card-brand">
                <img src={props.image} class="brand-img card-img-top " alt={props.title} />
                <div class="card-body">
                    <h3 className="mt-0">{props.title}</h3><hr/>
                    <p class="card-text">{props.price}</p>
                </div>
            </div>
        </Link>
    )
}
