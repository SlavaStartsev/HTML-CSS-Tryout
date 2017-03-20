import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <main id="home">
        <h1><span></span></h1>
        <p className="start"><a href="#about">let's get started</a></p>
        <a className="down" href="#about"></a>
      </main>
    );
  }
}
