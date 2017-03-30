import React from "react";

export const Profile = (props) => {
  let createStats = (e) => e.map((el, i) => <div key={i} className="stats" id={el.id}><p>{el.description}</p>
    <p>{el.value}</p></div>);
  return (
    <div>
      <div id="profile">
        <img src={props.img} alt="avatar"/>
        <h3>Статистика</h3>
        {createStats(props.links)}
      </div>
      <button type="submit">Журнал событий</button>
    </div>);
};