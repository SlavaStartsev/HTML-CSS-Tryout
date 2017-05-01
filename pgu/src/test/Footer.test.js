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
    console.log(wrapper.debug());
  });

  it('has children', () => {
    expect(wrapper.find('#footer_div').children().length).to.equal(4);
  });

  it('has links from props created right', () => {
    expect(wrapper.find('#middle > ul').children()).to.have.lengthOf(footerLinks.a.length);
  });
  // context('', () => {
  //
  // });
});