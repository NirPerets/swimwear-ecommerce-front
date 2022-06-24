import { useEffect, useState } from 'react'
import { useParams } from "react-router";
import ProductItem from './Global/ProductItem'
import Newsletter from './Homepage/Newsletter'
import OurStory from './Homepage/OurStory'

function Collection() {
    let { title } = useParams()
    const [collectionTitle, setCollectionTitle] = useState()
    const [collectionProducts, setCollectionProducts] = useState()

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ title : title })
        }

        fetch('/collection', options)
            .then(response => response.json())
            .then(data => {
                setCollectionTitle(data.title)
                setCollectionProducts(data.products)
            })
    }, [])

    if(collectionProducts === undefined) {
        return(
            <div className="loading__wrapper">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        ) 
     }

    return (
        <>
            <div className="collection__wrapper">
                <div className="collection__heading heading">{ collectionTitle }</div>
                <div className="collection__sort"></div>
                <div className="collection__grid">
                    {
                        collectionProducts.map(product => {
                            return(
                                <ProductItem product={ product } />
                            )
                        })
                    }
                </div>
            </div>
            
            <OurStory />
            <Newsletter />
        </>
    )
}

export default Collection