import React from "react";

export const InfoLine = (props) => {
  return (
    <div id="content-wrapper">
      <ul>
        <li>
          <input id="query-input" autoComplete="off" type="search" name="query"
                 placeholder={props.links.placeholder}/>
          <i className="fa fa-search">
          </i>
        </li>
        <li id="mobile">
          <img src={props.links.qr} alt="qr"/>
          <a href="#">{props.links.mobile.map((e, i) => <p key={i}>{e}</p>)}</a>
        </li>
        <li><p>{props.links.phoneNumber}</p><span>{props.links.details}</span></li>
      </ul>
    </div>
  );
};
