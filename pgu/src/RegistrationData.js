import React, {Component} from "react";

export default class RegistrationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,

    };
  }

  render() {
    console.log("editing", this.state.editing);
    return (
      <div>
        <div id="registration-address">
          <h2>Адрес регистрации</h2>
          <div className="info"><h2>Индекс</h2><h3>{this.state.index}</h3></div>
          <div className="info"><h2>Регион</h2><h3>{this.state.region}</h3></div>
          <div className="info"><h2>Район</h2><h3>{this.state.district}</h3></div>
          <div className="info"><h2>Населенный пункт</h2><h3>{this.state.locality}</h3></div>
          <div className="info"><h2>Улица</h2><h3>{this.state.street}</h3></div>
          <div className="info"><h2>Дом</h2><h3>{this.state.house}</h3></div>
        </div>
      </div>
    );
  }
}