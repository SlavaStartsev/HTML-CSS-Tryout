import React from "react";

import {createLinks} from "./createLinks";

export const HeaderNavigation = (props) => {
  return (
    <nav>
      <ul>
        <li><img src={props.links.logo} alt="logo"/>
          <div id="brand_text">
            <h2>{props.links.text[0]}</h2>
            <p>{props.links.text[1]}</p>
          </div>
        </li>
        {createLinks(props.links.a)}
      </ul>
      <div id="triangles_top">
      </div>
    </nav>
  );
};