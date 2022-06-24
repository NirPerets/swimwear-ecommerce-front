import { Component } from "react";
import Icon_Facebook from '../Icons/Icon_Facebook'
import Icon_Instagram from '../Icons/Icon_Instagram'
import Icon_Tiktok from '../Icons/Icon_Tiktok'

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="social__menu">
                    <li><a href="#">{ Icon_Facebook }</a></li>
                    <li><a href="#">{ Icon_Instagram }</a></li>
                    <li><a href="#">{ Icon_Tiktok }</a></li>
                </div>

                <div className="footer__menu">
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Terms Of Service</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact Us</a></li>
                </div>

                <div className="footer__copyright">
                    © 2022 Floral Love
                </div>
            </div>
        )
    }
}

export default Footer;