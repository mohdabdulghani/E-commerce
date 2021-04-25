import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './style.css';

function Explore() {
    let [explore, setExplore] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()
        fetch('https://fakestoreapi.com/products?limit=10', { signal: abortController.signal })
            .then(response => response.json())
            .then(response => {
                setExplore(response)
            })
        return function cleanUp() {
            abortController.abort()
        }
    })

    return (
        <>
            <div className="explore-card card-container">
                {explore.map((item, index) => {
                    return <>
                        <Card
                            className="ex-card"
                            key={item.id}
                            // catagory={item.catagory}
                            image={item.image}
                            // price={item.price}
                            title={item.title}
                            id={item.id}
                        />
                    </>
                })}
            </div>
        </>
    )
}

export default Explore;




function Card(props) {
    return (
        <>
            <Link to={`/product/${props.id}`}>
                <div class="card explore-card-container" key={props.key}>
                    <img src={props.image} class="explore-img card-img-top " alt={props.title} /><hr />
                  <h6>{props.title}</h6>
                </div>
            </Link>
        </>
    )
}


