import { useEffect, useState } from "react"
import CheckoutForm from "../Snippets/CheckoutForm"
import ProductTable from "../Snippets/ProductTable"

function Checkout() {
    const [cart] = useState(JSON.parse(localStorage.getItem('cart')))
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        cart.map(product => {
            total += parseInt(product.product.price)
        })
        setTotal(total)
    }, [])

    function openBlock(e) {
        let block = e.target.parentNode
        if(block.classList.contains('open'))
            block.classList.remove('open')
        else 
            block.classList.add('open')
    }

    if(cart.length === 0) {
        return(
            <div className="checkout__empty">
                <div className="checkout__emptyTitle">Your cart is empty</div>
                <a href="#" className="btn btn__primary">continue shopping</a>
            </div>
        )
    }

    return(
        <div className="checkout__wrapper">
            <div className="checkout__header">
                <div className="checkout__title heading">Checkout</div>
                <div className="checkout__notes">
                    <div className="checkout__note">Returns on store </div>
                    <div className="checkout__noteSeperator"></div>
                    <div className="checkout__note">Free shipping over $250</div>
                </div>
            </div>

            <div className="checkout__body">
                <div className="checkout__forms">
                    <ProductTable cart={ cart }/>
                    <CheckoutForm />
                </div>
                <div className="checkout__subtotalWrapper col-lg-4">
                    <div className="checkout__subtotal">
                        <div className="checkout__subtotalBG">
                            <div className="checkout__subtotalHead">Total Order</div>
                            <div className="checkout__subtotalLine">
                                <div className="checkout__subtotalTitle">Subtotal</div>
                                <div className="checkout__subtotalNumber">${ total }</div>
                            </div>
                            <div className="checkout__subtotalLine">
                                <div className="checkout__subtotalTitle">Delivery</div>
                                <div className="checkout__subtotalNumber">$5</div>
                            </div>
                            <div className="checkout__subtotalLine">
                                <div className="checkout__subtotalTitle">To Pay</div>
                                <div className="checkout__subtotalNumber">${ total + 5 }</div>
                            </div>
                        </div>
                        <div className="accordion checkout__couponWrapper">
                            <div className="accordion__block">
                                <button className="accordion__head heading" onClick={ openBlock }>
                                    Do you have a coupon?
                                    <div className="collapsible__icon">
                                        <div className="horizontal"></div>
                                        <div className="vertical"></div>
                                    </div>
                                </button>
                                <div className="accordion__body">
                                    <div className="input__line">
                                        <input type="text" className="full__input" placeholder="Enter coupon code" />
                                        <button type="text" className="btn btn__primary">Apply</button>    
                                    </div>    
                                </div>
                            </div>
                        </div>

                        <button className="btn btn__primary full__btn complete__btn">Complete Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout