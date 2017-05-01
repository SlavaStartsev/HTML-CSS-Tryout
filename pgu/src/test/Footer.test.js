import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import {Footer} from "../components/Footer";
import gerb from "../img/footer-gerb.png";
import gos from "../img/gosuslugi.png";

describe('../components/Footer', () => {
  let footerLinks = {
    gerb: gerb,
    gos: gos,
    a: ["Главная", "Поиск", "Куда обратиться", "Вопросы и ответы", "Новости", "Справка"],
    phoneNumber: "8(800)200-82-12",
    details: "ЗВОНОК ПО РОССИИ БЕСПЛАТНЫЙ",
    email: "cto@mydocuments11.ru",
    copyright: "© 2013 Портал государственных и муниципальных услуг Республики Коми"
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Footer links={footerLinks}/>
    );
  });

  it('renders', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('has children', () => {
    expect(wrapper.find('#footer_div').children().length).to.equal(4);
  });

  it('has links from props created right', () => {
    wrapper.find('#middle > ul').children().map(e => e.find('a')).forEach((e, i) => {
      expect(e.props().href).to.equal('#');
      expect(e.hasClass('nav-item')).to.equal(true); //same as below
      expect(e.props().className).to.equal('nav-item');
      expect(e.text()).to.contain(footerLinks.a[i]);
    });
    expect(wrapper.find('#middle > ul').children()).to.have.lengthOf(footerLinks.a.length);
  });

  it('has images', () => {
    wrapper.find('#gos_uslugi').children().forEach(e => {
      expect(e.name()).to.equal('img')
    });
    expect(wrapper.find('#gos_uslugi').children().first().props().src).to.be.defined;
    expect(wrapper.find('#gos_uslugi').childAt(1).props().src).to.be.defined;

    //or
    // wrapper.find('#gos_uslugi').children().forEach(e => {
    //   expect(e.props().src).to.be.defined;
    // });

  });

  // context('', () => {
  //
  // });
});