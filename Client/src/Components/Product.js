import { Component, useEffect, useState } from "react";
import ProductMedia from "../Snippets/ProductMedia";
import ProductMeta from "../Snippets/ProductMeta";
import ReviewsGrid from './Global/ReviewsGrid'
import OurStory from './Homepage/OurStory'
import Newsletter from './Homepage/Newsletter'
import { useParams } from "react-router";
import ProductButtonBar from "../Snippets/ProductButtonBar";

function Product(props){
    let { id } = useParams()
    const [product, setProduct] = useState()
    const [activeSize, setActiveSize] = useState()
    const [activeColor, setActiveColor] = useState()

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ sku : id })
        }

        fetch('/product', options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProduct(data.product)
                setActiveSize(data.product.variants[0].options[0])
                setActiveColor(data.product.variants[1].options[0])
            })
    }, [])

    if(product === undefined) {
       return(
           <div className="loading__wrapper">
               <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
           </div>
       ) 
    } else {
        return(
            <div className="product">
                <div className="product__wrapper">
                    <ProductMedia 
                        product={ product }
                        activeColor={ activeColor } />
                    <ProductMeta 
                        product={ product } 
                        activeSize={ activeSize }
                        setActiveSize={ setActiveSize }
                        activeColor={ activeColor }
                        setActiveColor={ setActiveColor } 
                        toggleCart={ props.toggleCart } />
                </div>
                <div className="product__reviewsWrapper">
                    <ReviewsGrid />
                </div>
                <OurStory />
                <Newsletter />
            </div>
        )
    }
}

export default Product