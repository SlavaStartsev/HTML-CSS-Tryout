import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header";
import {HeaderNavigation} from "./components/HeaderNavigation";
import {Sections} from "./components/Sections";
import {InfoLine} from "./components/InfoLine";
import PersonalData from "./components/PersonalData";
import {Footer} from "./components/Footer";
import "./sass/style.css";

import logo from "./img/logo3.png";
import qr from "./img/download.png";
import gerb from "./img/footer-gerb.png";
import gos from "./img/gosuslugi.png";
import ru from "./img/ru.png";
import komi from "./img/favicon.ico";

let headerLinks = [
  {
    icon: "fa fa-eye",
    text: "версия для слабовидящих"
  },
  {
    icon: "fa fa-map-marker",
    text: " мое местоположение: сыктывкар"
  },
  {
    icon: "fa fa-user",
    text: "старцев вячеслав александрович"
  },
  {
    icon: "",
    text: "выход"
  },
  {
    src: ru,
    id: "ru",
    text: "flag"
  },
  {
    src: komi,
    id: "komi",
    text: "flag"
  }
];
let headerNavigationLinks = {
  a: ["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"],
  logo: logo,
  text: ["Госуслуги", "Республики Коми"]
};
let infoLineLinks = {
  placeholder: "Например, предоставление земельного участка",
  qr: qr,
  mobile: ["Мобильная", "версия", "портала"],
  phoneNumber: "8(800)200-82-12",
  details: "Звонок по России бесплатный"
};
let sectionLinks = ["Избранные услуги", "Заявки", "Жалобы", "Личные данные", "Документы", "Платежи", "Транспорт", "Личный кабинет пациента"];
let footerLinks = {
  gerb: gerb,
  gos: gos,
  a: ["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"],
  phoneNumber: "8(800)200-82-12",
  details: "ЗВОНОК ПО РОССИИ БЕСПЛАТНЫЙ",
  email: "cto@mydocuments11.ru",
  copyright: "© 2013 Портал государственных и муниципальных услуг Республики Коми"
};

ReactDOM.render(
  <div>
    <Header links={headerLinks}/>
    <HeaderNavigation links={headerNavigationLinks}/>
    <InfoLine links={infoLineLinks}/>
    <Sections links={sectionLinks}/>
    <PersonalData/>
    <Footer links={footerLinks}/>
  </div>,
  document.getElementById('root')
);