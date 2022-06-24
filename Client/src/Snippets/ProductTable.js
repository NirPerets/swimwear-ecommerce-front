import { useEffect } from "react"

function ProductTable(props) {

    useEffect(() => {
        console.log(props.cart)
    }, [])

    return(
        <>
            <table className="product__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map(product => {
                            return(
                            <tr>
                                <td>
                                    <img src={ product.product.media[product.color][0] } />
                                </td>
                                <td className="cart__lineMeta">
                                    <div className="cart__lineTitle heading">{ product.product.title }</div>
                                    <div className="cart__lineVariant heading">{ product.color } - { product.size }</div>
                                </td>
                                <td>
                                    <div className="cart__lineQuantity heading">{ product.quantity }</div>
                                </td>
                                <td>
                                    <div className="cart__lineSubtotal heading">
                                        { product.quantity * product.product.price }
                                    </div>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductTable