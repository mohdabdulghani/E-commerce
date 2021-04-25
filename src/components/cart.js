import React,{ useState,useEffect } from 'react'
 
export default function Cart({ match }) {
    let [cart, setCart] = useState([])
    let [price, setPrice] = useState([])
    let [quantity, setQuantity] = useState([])
    let [remove,setRemove] = useState([])
    

    useEffect(() => {
        const abortController = new AbortController


        if (match.params.id == undefined  && localStorage.getItem('cartList')== null) {
            console.log(`No product is added to cart yet!`)
        } 

        if (match.params.id == undefined && localStorage.getItem('cartList') != null) {
            console.log(`display all cart elements`)
            let cartLocalStorgeList = localStorage.getItem('cartList');
            cartLocalStorgeList = JSON.parse(cartLocalStorgeList);
            let totalPrice = 0
            if (cartLocalStorgeList.length > 1) {
                totalPrice += parseFloat(cartLocalStorgeList.reduce((accumulator, currentValue) => accumulator.price + currentValue.price))
            } else {
                totalPrice = parseFloat(cartLocalStorgeList.map(item => item.price))
            }
                    
            setPrice(totalPrice)
            setCart(cartLocalStorgeList)
        }

        if (match.params.id != undefined && localStorage.getItem('cartList') == undefined) {
            console.log('Create a cartlist and add element to it and render that element')
            fetch('https://fakestoreapi.com/products',{signal:abortController.signal})
                .then(response => response.json())
                .then(response => {
                    let cartLocalStorgeList = []
                    cartLocalStorgeList.push(response.find(item => item.id == match.params.id))
                    let totalPrice = 0
                    if (cartLocalStorgeList.length > 1) {
                        totalPrice += parseFloat(cartLocalStorgeList.reduce((accumulator, currentValue) => accumulator.price + currentValue.price))
                    } else {
                        totalPrice = parseFloat(cartLocalStorgeList.map(item => item.price))
                    }
                    
                    setPrice(totalPrice)
                    setCart(cartLocalStorgeList)
                    localStorage.setItem('cartList',JSON.stringify(cartLocalStorgeList))
            })  
        }

        if (match.params.id != undefined && (localStorage.getItem('cartList') != null || localStorage.getItem('cartList') != undefined)) {
            console.log('Add new element to cart list and put it into local storage');
            fetch('https://fakestoreapi.com/products',{signal:abortController.signal})
            .then(response => response.json())
            .then(response => {
                let cartLocalStorgeList = localStorage.getItem('cartList');
                cartLocalStorgeList = JSON.parse(cartLocalStorgeList);
                let exist = cartLocalStorgeList.some(item => item.id == match.params.id)
                if (exist) {
                    //do nothing
                    setCart(cartLocalStorgeList)
                    localStorage.setItem('cartList',JSON.stringify(cartLocalStorgeList))
                } else {
                    cartLocalStorgeList.push(response.find(item => item.id == match.params.id));
                    console.log(cartLocalStorgeList)
                    let totalPrice = 0
                    
                    if (cartLocalStorgeList.length > 1) {
                        totalPrice += parseFloat(cartLocalStorgeList.reduce((accumulator, currentValue) => accumulator.price + currentValue.price))
                    } else {
                        totalPrice = parseFloat(cartLocalStorgeList.map(item => item.price))
                    }
                    
                    localStorage.setItem('cartList',JSON.stringify(cartLocalStorgeList))
                    setPrice(totalPrice)
                    setCart(cartLocalStorgeList)
                }
            })
        }

        return function cleanup() {
                abortController.abort()
        }
        
        },[])
    

    const clearCart = () => {
        console.log(`Cleaning Cart!!`) 
        localStorage.clear()
        setCart([])
    }

    return <>  
        <section className="w-75 d-flex flex-direction-row justify-content-around align-items-center">
            <div className="col-6">
                {cart.map(item => {
                        return <>
                            <CartCards
                                id = {item.id}
                                image = {item.image}
                                title = {item.title}
                                price = {item.price}
                                category = {item.category}
                            />
                        </>
                    })} 
            </div>    
            <div className="col-4">
                <h3>CartItems</h3>
                <hr />
                <span className="d-flex flex-direction-row justify-content-between align-items-center">
                <p>Total</p>    
                <p>${price}</p>
                </span>
            </div>
        </section>
        <hr />
        <div className="w-75 d-flex flex-direction-row justify-content-between align-items-center">
                <button className="btn btn-secondary" onClick={clearCart}>Remove All</button>
                <div></div>
        </div>
    </>
}

const CartCards = props => {
    return <>
        <section key={props.id} className="col-12 d-flex flex-direction-row justify-content-center align-items-center my-5">
            <img className="col-3" src={props.image} alt={props.title}/>      
            <div className="col-9">
                <h3>{props.title}</h3>
                <p>{props.price} $</p>
                <small>{props.category}</small>
            </div>   
        </section>
    </>
}





