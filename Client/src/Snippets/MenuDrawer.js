import { Component } from "react";
import Icon_Close from "../Icons/Icon_Close";
import Icon_Facebook from "../Icons/Icon_Facebook";
import Icon_Instagram from "../Icons/Icon_Instagram";
import Icon_Tiktok from "../Icons/Icon_Tiktok";

class MenuDrawer extends Component {
    state = {
        collapseOpen: false
    }

    body = document.querySelector('body')

    toggleCollapseContent = () => {
        this.setState(prevState => ({
            collapseOpen: !prevState.collapseOpen
        }));
    }

    closeMenu = () => {
        this.props.toggleMenu(false)
        this.body.style.overflowY = "auto"
    }

    render() {
        return(
            <div className={"menu__drawer" + (this.props.menuActive ? ' open' : '')}>
                <div className="menu__heading">
                    <button onClick={ this.closeMenu } className="menu__drawerClose">{ Icon_Close }</button>
                </div>
                <div className="menu_drawerMain">
                    <div className="mobile__menu">
                        <div className="item">
                            <button onClick={ this.toggleCollapseContent } className="collapsible">
                                Shop
                                <div className={"collapsible__icon " + (this.state.collapseOpen ? 'open' : 'closed')}>
                                    <div className="horizontal"></div>
                                    <div className="vertical"></div>
                                </div>
                            </button>
                            <div className={"collapsible_menu" + (this.state.collapseOpen ? ' open' : '')}>
                                <div className="item"><a href="">ALL</a></div>
                                <div className="item"><a href="">Swimwear</a></div>
                                <div className="item"><a href="">Jewerelly</a></div>
                            </div>
                        </div>
                        <div className="item"><a href="#">Our Story</a></div>
                        <div className="item"><a href="#">Happy Customers</a></div>
                        <div className="item"><a href="#">Contact Us</a></div>
                    </div>
                    <div className="mobile__footerMenu">
                        <div className="item"><a href="">FAQs</a></div>
                        <div className="item"><a href="">Sizing Guide</a></div>
                        <div className="item"><a href="">Shipping</a></div>
                        <div className="item"><a href="">Returns & Exchanges</a></div>
                        <div className="item"><a href="">Terms of Service</a></div>
                    </div>
                </div>
                <div className="social__menu">
                    <div className="item"><a href="">{ Icon_Facebook }</a></div>
                    <div className="item"><a href="">{ Icon_Instagram }</a></div>
                    <div className="item"><a href="">{ Icon_Tiktok }</a></div>
                </div>
            </div>
        )
    }
}

export default MenuDrawer