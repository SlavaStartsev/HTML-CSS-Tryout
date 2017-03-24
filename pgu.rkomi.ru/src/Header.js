import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><a href="#">Версия для слабовидящих</a></li>
                    <li><a href="#">Мое местоположение</a></li>
                    <li><a href="#">Старцев Вячеслав Александрович</a> / <a href="#">Выход</a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        );
    }
}