import * as React from "react";
import {expect} from "chai";
let assert = require('assert');
import {Simulate, isElementOfType, renderIntoDocument} from "react-addons-test-utils";
import {HeaderNavigation} from "../components/HeaderNavigation";


describe('../components/HeaderNavigation', () => {
  let headerNavigationLinks = {
    a: ["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"],
    logo: "",
    text: ["Госуслуги", "Республики Коми"]
  };

  it('should render', () => {
    const headerNavigation = renderIntoDocument(
      <HeaderNavigation links={headerNavigationLinks}/>
    );

    expect(headerNavigation).toExist;
  });

  it('HeaderNavigation instance is created properly', () => {
    assert.equal(isElementOfType(<HeaderNavigation />, HeaderNavigation), true);
  });
});