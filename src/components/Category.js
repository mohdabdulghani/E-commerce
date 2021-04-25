
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Category({match}) {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()

        fetch('https://fakestoreapi.com/products',{signal:abortController.signal})
            .then(response => response.json())
            .then(response => {
                 let category = response.filter(item => {
                  return item.category === match.params.category.split('_').join(' ');
               }) 
               setCategory(category)
            })
            .catch(err => console.log(err))  

        return function cleanup() {
            abortController.abort()
        }    
        
    },[category])
    

    return <>
        <section className='w-75  flex-direction-column justify-content-center align-items-center flex-wrap'>
            <h2 className="my-5">{match.params.category.split('_').join(' ').toUpperCase()}</h2>
                <div className="d-flex flex-direction-row justify-content-evenly align-items-center flex-wrap">
                    {category.map(item => {
                        return<>
                            <Cards image={item.image} id={item.id} title={item.title} price={item.price} />   
                        </>
                    })}
                </div>
        </section>
        <hr/>
    </>
}




const Cards = (props) => {
    return <>
        <div className="w-50">
        <div class="card mb-3"  key={props.id}>
            <Link to={`/product/${props.id}`}>
                <img src={props.image} class="card-img-top" alt={props.title}/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text"><small class="text-muted">{props.price}</small></p>
                </div>
             </Link>
        </div>
        </div>
    </>
}



