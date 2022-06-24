
const openBlock = (e) => {
    let block = e.target.parentNode
    if(block.classList.contains('open'))
        block.classList.remove('open')
    else 
        block.classList.add('open')
}

function ProductDropdown(props) {

    return(
        <div className="accordion product__dropDown">
            <div className="accordion__block open">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Description
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                </button>
                <div className="accordion__body">{ props.product.description }</div>
            </div>
            <div className="accordion__block">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Details
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>    
                </button>
                <div className="accordion__body">{ props.product.details }</div>
            </div>
            <div className="accordion__block">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Model Size & Fit
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                </button>
                <div className="accordion__body">{ props.product.model }</div>
            </div>
            <div className="accordion__block heading">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Shipping & Returns
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>    
                </button>
                <div className="accordion__body">

                </div>
            </div>
        </div>
    )
}

export default ProductDropdown