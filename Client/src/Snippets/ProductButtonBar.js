import { useEffect, useState } from "react"

export default function ProductButtonBar(props) {
    const [showButtons, setShowButtons] = useState()

    useEffect(() => {
        console.log(props)
    })

    if(props.quantity == null || props.color == null || props.size == null) 
        return(
            <div className={"form__buttonWrapper active" + (showButtons ? ' active' : '')}>
                <div className="loading__wrapper small">
                    <div className="lds-ring small"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        )
    else
        return(
            <div className={"form__buttonWrapper" + (props.active ? ' active' : '')}>
                <div className="form__productMeta heading">
                    <div className="product__image">
                        <img src={ props.product.media[props.color] } />
                    </div>
                    <div className="form__productInfo">
                        <div className="form__productInfoTitle">{ props.product.title }</div>
                        <div className="form__productInfoQuantity">Quantity: { props.quantity }</div>
                        <div className="form__productInfoVariant">{ props.size } - { props.color }</div>
                    </div>
                </div>
                <div className="form__buttons">
                    <button onClick={ props.addToCart } type="submit" className="btn btn__primary">Add to cart</button>
                    <button type="submit" className="btn btn__secondery">buy it now</button>
                </div>
            </div>
        )
}