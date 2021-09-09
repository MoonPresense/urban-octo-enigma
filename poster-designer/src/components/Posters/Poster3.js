import './Posters.css';

import React, { Component } from 'react';

class Poster3 extends Component {
    render() {
        return (

            <div className="main">

                <div className="body">

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

                </div>

            </div>

        )
    }
}

export default Poster3;
