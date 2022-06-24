import { Component } from "react";

class AddCollection extends Component {
    render() {
        return (
            <>
            <div className="page__heading">
                <div className="page__title">Add Collection</div>
                <div className="btn btn__primary">Return</div>
            </div>

            <div className="add__collectiontWrapper">
                <div className="add__collectionMain">
                    <div className="page__block">
                        <div className="page__blockBody">
                            <div className="input__block">
                                <div className="input__label">Title</div>
                                <input className="input" placeholder="Short sleeve t-shirt" />
                            </div>

                            <div className="input__block">
                                <div className="input__label">Description</div>
                                <textarea className="textarea" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add__collectionSecondery">
                    <div className="page__block">
                        <div className="page__blockHeading">Collection Image</div>
                        <div className="page__blockBody">
                            <div className="input__block">
                                <input className="input"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            </>
        )
    }
}

export default AddCollection