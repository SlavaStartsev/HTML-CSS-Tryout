import React from "react";

import {createLinks} from "./createLinks";

export const Sections = (props) =>
  <div id="sections-div">
    <ul>
      {createLinks(props.links)}
    </ul>
  </div>;