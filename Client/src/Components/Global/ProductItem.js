import { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.product)
    }

    render() {
        if(this.props.product == null) {
            return(
                <>
                    <div className="loading__wrapper">
                        <div className="lds-ring black"><div></div><div></div><div></div><div></div></div>
                    </div>
                </>
            )
        }
        
        return(
            <Link to={"/product/" + this.props.product.sku } className="product__item">
                <div className="product__thumbnail">
                    <img className="thumbnail first_thumb" src={ Object.values(this.props.product.media)[0][0] } />
                    <img className="thumbnail second_thumb" src={ Object.values(this.props.product.media)[0][1] } />
                </div>

                <div className="product__title heading">
                    { this.props.product.title }
                </div>

                <div className="product__colors">
                    {
                        this.props.product.variants[1].options.map(color => {
                            return(
                                <div className={"product__colorCircle " + color}></div>
                            )
                        })
                    }
                </div>

                <div className="product__price">
                    ${ this.props.product.price }
                </div>
            </Link>
        )
    }
}

export default ProductItem