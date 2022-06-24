import { useEffect, useState } from "react";

function ProductMedia(props) {
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(() => {
        console.log(props.product)
    }, [])

    if(props.product.media[props.activeColor] === undefined) {
        return(
            <div className="loading__wrapper">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return(
        <div className="product__media">
            <div className="product__thumbnails_wrapper">
                <div className="product__thumbnails">
                    {
                        props.product.media[props.activeColor].map((thumbnail, index) => {
                            return(
                                <button key={ index } onClick={ () => setSelectedImage(index) } className={"thumbnail" + (selectedImage == index ? ' active': '')} >
                                    <img src={ thumbnail } />
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <div className="product__images">
            {
                    props.product.media[props.activeColor].map((image, index) => {
                        return(
                            <div key={ index } id={ 'Media' +  index } className={"product__image" + (selectedImage ==  index ? ' active': '')} >
                                <img src={ image } />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductMedia