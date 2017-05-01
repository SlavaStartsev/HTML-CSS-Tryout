import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import {HeaderNavigation} from "../components/HeaderNavigation";

describe('../components/HeaderNavigation', () => {
  let headerNavigationLinks = {
    a: ["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"],
    logo: "",
    text: ["Госуслуги", "Республики Коми"]
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HeaderNavigation links={headerNavigationLinks}/>
    );
  });
  it('renders', () => {
    expect(wrapper.name()).to.equal('nav');
    expect(wrapper).to.be.ok;
  });

  it('has children', () => {
    expect(wrapper.children()).to.have.lengthOf(2);
    //or
    // expect(wrapper.children().length).to.equal(2);
  });

  it('has links', () => {
    expect(wrapper.find('ul > li').first().text()).to.contain(headerNavigationLinks.text[0]);
    expect(wrapper.find('ul > li').first().text()).to.contain(headerNavigationLinks.text[1]);
    expect(wrapper.find('ul > li')).to.have.lengthOf(headerNavigationLinks.a.length + 1);
    wrapper.find('ul > li > a').forEach((e, i) => {
      expect(e.text()).to.equal(headerNavigationLinks.a[i])
    });
  });
});