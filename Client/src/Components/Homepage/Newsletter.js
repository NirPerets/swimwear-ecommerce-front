import { Component } from "react";
import Icon_Mail from '../../Icons/Icon_Mail'

class Newsletter extends Component {
    render() {
        return(
            <div className="section newsletter">
                <div className="title heading">Join Our Tribe</div>
                <div className="subtitle heading">SUSCRIBE TO OUR NEWSLETTER TO FIND OUT ABOUT THE LATEST FITNESS NEWS AND EXCLUSIVE OFFERS.</div>
                <form className="newsletter__form">
                    <div className="newsletter__block">
                        <input type="text" placeholder="Enter Your Email" className="newsletter__input" />
                        <button type="submit" className="newsletter__submit">{ Icon_Mail }</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Newsletter