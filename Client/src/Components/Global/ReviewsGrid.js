import { Component } from "react";
import Review from "../../Snippets/Review";
import Icon_Star from '../../Icons/Icon_Star'
import Icon_Equalizer from "../../Icons/Icon_Equalizer";

var reviews = [
    {
        name: 'Katy Rosey',
        image: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
        date: '02/10/2022',
        stars: 5,
        text: 'Thank you, The shipment is so fast'
    },
    {
        name: 'Nicky Minaj',
        image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80',
        date: '12/04/2022',
        stars: 5,
        text: "Just arrived! I'm so exciting! THX"
    },
    {
        name: 'Sarah Dohin',
        image: 'https://images.unsplash.com/photo-1581588636584-5c447d2c9d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80',
        date: '05/04/2022',
        stars: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
    },
    {
        name: 'Alice Beverly',
        image: 'https://images.unsplash.com/photo-1581588618162-958d290af524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: '23/03/2022',
        stars: 5,
        text: 'So beautiful, im so happy and thankful. thank you love <3'
    },
    {
        name: 'Shakira',
        image: 'https://images.unsplash.com/photo-1566765830178-09800de1df6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: '23/03/2022',
        stars: 5,
        text: 'So beautiful, im so happy and thankful. thank you love <3'
    },
    {
        name: 'Madonna',
        image: 'https://images.unsplash.com/photo-1606792109963-7b34205b1333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: '23/03/2022',
        stars: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        name: 'Cardi B',
        image: 'https://images.unsplash.com/photo-1602911429311-1c56a6c42a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: '23/03/2022',
        stars: 5,
        text: 'many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,'
    }
]

class ReviewsGrid extends Component {
    state = {
        starAvg: 0
    }

    componentDidMount() {
        this.setStarAvg()
    }

    setStarAvg = () => {
        let avg = 0
        reviews.map(review => {
            avg += review.stars
        })
        this.setState({ starAvg: avg })
    }

    render() {
        return(
            <>
            <div className="review__gridContainer">
                <div className="review__gridHeader">
                    <div className="review__gridTotal">
                        <div className="star__badge">
                            <div className={"star" + (this.state.starAvg > 0.5 ? ' active' : '')}>{ Icon_Star }</div>
                            <div className={"star" + (this.state.starAvg > 1.5 ? ' active' : '')}>{ Icon_Star }</div>
                            <div className={"star" + (this.state.starAvg > 2.5 ? ' active' : '')}>{ Icon_Star }</div>
                            <div className={"star" + (this.state.starAvg > 3.5 ? ' active' : '')}>{ Icon_Star }</div>
                            <div className={"star" + (this.state.starAvg > 4.5 ? ' active' : '')}>{ Icon_Star }</div>
                        </div>
                        <div className="review__count">{ reviews.length } Reviews</div>
                    </div>
                    <div className="review__gridSort">
                        <button className="btn btn__secondery review__gridButton">Write a review</button>
                        <button className="btn btn__secondery review__gridButton icon__btn">{ Icon_Equalizer }</button>
                    </div>
                </div>
                <div className="review__grid">
                    {
                        reviews.map((review, index) => {
                            return(<Review key={ index }  review={review} />)
                        })
                    }
                </div>
            </div>

            </>
        )
    }
}

export default ReviewsGrid