import './Editor.css';
import axios from "axios";
import { saveAs } from "file-saver";

import React, { Component } from "react";
import Poster from "../../components/Posters/Poster";
import CreatePosterForm from "../../components/CreatePosterForm/CreatePosterForm";
import { Link } from "react-router-dom";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePoster: this.props.location.state.posterId
    };
  }

  state = {
    text1: '',
    text2: '',
    text3: '',
    image1: '',
    image2: '',
    image3: '',
  };

  // Change state based on values entered
  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="editorContent">
        <div className="editorHeader"></div>

        <div className="editorBody">

          <p>
            <Link to="/template">
              <a className="button">К выбору шаблона</a>
            </Link>
          </p>

          <div className="leftCol">

            <body>

              {/* <Link to="/template">
              <button>К выбору шаблона</button>
              <a className="button">К выбору шаблона</a>
            </Link> */}

              <Poster
                text1={this.state.text1}
                text2={this.state.text2}
                text3={this.state.text3}

                image1={this.state.image1}
                image2={this.state.image2}
                image3={this.state.image3}

                idPoster={this.state.activePoster}
              />
            </body>
          </div>

          <div className="rightCol">
            <CreatePosterForm handleValueChange={this.handleValueChange} />
          </div>
          <button onClick={this.createAndDownloadPdf}>Download PDF</button>

        </div>
      </div>
    );
  }
}

export default Editor;