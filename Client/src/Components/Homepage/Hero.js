import { Component } from "react";
import Icon_ChevronDown from '../../Icons/Icon_ChevronDown'

class Hero extends Component {

    componentDidMount() {
        fetch('/post')
        .then(res => console.log(res))
        .catch(console.log)
    }

    render() {
        return(
            <div className="hero">
                <div className="overlay is_visible"></div>
                <div className="text_block">
                    <div className="subtitle heading">Summer is coming</div>
                    <div className="title heading">2022 Sale</div>
                    <div className="buttons_container">
                        <a className="btn btn__primary">
                            <span>Jewerly</span>
                        </a>
                        <a className="btn btn__primary">
                            <span>Swimwear</span>
                        </a>
                    </div>
                </div>
                
                <div className="slidedown">
                    <button href="#first_section" className="slidedown_button">
                        { Icon_ChevronDown }
                    </button>
                </div>
            </div>
        )
    }
}

export default Hero