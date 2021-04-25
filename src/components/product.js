
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


export default function Product({ match }) {

    let [product, setProduct] = useState([])
    
    useEffect( () => {
        const abortController = new AbortController
        fetch('https://fakestoreapi.com/products',{signal:abortController.signal})
            .then(response => response.json())
            .then(response => {
                let findData = response.find(item => item.id == match.params.id)
                setProduct(findData)       

            })

        return function cleanup() {
            abortController.abort()
        }
    },[])
    console.log(product)
    return <>
        <section className="product-section w-75 mx-auto d-flex flex-direction-row justify-content-between align-items-center">
            <div className="product-image-section">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-detail-section">
                <h3>{product.title}</h3>
                <small>{product.category}</small>
                <hr />
                <p>{product.price} $</p>
                <div>
                    <h3>About the item</h3>
                    <p>{product.description}</p>
                </div>
                <form>
                    <Link to={`/cart/${product.id}`}>
                        <button className='btn btn-secondary'>Add to Cart</button>
                    </Link>
                </form>
            </div>
        </section>
    </>
}



