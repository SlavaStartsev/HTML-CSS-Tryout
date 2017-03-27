import React, {Component} from "react";

export default class Content extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <ul>
          <li><input id="query-input" autocomplete="off" type="search" name="query" placeholder="Например, предоставление земельного участка" /></li>
          <li><img/></li>
          <li><a href="#">Мобильная версия сайта</a></li>
          <li><p>8(800)200-82-12</p><span>Звонок по России бесплатный</span></li>
        </ul>
      </div>
    );
  }
}