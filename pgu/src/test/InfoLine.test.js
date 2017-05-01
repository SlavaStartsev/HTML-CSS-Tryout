import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import {InfoLine} from "../components/InfoLine";
import qr from "../img/download.png";

describe('../components/InfoLine', () => {
  let infoLineLinks = {
    placeholder: "Например, предоставление земельного участка",
    qr: qr,
    mobile: ["Мобильная", "версия", "портала"],
    phoneNumber: "8(800)200-82-12",
    details: "Звонок по России бесплатный"
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InfoLine links={infoLineLinks}/>
    );
  });

  it('renders', () => {
    expect(wrapper).to.be.ok;
    expect(wrapper.props().id).to.equal('content-wrapper');
  });

  it('has children', () => {
    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find('ul').children()).to.have.lengthOf(3);
    expect(wrapper.find('li > i').props().className).to.contain('fa');
    expect(wrapper.find('li > i').hasClass('fa fa-search')).to.equal(true);
  });

  it('test input placeholder', () => {
    expect(wrapper.find('input').props().placeholder).to.equal(infoLineLinks.placeholder);
  });

  it('qr code test', () => {
    expect(wrapper.find('li > img').props().src).to.equal(infoLineLinks.qr);
    wrapper.find('li > a').children().forEach((e, i) => {
      expect(e.text()).to.equal(infoLineLinks.mobile[i]);
    });
  });

  it('last li element test', () => {
    expect(wrapper.find('li').last().text()).to.contain(infoLineLinks.phoneNumber);
    expect(wrapper.find('li').last().text()).to.contain(infoLineLinks.details);
  });
});