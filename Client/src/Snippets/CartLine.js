import { Link } from 'react-router-dom'
import Icon_Trash from '../Icons/Icon_Trash'

function CartLine(props) {
    async function removeFromCart() {
        let cart = props.cart
        await cart.splice(props.index, props.index)
        localStorage.setItem('cart', JSON.stringify(cart))
        props.retrieveCart()
    }

    return(
        <div className="cart__line">
            <div className="cart__lineImage">
                <img src={ props.product.product.media[props.product.color][0] } />
            </div>
            <div className="cart__lineMeta">
                <Link to={"/product/" + props.product.product.sku} className="cart__lineTitle heading">
                    { props.product.product.title }
                </Link>
                <div className="cart__linePrice heading">{ props.product.product.price }</div>
                <div className="cart__lineVariant heading">{ props.product.color} - { props.product.size }</div>
            </div>
            <button onClick={ removeFromCart } className="cart__lineDelete">{ Icon_Trash }</button>
        </div>
    )
}

export default CartLine;