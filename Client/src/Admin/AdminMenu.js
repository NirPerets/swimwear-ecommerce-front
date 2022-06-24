import { Component } from "react";
import Admin from "./Admin";
import Icon_Dashboard from "../Icons/Icon_Dashboard";
import Icon_Product from "../Icons/Icon_Product";
import Icon_Analytics from "../Icons/Icon_Analytics";
import Icon_Settings from "../Icons/Icon_Settings";
import Icon_Marketing from "../Icons/Icon_Marketing";
import Icon_Orders from "../Icons/Icon_Orders";
import Icon_Discount from "../Icons/Icon_Discount";
import { Link } from 'react-router-dom'

class AdminMenu extends Component {
    render() {
        return(
            <div className="sidebar">
                <div className="sidebar__header">
                    Floral Love admin
                </div>

                <div className="sidebar__body">
                    <div className="sidebar__menu">
                        <div className="sidebar_menuBlock">
                            <div className="sidebar__menuHeader">Overview</div>
                            <div className="item active"><a href="">{ Icon_Dashboard } Dashboard</a></div>
                            <div className="item"><a href="">{ Icon_Orders } Orders</a></div>
                            <div className="item"><a href="">{ Icon_Product } Products</a></div>
                        </div>
                        <div className="sidebar_menuBlock">
                            <div className="sidebar__menuHeader">Business</div>
                            <div className="item"><a href="">{ Icon_Analytics } Analytics</a></div>
                            <div className="item"><a href="">{ Icon_Marketing } Marketing</a></div>
                            <div className="item"><a href="">{ Icon_Discount } Discounts</a></div>
                        </div>

                    </div>
                </div>

                <div className="sidebar__footer">
                    <div className="item"><a href="">{ Icon_Dashboard } Log Out</a></div>
                    <div className="item"><a href="">{ Icon_Settings } Settings</a></div>
                </div>
            </div>
        )
    }
}

export default AdminMenu