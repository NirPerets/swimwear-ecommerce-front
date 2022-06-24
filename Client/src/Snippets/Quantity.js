import Icon_Plus from '../Icons/Icon_Plus'
import Icon_Minus from '../Icons/Icon_Minus'

function Quantity(props) {
    return(
        <div className="quantity">
            <button className="quantity__btn" onClick={ () => props.quantity > 1 ? props.setQuantity(props.quantity - 1) : '' }>{ Icon_Minus }</button>
            <input type="text" value={ props.quantity } className="quantity__input" />
            <button className="quantity__btn" onClick={ () => props.setQuantity(props.quantity + 1) }>{ Icon_Plus }</button>
        </div>
    )
}

export default Quantity