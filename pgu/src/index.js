import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import {HeaderNavigation} from "./HeaderNavigation";
import {Sections} from "./Sections";
import Content from "./Content";
import PersonalData from "./PersonalData";
import {Footer} from "./Footer";
import "./sass/style.css";
import logo from "./img/logo3.png";

ReactDOM.render(
  <div>
    <Header
      links={["версия для слабовидящих", " мое местоположение: сыктывкар", "старцев вячеслав александрович", "выход", "flag", "flag"]}/>
    <HeaderNavigation img={logo} brand={["Госуслуги", "Республики Коми"]}
                      links={["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"]}/>
    <Content/>
    <Sections/>
    <PersonalData/>
    <Footer links={["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"]}/>
  </div>,
  document.getElementById('root')
);