import './Home.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="homeContent">
                <div className="card">
                    <div className="head">
                        <div className="logo">
                            <img
                            src="https://avatars.mds.yandex.net/get-zen_doc/3630671/pub_6022a64a064ec9351895d55f_6022aa3eff10a04637735189/scale_1200"
                            />
                        </div>
                    </div>
                    <div className="body">
                        <div className="header">
                            <h2>
                                Создай свой плакат
                            </h2>
                            <h4>
                                Подзаголовок с какой-то ну очень важной информацией
                            </h4>
                            <Link to="/template">
                            <a className="button">Создать плакат</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;