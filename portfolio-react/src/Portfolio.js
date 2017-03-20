import React, {Component} from "react";


import capture_life from "./img/capture_life.png"
import skillfair from "./img/skillfair.png"
import wisdom from "./img/wisdom.png"

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h3>my projects</h3>
        <div className="project">
          <div className="description">
            <h3>First featurette heading.</h3>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </p>
          </div>
          <div className="preview">
            <img src={capture_life} alt="capture_life"/>
          </div>
        </div>
        <hr className="separator"/>
        <div className="project">
          <div className="preview">
            <img src={skillfair} alt="skillfair"/>
          </div>
          <div className="description">
            <h3>Oh yeah, it's that good.</h3>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </p>
          </div>
        </div>
        <hr className="separator"/>
        <div className="project">
          <div className="description">
            <h3>And lastly, this one.</h3>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </p>
          </div>
          <div className="preview">
            <img src={wisdom} alt="wisdom"/>
          </div>
        </div>
      </section>
    );
  }
}
