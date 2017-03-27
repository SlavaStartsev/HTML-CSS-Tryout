import React from "react";

export const ShowData = (props) =>
  <div>
    <div className="data-container" id="personal">
      <div className="edit">
        <h3>Личные данные</h3>
        <button type="submit" onClick={props.toggleState}>Редактировать</button>
      </div>
      <div className="info"><p>Фамилия</p><p>{props.user.surname}</p></div>
      <div className="info"><p>Имя</p><p>{props.user.name}</p></div>
      <div className="info"><p>Отчество</p><p>{props.user.lastname}</p></div>
      <div className="info"><p>Пол</p><p>{props.user.gender}</p></div>
      <div className="info"><p>Дата рождения</p><p>{props.user.dateOfBirth}</p></div>
      <div className="info"><p>СНИЛС</p><p>{props.user.snils}</p></div>
      <div className="info"><p>ИНН</p><p>{props.user.inn}</p></div>
    </div>
    <div className="data-container" id="registration_address">
      <h3>Адрес регистрации</h3>
      <div className="info"><p>Индекс</p><p>{props.user.registrationIndex}</p></div>
      <div className="info"><p>Регион</p><p>{props.user.registrationRegion}</p></div>
      <div className="info"><p>Район</p><p>{props.user.registrationDistrict}</p></div>
      <div className="info"><p>Населенный пункт</p><p>{props.user.registrationLocality}</p></div>
      <div className="info"><p>Улица</p><p>{props.user.registrationStreet}</p></div>
      <div className="info"><p>Дом</p><p>{props.user.registrationHouse}</p></div>
    </div>
    <div className="data-container" id="actual_address">
      <h3>Адрес места жительства</h3>
      <div className="info"><p>Индекс</p><p>{props.user.actualIndex}</p></div>
      <div className="info"><p>Регион</p><p>{props.user.actualRegion}</p></div>
      <div className="info"><p>Район</p><p>{props.user.actualDistrict}</p></div>
      <div className="info"><p>Населенный пункт</p><p>{props.user.actualLocality}</p></div>
      <div className="info"><p>Улица</p><p>{props.user.actualStreet}</p></div>
      <div className="info"><p>Дом</p><p>{props.user.actualHouse}</p></div>
    </div>
    <div className="data-container" id="contacts">
      <h3>Контакты</h3>
      <div className="info"><p>Контактный телефон</p><p>{props.user.phoneNumber}</p></div>
      <div className="info"><p>Мобильный телефон</p><p>{props.user.mobilePhoneNumber}</p></div>
      <div className="info"><p>Электронная почта</p><p>{props.user.email}</p></div>
    </div>
  </div>;