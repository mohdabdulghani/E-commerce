import React from 'react'

let FetchedData = []
let categoryListData = []
let dataLimited = []

function dataAll() {
    const abortController = new AbortController()

    fetch('https://fakestoreapi.com/products',{signal:abortController.signal})
        .then(response => response.json())
        .then(response => {
            response.forEach(item => {
                FetchedData.push(item)
            })
        })
    
    
    return function cleanup(){
        abortController.abort()
    }
}


dataAll()

function categoryList() {
    const abortController = new AbortController()

    fetch('https://fakestoreapi.com/products/categories',{signal:abortController.signal})
        .then(response => response.json())
        .then(response => {
            response.forEach(item => {
                categoryListData.push(item)
            })
        })
    
    
    return function cleanup(){
        abortController.abort()
    }       
}

categoryList()


function fetchDataLimited(limit = 5) {
    
    
    const abortController = new AbortController()

    fetch(`https://fakestoreapi.com/products?limit=${limit}`,{signal:abortController.signal})
        .then(response => response.json())
        .then(response => {
            response.forEach(item => {
                dataLimited.push(item)
            })
        })
    
    
    return function cleanup(){
        abortController.abort()
    }  
}

fetchDataLimited(4)


export default FetchedData;

export {categoryListData,dataLimited}