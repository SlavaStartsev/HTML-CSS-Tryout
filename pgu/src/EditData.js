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
      inn: props.inn,

      index: props.index,
      region: props.region,
      district: props.district,
      locality: props.locality,
      street: props.street,
      house: props.house
    };
  }

  toggleState() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    console.log("editing", this.state.editing);
    let text;
    if (this.state.editing) {
      text = <p>Editing</p>
    }
    return (
      <form action=""></form>
    );
  }
}