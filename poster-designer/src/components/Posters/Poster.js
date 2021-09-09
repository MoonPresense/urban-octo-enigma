import './Posters.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Poster extends Component {
    render() {

        const hasText1 = this.props.text1;
        const hasText2 = this.props.text2;
        const hasText3 = this.props.text3;

        const hasImg1 = this.props.image1;
        const hasImg2 = this.props.image2;
        const hasImg3 = this.props.image3;

        return (

            <div className="main">

                <div className="body">
                    {this.props.idPoster === 1 && (
                        <div id="poster1">
                            <div className="image1">
                            {hasImg1 ?
                                <img
                                    id="image1"
                                    src={this.props.image1}
                                    alt=""
                                />
                                : <img
                                id="image1"
                                src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                alt=""
                            />}
                            </div>
                            <div className="image2">
                            {hasImg2 ?
                                <img
                                    id="image2"
                                    src={this.props.image2}
                                    alt=""
                                />
                                : <img
                                id="image2"
                                src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                alt=""
                            />}
                            </div>
                            <div className="image3">
                            {hasImg3 ?
                                <img
                                    id="image3"
                                    src={this.props.image3}
                                    alt=""
                                />
                                : <img
                                id="image3"
                                src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                alt=""
                            />}
                            </div>
                            <div className="text1">
                                {hasText1 ?
                                    <span className="text">{this.props.text1}</span>
                                    : 'Какой-то невнятный текст, который всё равно поменяют'}
                            </div>
                            <div className="text2">
                                {hasText2 ?
                                    <span className="text">{this.props.text2}</span>
                                    : 'Очередной невнятный текст, который всё равно поменяют'}
                            </div>
                            <div className="text3">
                                {hasText3 ?
                                    <span className="text">{this.props.text3}</span>
                                    : 'Ну не стихи же мне сюда вставлять. Как-то лень'}
                            </div>
                        </div>
                    )}
                    {this.props.idPoster === 2 && (
                        <div id="poster2">
                            <div className="image1">
                                <img
                                    id="image1"
                                    src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="image2">
                                <img
                                    id="image2"
                                    src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="text1">
                                <span class="text">Какой-то невнятный текст, который всё равно поменяют</span>
                            </div>
                            <div className="text2">
                                <span class="text">Очередной невнятный текст, который всё равно поменяют</span>
                            </div>
                        </div>
                    )}
                    {this.props.idPoster === 3 && (
                        <div id="poster3">
                            <div className="text1">
                                <span class="text">Какой-то невнятный текст, который всё равно поменяют</span>
                            </div>
                            <div className="image1">
                                <img
                                    id="image1"
                                    src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="image2">
                                <img
                                    id="image2"
                                    src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="image3" style={{ maxHeight: "90%" }}>
                                <img
                                    id="image3"
                                    src="https://javasea.ru/uploads/posts/2020-02/1580744833_anime-devushka-s-goryachim-shokoladom.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </div>

            </div>

        )
    }
}

export default Poster;

Poster.propTypes = {
    idPoster: PropTypes.oneOf([1, 2, 3]).isRequired
};