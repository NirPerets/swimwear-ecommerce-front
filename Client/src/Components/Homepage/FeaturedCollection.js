import { Component } from "react";
import products from '../../products'
import ProductItem from "../Global/ProductItem";
import { Link } from 'react-router-dom'

class FeaturedCollection extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        products: []
    }

    componentDidMount() {
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ title : 'swimwear' })
        }

        fetch('/collection', options)
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data.products })
            })
    }

    render() {
        if(this.state.products == null) {
            return(
                <>
                    <div className="loading__wrapper">
                        <div className="lds-ring black"><div></div><div></div><div></div><div></div></div>
                    </div>
                </>
            )
        }

        return(
            <div className="section featured__collection" id="first_section">
                <div className="section__header">
                    <div className="section__subtitle">FEATURED COLLECTION</div>
                    <div className="section__title">Swimwear Collection</div>
                </div>

                <div className="product__grid">
                    {
                        this.state.products.map(product => {
                            return(<ProductItem product={ product } />)
                        })
                    }
                </div>

                <Link to="/collection/swimwear" className="btn btn__primary">View all products</Link>
            </div>
        )
    }
}

export default FeaturedCollection