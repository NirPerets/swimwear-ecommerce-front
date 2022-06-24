function CheckoutForm() {
    function openBlock(e) {
        let block = e.target.parentNode
        if(block.classList.contains('open'))
            block.classList.remove('open')
        else 
            block.classList.add('open')
    }
    
    return(
        <>
                <div className="accordion product__dropDown">
            <div className="accordion__block open">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Delivery Information
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                </button>
                <div className="accordion__body">
                    <div className="input__line">
                        <div className="input__block col-lg-5">
                            <label>First Name</label>
                            <input type="text" required />
                        </div>
                        <div className="input__block col-lg-5">
                            <label>Last Name</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="input__block col-lg-12">
                        <label>Street</label>
                        <input type="text" required />
                    </div>
                    <div className="input__line">
                        <div className="input__block col-lg-5">
                            <label>House Number</label>
                            <input type="text" required />
                        </div>
                        <div className="input__block col-lg-5">
                            <label>City</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="input__line">
                        <div className="input__block col-lg-6">
                            <label>Phone Number</label>
                            <input type="text" required />
                        </div>
                        <div className="input__block col-lg-6">
                            <label>Email</label>
                            <input type="text" required />
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion__block">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Shipping
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>    
                </button>
                <div className="accordion__body">
                    
                </div>
            </div>
            <div className="accordion__block">
                <button className="accordion__head heading" onClick={ openBlock }>
                    Payment Details
                    <div className="collapsible__icon">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                </button>
                <div className="accordion__body">

                </div>
            </div>
        </div>
        </>
    )
}

export default CheckoutForm