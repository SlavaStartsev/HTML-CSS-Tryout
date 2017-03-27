import React from "react";

export const createLinks = (e) =>
  e.map((el, i) => <li key={i}><a className="nav-item" href="#">{el}</a></li>);