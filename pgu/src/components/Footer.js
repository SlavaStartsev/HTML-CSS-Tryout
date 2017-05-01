import React from "react";
import {createLinks} from "./createLinks";

export const Footer = (props) => {
  return (
    <div id="footer_div">
      <div id="triangles_bottom">
      </div>
      <div className="container" id="top">
        <div id="gos_uslugi">
          <img src={props.links.gerb} alt="footer-gerb"/>
          <img src={props.links.gos} id="footer_gos" alt="footer-gos"/>
        </div>
        <div id="contacts">
          <p>{props.links.phoneNumber}</p>
          <p>{props.links.details}</p>
          <p>e-mail: <a href={`mailto:$(props.links.email)`}>{props.links.email}</a></p>
        </div>
      </div>
      <div id="middle">
        <ul>
          {createLinks(props.links.a)}
        </ul>
      </div>
      <div className="container" id="bottom">
        <p>{props.links.copyright}</p>
      </div>
    </div>
  );
};