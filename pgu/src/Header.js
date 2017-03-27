import React, {Component} from "react";

import {createLinks} from "./createLinks";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul className="container">
          {createLinks(this.props.links)}
        </ul>
      </header>
    );
  }
}