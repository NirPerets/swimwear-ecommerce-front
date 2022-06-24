import { Component } from "react";
import Icon_Check from '../Icons/Icon_Check'
import Icon_Star from '../Icons/Icon_Star'

class Review extends Component {
    constructor(props) {
        super(props)
    }

    starBadge = () => {
        const items = []
        for(let i=0; i < this.props.stars; i++) {
            items.push(<div className="star">{ Icon_Star }</div>)
        }
        return items
    }

    render() {
        return(
            <div className="review">
                <img src={ this.props.review.image } />
                <div className="review__body">
                    <div className="review__title heading">
                        { this.props.review.name }
                        <span className="verifed_badge">{ Icon_Check }</span>
                    </div>
                    <div className="review__date heading">{ this.props.review.date }</div>
                    <div className="review__badge">
                        { this.starBadge }
                    </div>
                    <div className="review__text">{ this.props.review.text }</div>
                </div>
            </div>
        )
    }
}

export default Review