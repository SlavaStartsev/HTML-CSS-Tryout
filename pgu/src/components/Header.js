import React, {Component} from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.links = props.links;
    this.state = {
      linksClicked: 0
    };
  }

  clicker() {
    this.setState({linksClicked: this.state.linksClicked + 1})
  };

  createLinks(e) {
    return e.map((el, i) =>
      <li key={i}>
        <i className={el.icon}></i>
        <a href="#" onClick={this.clicker.bind(this)}>
          <img src={el.src} alt="" id={el.id}/>
          {el.text}
        </a>
      </li>)
  }

  render() {
    return (
      <header>
        <ul className="container">
          {this.createLinks(this.links)}
        </ul>
      </header>
    )
  }
}