import './CreatePosterForm.css';

import React, { Component } from "react";

class CreatePosterForm extends Component {

    render() {
        return (
            <form className="posterDetails">
                <div className="cols">
                    <div className="colsItem">
                        <input
                            type="text"
                            name="text1"
                            placeholder="Какой-то текст"
                            onChange={this.props.handleValueChange}
                        />
                        <input
                            type="text"
                            name="text2"
                            placeholder="Какой-то текст"
                            onChange={this.props.handleValueChange}
                        />
                        <input
                            type="text"
                            name="text3"
                            placeholder="Какой-то текст"
                            onChange={this.props.handleValueChange}
                        />
                        <p></p>
                        <input
                            type="url"
                            name="image1"
                            placeholder="Image1 URL"
                            onChange={this.props.handleValueChange}
                        />
                        <input
                            type="url"
                            name="image2"
                            placeholder="Image2 URL"
                            onChange={this.props.handleValueChange}
                        />
                        <input
                            type="url"
                            name="image3"
                            placeholder="Image3 URL"
                            onChange={this.props.handleValueChange}
                        />
                    </div>
                    {/*<div className="colsItem">
                         <input
                            type="url"
                            name="image1"
                            placeholder="Image1 URL"
                            onChange={this.props.handleValueChange}
                        />
                        <input
                            type="url"
                            name="image2"
                            placeholder="Image2 URL"
                            onChange={this.props.handleValueChange}
                        />
                        <input
                            type="url"
                            name="image3"
                            placeholder="Image3 URL"
                            onChange={this.props.handleValueChange}
                        /> 
                    </div>*/}
                </div>
            </form>
        )
    }
}

export default CreatePosterForm;