import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductButtonBar from "./ProductButtonBar";
import ProductDropdown from "./ProductDropdown";
import Quantity from './Quantity'

function ProductMeta(props) {

    const [quantity, setQuantity] = useState(1)
    const [buttonActive, setButtonActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 100)
                setButtonActive(true)
            else
                setButtonActive(false)
        })
    })

    function addToCart() {
        let cart = JSON.parse(localStorage.getItem('cart'))

        const productToAdd = {
            product: props.product,
            quantity: quantity,
            color: props.activeColor,
            size: props.activeSize
        }
        
        cart.push(productToAdd)
        localStorage.setItem('cart', JSON.stringify(cart))
        props.toggleCart(true)
    }

    function buyNow() {

    }

    return(
        <div className="product__meta">
            <Link to="/collection/swimwear" className="product__subtitle heading">Swimwear</Link>
            <div className="product__title heading">{ props.product.title }</div>
            <div className="product__price heading">${ props.product.price }</div>
            <div className="product__variants">
                <div className="product__variant product__variantColors">
                    <div className="product__variantLabel heading">Color</div>
                    <div className="product__variantOptions">
                        {
                            props.product.variants[1].options.map((option, index) => {
                                return(
                                    <div className="color__buttonWrapper" key={ index }>
                                    <div className="color__label">{ option }</div>
                                    <button 
                                    onClick={() => props.setActiveColor(option)} 
                                    className={"product__variantOption color" + (props.activeColor == option ? ' active' : '') + ( ' ' + option)}></button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="product__variant">
                    <div className="product__variantLabel heading">Size</div>
                    <div className="product__variantOptions">
                        {
                            props.product.variants[0].options.map((option, index) => {
                                return(
                                    <button 
                                    key={ index }
                                    onClick={() => props.setActiveSize(option)} 
                                    className={"product__variantOption heading" + (props.activeSize == option ? ' active' : '')}>{ option }</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="seperator"></div>
            <Quantity quantity={ quantity } setQuantity ={ setQuantity } /> 
            <div className="product__formNote heading"> Free Shipping for orders over $250 </div>
            <button onClick={ addToCart } className="btn btn__primary full__btn">add To Cart</button>
            <button onClick={ buyNow } className="btn btn__secondery full__btn">Buy it now</button>

            <ProductDropdown product={ props.product } />
            <ProductButtonBar 
                product={ props.product } 
                addToCart={ addToCart } 
                quantity={ quantity } 
                color={ props.activeColor }
                size={ props.activeSize } 
                active={ buttonActive } />
        </div>
    )
}

export default ProductMeta