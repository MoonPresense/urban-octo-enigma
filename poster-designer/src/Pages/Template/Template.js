import "./Template.css";

import Slider from "../../components/Slider/Slider";
import Poster from "../../components/Posters/Poster";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Template extends Component {
  state = {
    activeIndexPoster: 0,
  }; 

  setActiveIndexPoster = (index) => {
    this.setState({ activeIndexPoster: index });
  };

  choosePoster = () => {
    this.props.history.push("/editor", {
      posterId: this.state.activeIndexPoster
    });
  };

  render() {
    return (
      <div className="templateBody">
        <Link to="/">
          <a className="button" href="../Home/Home.js">
            Назад
          </a>
        </Link>
        <h2>Выберите шаблон</h2>
        <Slider
          activeIndex={this.state.activeIndexPoster}
          changeActiveIndex={this.setActiveIndexPoster}
        >
          <div
            className="sliderPoster"
            style={{ marginLeft: "25%" }}
            
          >
            <Poster idPoster={1} />
          </div>
          <div className="sliderPoster">
            <Poster idPoster={2} />
          </div>
          <div className="sliderPoster">
            <Poster idPoster={3} />
          </div>
        </Slider>
        <div className="button">
          {/* <button title="Выбрать шаблон" onClick={this.choosePoster} > */}
          <a className="button" onClick={this.choosePoster}>Выбрать шаблон</a>
          {/* </button> */}
        </div>
      </div>
    );
  }
}

export default Template;