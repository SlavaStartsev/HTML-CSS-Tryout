import React from "react";
import {createLinks} from "./createLinks";

export const Footer = (props) =>
  <div id="footer_div">
    <div id="triangles_bottom">
    </div>
    <div className="container" id="top">
      <img src={require("./img/footer-gerb.png")} alt="footer-gerb"/>
      <img src={require("./img/gosuslugi.png")} id="footer_gos" alt="footer-gos"/>
      <p>8(800)200-82-12</p>
      <p>ЗВОНОК ПО РОССИИ БЕСПЛАТНЫЙ</p>
      <p>e-mail: <a href="mailto:cto@mydocuments11.ru">cto@mydocuments11.ru</a></p>
    </div>
    <div id="middle">
      <ul>
        {createLinks(props.links)}
      </ul>
    </div>
    <div className="container" id="bottom">
      <p>© 2013 Портал государственных и муниципальных услуг Республики Коми</p>
    </div>
  </div>