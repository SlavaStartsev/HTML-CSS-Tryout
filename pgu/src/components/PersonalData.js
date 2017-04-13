import React, {Component} from "react";

import {ShowData} from "./ShowData";
import {Profile} from "./Profile";

export default class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.profileLinks = props.profileLinks;
    this.img = props.img;
    this.state = {
      editing: false,
      surname: "Старцев",
      name: "Вячеслав",
      lastname: "Александрович",
      gender: props.gender,
      dateOfBirth: props.dateOfBirth,
      snils: props.snils,
      inn: props.inn,

      registrationIndex: props.registrationIndex,
      registrationRegion: props.registrationRegion,
      registrationDistrict: props.registrationDistrict,
      registrationLocality: props.registrationLocality,
      registrationStreet: props.registrationStreet,
      registrationHouse: props.registrationHouse,

      actualIndex: props.actualIndex,
      actualRegion: props.actualRegion,
      actualDistrict: props.actualDistrict,
      actualLocality: props.actualLocality,
      actualStreet: props.actualStreet,
      actualHouse: props.actualHouse,

      phoneNumber: props.phoneNumber,
      mobilePhoneNumber: props.mobilePhoneNumber,
      email: props.email
    };
  }

  toggleState() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    let profile = <Profile links={this.props.profileLinks} img={this.props.img}/>;
    let content;
    if (this.state.editing) {
      content = (
        <div className="container personal-data">
          {profile}
          <div>
            <div className="data-container" id="personal_data">
              <div className="edit">
                <h3>Личные данные</h3>
                <button id="btn_back" onClick={this.toggleState.bind(this)}>Назад</button>
              </div>
              <div className="edit" id="gender">
                Пол
                <select value={this.state.gender} onChange={e => this.setState({gender: e.target.value})}>
                  <option value=" " disabled selected>....Укажите пол</option>
                  <option value="Мужской">Мужской</option>
                  <option value="Женскиий">Женскиий</option>
                </select>
              </div>
              <div className="edit" id="date_of_birth">
                Дата рождения
                <input type="date" value={this.state.dateOfBirth}
                       onChange={e => this.setState({dateOfBirth: e.target.value})}/>
              </div>
              <div className="edit" id="snils">
                СНИЛС
                <input type="text" value={this.state.snils}
                       onChange={e => this.setState({snils: e.target.value.substring(0, 11)})}/>
              </div>
              <div className="edit" id="inn">
                ИНН
                <input type="text" value={this.state.inn}
                       onChange={e => this.setState({inn: e.target.value.substring(0, 11)})}/>
              </div>
            </div>
            <div className="data-container" id="registration_data">
              <h3>Адрес регистрации</h3>
              <div className="edit" id="registration_index">
                Индекс
                <input type="text" value={this.state.registrationIndex}
                       onChange={e => this.setState({registrationIndex: e.target.value.substring(0, 6)})}/>
              </div>
              <div className="edit" id="registration_region">
                Регион
                <input type="text" value={this.state.registrationRegion}
                       onChange={e => this.setState({registrationRegion: e.target.value})}/>
              </div>
              <div className="edit" id="registration_district">
                Район
                <input type="text" value={this.state.registrationDistrict}
                       onChange={e => this.setState({registrationDistrict: e.target.value})}/>
              </div>
              <div className="edit" id="registration_locality">
                Населенный пункт
                <input type="text" value={this.state.registrationLocality}
                       onChange={e => this.setState({registrationLocality: e.target.value})}/>
              </div>
              <div className="edit" id="registration_street">
                Улица
                <input type="text" value={this.state.registrationStreet}
                       onChange={e => this.setState({registrationStreet: e.target.value})}/>
              </div>
              <div className="edit" id="registrationHouse">
                Дом
                <input type="text" value={this.state.registrationHouse}
                       onChange={e => this.setState({registrationHouse: e.target.value})}/>
              </div>
            </div>
            <div className="data-container" id="actual_data">
              <h3>Адрес места жительства</h3>
              <div className="edit" id="actual_index">
                Индекс
                <input type="text" value={this.state.actualIndex}
                       onChange={e => this.setState({actualIndex: e.target.value.substring(0, 6)})}/>
              </div>
              <div className="edit" id="actual_region">
                Регион
                <input type="text" value={this.state.actualRegion}
                       onChange={e => this.setState({actualRegion: e.target.value})}/>
              </div>
              <div className="edit" id="actual_district">
                Район
                <input type="text" value={this.state.actualDistrict}
                       onChange={e => this.setState({actualDistrict: e.target.value})}/>
              </div>
              <div className="edit" id="actual_locality">
                Населенный пункт
                <input type="text" value={this.state.actualLocality}
                       onChange={e => this.setState({actualLocality: e.target.value})}/>
              </div>
              <div className="edit" id="actual_street">
                Улица
                <input type="text" value={this.state.actualStreet}
                       onChange={e => this.setState({actualStreet: e.target.value})}/>
              </div>
              <div className="edit" id="actualHouse">
                Дом
                <input type="text" value={this.state.actualHouse}
                       onChange={e => this.setState({actualHouse: e.target.value})}/>
              </div>
            </div>
            <div className="data-container" id="contacts_data">
              <h3>Контакты</h3>
              <div className="edit" id="phone_number">
                Конактный телефон
                <input type="text" value={this.state.phoneNumber}
                       onChange={e => this.setState({phoneNumber: e.target.value})}/>
              </div>
              <div className="edit" id="mobile_phone_number">
                Мобильный телефон
                <input type="text" value={this.state.mobilePhoneNumber}
                       onChange={e => this.setState({mobilePhoneNumber: e.target.value})}/>
              </div>
              <div className="edit" id="email">
                Электронная почта
                <input type="email" value={this.state.email}
                       onChange={e => this.setState({email: e.target.value})}/>
              </div>
            </div>
          </div>
        </div>);
    } else {
      content = (
        <div className="container personal-data">
          {profile}
          <ShowData toggleState={this.toggleState.bind(this)} user={this.state}/>
        </div>
      );
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}