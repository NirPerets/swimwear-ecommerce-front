import { useState } from "react"
import AdminInput from "../Snippets/AdminInput"

function AddProduct() {
    const [title, setTitle] = useState(0)
    const [description, setDescription] = useState(0)
    const [media, setMedia] = useState([])
    const [price, setPrice] = useState(0)
    const [comparePrice, setComparePrice] = useState(0)
    const [sku, setSku] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [vendor, setVendor] = useState(0)
    const [collections, setCollections] = useState([])
    const [sizes, setSizes] = useState([])
    const [colors, setColors] = useState([])
    const [showButtons, setShowButtons] = useState(0)

    function submitProduct(e) {
        e.preventDefault()

    }

    return (
        <>
        <div className="page__heading">
            <div className="page__title">Add Product</div>
            <div className="btn btn__primary">Return</div>
        </div>

        <form onSubmit={ submitProduct }>
            <div className="add__productWrapper">
                <div className="add__productMain">
                    <div className="page__block">
                        <div className="page__blockBody">
                            <AdminInput label="Title" placeholder="Short sleeve t-shirt" value={ title } setInput={ setTitle } showButtons={ setShowButtons } />

                            <div className="input__block">
                                <div className="input__label">Description</div>
                                <textarea value={ description } className="textarea" onChange={(e) => {
                                    setDescription(e.target.value) 
                                    setShowButtons(true)
                                }} />
                            </div>
                        </div>
                    </div>

                    <div className="page__block">
                        <div className="page__blockHeading">Media</div>
                        <div className="page__blockBody">
                            <AdminInput label="Image 1" value={ title } setInput={ setTitle } showButtons={ setShowButtons } />
                            <AdminInput label="Image 2" value={ title } setInput={ setTitle } showButtons={ setShowButtons } />
                            <AdminInput label="Image 3" value={ title } setInput={ setTitle } showButtons={ setShowButtons } />
                        </div>
                    </div>

                    <div className="page__block">
                        <div className="page__blockHeading">Pricing</div>
                        <div className="page__blockBody">
                            <AdminInput label="Price" placeholder="0.00" value={ price } setInput={ setPrice } showButtons={ setShowButtons } />
                            <AdminInput label="Compare at price" placeholder="0.00" value={ comparePrice } setInput={ setComparePrice } showButtons={ setShowButtons } />
                        </div>
                    </div>

                    <div className="page__block">
                        <div className="page__blockHeading">Inventory</div>
                        <div className="page__blockBody">
                            <AdminInput label="SKU (Stock Keeping Unit)" placeholder="AG67XCV3" value={ sku } setInput={ setSku } showButtons={ setShowButtons } />
                            <AdminInput label="Quantity" placeholder="0" value={ quantity } setInput={ setQuantity } showButtons={ setShowButtons } />
                        </div>
                    </div>

                    <div className="page__block">
                        <div className="page__blockHeading">
                            Options
                            <div className="page__blockDescription">
                                Seperate option with comas
                            </div>
                        </div>

                        <div className="page__blockBody">
                            <AdminInput label="Colors" placeholder="Pink,Brown,Red" value={ colors } setInput={ setColors } showButtons={ setShowButtons } />
                            <AdminInput label="Sizes" placeholder="S,M,L" value={ sizes } setInput={ setSizes } showButtons={ setShowButtons } />
                        </div>
                    </div>
                </div>

                <div className="add__productSecondery">
                    <div className="page__block">
                        <div className="page__blockHeading">Product organization</div>
                        <div className="page__blockBody">
                            <AdminInput label="Vendor" value={ vendor } setInput={ setVendor } showButtons={ setShowButtons } />
                            <AdminInput label="Collections" value={ collections } setInput={ setCollections } showButtons={ setShowButtons } />
                        </div>
                    </div>
                </div>
            </div> 

            <div className={"form__buttonWrapper" + (showButtons ? ' active' : '')}>
                <div className="form__buttonTitle heading">Unsaved product</div>
                <div className="form__buttons">
                    <button type="submit" className="btn btn__primary">Save</button>
                </div>
            </div>
        </form>   
        </>
    )
}

export default AddProduct