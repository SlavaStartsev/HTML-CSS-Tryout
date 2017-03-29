import React from "react";


export const Header = (props) => {
  let createLinks = (e) =>
    e.map((el, i) => el.text === "flag" ? <li key={i}><img src={el.src} alt={el.text} id={el.id}/></li> : <li key={i}><i className={el.icon}></i><a href="#">{el.text}</a></li>);

  return (
    <header>
      <ul className="container">
        {createLinks(props.links)}
      </ul>
    </header>
  );
};