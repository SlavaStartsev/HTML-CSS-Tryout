import React from "react";

import {createLinks} from "./createLinks";

export const HeaderNavigation = (props) => {
  return (
    <nav>
      <ul>
        <li><img src={props.img} alt="logo"/></li>
        <li><h2>{props.brand[0]}</h2><p>{props.brand[1]}</p></li>
        {createLinks(props.links)}
      </ul>
      <div id="triangles_top">
      </div>
    </nav>
  );
};