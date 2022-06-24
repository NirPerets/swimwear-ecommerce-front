import { Component } from "react";
import { Link } from 'react-router-dom'
import Icon_Close from '../Icons/Icon_Close';
import CartLine from "./CartLine";

class CartDrawer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        if(this.props != prevProps) {
            this.retrieveCart()
        }
    }

    retrieveCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let total = 0;

        if(cart != null) {
            if(cart.length > 0) {
                cart.map(product => {
                    total += parseInt(product.product.price)
                })
            }
        }

        this.setState({
            cart: cart,
            total: total
        })
    }

    state = {
        noteActive: false,
        cart: [],
        total: 0,
    }

    body = document.querySelector('body')

    toggleNote = () => {
        this.setState(prevState => ({
            noteActive: !prevState.noteActive
        }));
    }

    closeCart = () => {
        this.body.style.overflowY = "auto"
        this.props.toggleCart(false)
    }

    componentDidMount() {
        this.retrieveCart()
    }

    render() {
        if(this.state.cart === null) {
            return(
                <>
                    <div className={"cart__drawer" + (this.props.cartActive ? ' open' : '')}>
                        <div className="cart__header heading">
                            <div>Cart</div>
                            <button onClick={ this.closeCart } className="cart__close">{ Icon_Close }</button>
                        </div>
                        <div className="loading__wrapper">
                            <div className="lds-ring black"><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </>
            )
        }

        if(this.state.cart.length < 1) {
            return(
                <div className={"cart__drawer" + (this.props.cartActive ? ' open' : '')}>
                    <div className="cart__header heading">
                        <div>Cart</div>
                        <button onClick={ this.closeCart } className="cart__close">{ Icon_Close }</button>
                    </div>
                    <div className="heading empty__cart">Your cart is empty</div>
                    <div className="cart__footer">
                        <a href="#" className="btn btn__primary">
                            Continue Shopping
                        </a>
                    </div>
                </div>
            )
        }
        return(
            <div className={"cart__drawer" + (this.props.cartActive ? ' open' : '')}>
                <div className="cart__header heading">
                    <div>Cart</div>
                    <button onClick={ this.closeCart } className="cart__close">{ Icon_Close }</button>
                </div>
                <div className="cart_announcement">
                    {
                        this.state.total >= 250 ?
                        'YOU ARE ELIGIBLE FOR FREE SHIPPING!' :
                        ('SPEND $' + (250 - this.state.total).toFixed(0) +' MORE AND GET FREE SHIPPING!')
                    }
                </div>

                <div className="cart__products">
                    {
                        this.state.cart.map((product, index) => {
                            return(
                                <CartLine retrieveCart={ this.retrieveCart } key={ index } product={ product } cart={ this.state.cart } index={ index } />
                            )
                        })
                    }
                </div>

                <div className="cart__footer">
                    <button onClick={ this.toggleNote } className="cart__note__toggle">Add Order Note</button>
                    <div className="cart__policies">Shipping & taxes calculated at checkout</div>
                    <Link to="/checkout" className="btn btn__primary cart_checkout">
                        Checkout
                        <span className="Button__SeparatorDot"></span>
                        ${ this.state.total.toFixed(2) } USD
                    </Link>
                </div>

                <div className={"cart__note" + (this.state.noteActive ? ' open' : '')}>
                    <div className="heading">Add Order Note</div>
                    <textarea type="text" placeholder="How can we help you?" className="note_textarea" />
                    <button onClick={ this.toggleNote } className="btn btn__primary">Save</button>
                </div>
            </div>
        )
    }
}

export default CartDrawer