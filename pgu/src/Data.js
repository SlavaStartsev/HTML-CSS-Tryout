import React, {Component} from "react";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      surname: "Старцев",
      name: "Вячеслав",
      lastname: "Александрович",
      gender: props.gender,
      dateOfBirth: props.dateOfBirth,
      snils: props.snils,
      inn: props.inn
    };
  }

  toggleState() {
    this.setState({editing: true});
  }

  render() {
    console.log("editing", this.state.editing);
    return (
      <div>
        <button onClick={this.toggleState.bind(this)}>Редактировать</button>
        <div id="personal-data">
          <h2>Личные данные</h2>
          <div className="info"><h2>Фамилия</h2><h3>{this.state.surname}</h3></div>
          <div className="info"><h2>Имя</h2><h3>{this.state.name}</h3></div>
          <div className="info"><h2>Отчество</h2><h3>{this.state.lastname}</h3></div>
          <div className="info"><h2>Пол</h2><h3>{this.state.gender}</h3></div>
          <div className="info"><h2>Дата рождения</h2><h3>{this.state.dateOfBirth}</h3></div>
          <div className="info"><h2>СНИЛС</h2><h3>{this.state.snils}</h3></div>
          <div className="info"><h2>ИНН</h2><h3>{this.state.inn}</h3></div>
        </div>
      </div>
    );
  }
}