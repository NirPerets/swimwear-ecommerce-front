import { Component } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../logo.png'
import Icon_User from '../Icons/Icon_User';
import Icon_Search from '../Icons/Icon_Search';
import Icon_Bag from '../Icons/Icon_Bag';
import Icon_Close from '../Icons/Icon_Close';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        searchActive: false
    }

    body = document.querySelector('body')

    openSearch = () => {
        this.props.toggleOverlay(true)
        this.body.style.overflowY = "hidden"
        this.setState({ searchActive : true })
    }

    closeSearch = () => {
        this.props.toggleOverlay(false)
        this.body.style.overflowY = "auto"
        this.setState({ searchActive : false })
    }

    openCart = () => {
        this.body.style.overflowY = "hidden"
        this.props.toggleCart(true)
    }

    openMenu = () => {
        this.body.style.overflowY = "hidden"
        this.props.toggleMenu(true)
    }

    render() {
        return(
            <>
            <div className="header__wrapper">
                <div className="logo_icons">
                    <div className="mobile__hamburger col-lg-3 col-md-3">
                        <button onClick={ this.openMenu } className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </button>
                    </div>

                    <Link to="/" className="logo col-lg-6 col-md-6">
                        <img src={ Logo } />
                    </Link>

                    <div className="icon_bar col-lg-3 col-md-3">
                        <li className='Horizontal_Item'>
                            <a href="#">{ Icon_User }</a>
                        </li>
                        <li className='Horizontal_Item'>
                            <button onClick={ this.openSearch }>{ Icon_Search }</button>
                        </li>
                        <li className='Horizontal_Item'>
                            <button onClick={ this.openCart }>{ Icon_Bag }</button>
                            <div className="header_cartDot"></div>
                        </li>
                    </div>
                </div>
                <div className="navbar">
                    <li className="Horizontal_Item">
                        <a href="#">shop
                            <span className='Header__LinkSpacer'>
                                shop
                            </span>
                        </a>
                    </li>
                    <li className="Horizontal_Item">
                        <a href="#">Our Story
                            <span className='Header__LinkSpacer'>
                                Our Story
                            </span>
                        </a>
                    </li>
                    <li className="Horizontal_Item">
                        <a href="#">Happy Customers
                            <span className='Header__LinkSpacer'>
                            Happy Customers
                            </span>
                        </a>
                    </li>
                    <li className="Horizontal_Item">
                        <a href="#">Contact Us
                            <span className='Header__LinkSpacer'>
                            Contact Us
                            </span>
                        </a>
                    </li>
                </div>
            </div>

            <div className={"search__container" + (this.state.searchActive ? ' open' : '')}>
                <div className="search__block">
                    <div className="search__icon">{ Icon_Search }</div>
                    <input className="search__input" type="text" placeholder="SEARCH..." />
                    <button onClick={ this.closeSearch } className="search__close">{ Icon_Close }</button>
                </div>
            </div>
            </>
        )
    }
}

export default Header;

/*
while(true):
    input = input("Enter a word here:")
    if(str.lower(input) == 'stop'):
        break
    else:
        print(len(input))*/