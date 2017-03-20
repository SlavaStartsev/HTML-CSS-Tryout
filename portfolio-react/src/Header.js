import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <nav>
          <ul>
            <li className="brand"><h1>Slava</h1></li>
            <li className="nav-item"><a href="#home">home</a></li>
            <li className="nav-item"><a href="#about">about</a></li>
            <li className="nav-item"><a href="#portfolio">portfolio</a></li>
            <li className="nav-item"><a href="#contacts">contacts</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
