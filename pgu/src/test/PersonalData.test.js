import React from "react";
import {expect} from "chai";
import {mount, shallow} from "enzyme";
import PersonalData from "../components/PersonalData";
import sinon from "sinon";
import avatar from "../img/default-user.png";

describe('../components/PersonalData', () => {

  let profileLinks = [
    {
      id: "services",
      description: "Заказано услуг",
      value: 0
    },
    {
      id: "complaines",
      description: "Подано жалоб",
      value: 0
    },
    {
      id: "favorite_services",
      description: "Избранных услуг",
      value: 0
    }
  ];

  context('renders', () => {
    it('with no errors', () => {
      let spy = sinon.spy(PersonalData.prototype, 'render');
      const wrapper = shallow(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );

      expect(spy.threw()).to.equal(false);
      expect(wrapper).to.have.lengthOf(1);
      expect(wrapper.find('Profile').exists()).to.equal(true); // or .to.have.length(1)
      expect(wrapper.find('ShowData').exists()).to.equal(true);
      console.log(wrapper.debug());
    });

  it('has children', () => {
    const wrapper = mount(
      <PersonalData profileLinks={profileLinks} img={avatar}/>
    );

    expect(wrapper.name()).to.equal('PersonalData');
    expect(wrapper.childAt(0).name()).to.equal('div');
    expect(wrapper.find('.container.personal-data').children()).to.have.lengthOf(2);
    wrapper.find('#btn_edit').simulate('click');
    expect(wrapper.find('.container.personal-data').children()).to.have.lengthOf(2);
    expect(wrapper.find('.data-container')).to.have.lengthOf(4);
  });

    it('with proper class', () => {
      const wrapper = mount(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );

      expect(wrapper.find('.container').hasClass('personal-data')).to.equal(true);
      expect(wrapper.find('.fa.fa-pencil-square-o').text()).to.equal('');
      // expect(wrapper.find('.edit').find('h3').text()).to.contain('Личные данные');
      // expect(wrapper.find('button')[0]).to.be.ok;
    });

    it('with ShowData component', () => {
      const wrapper = shallow(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );

      expect(wrapper.find('ShowData').length).to.equal(1);
    });
  });

  context('mounts', () => {
    it('with ShowData fields', () => {
      const wrapper = mount(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );

      expect(wrapper.find('.edit > h3').text()).to.contain('Личные данные');
      expect(wrapper.find('.edit > button').text()).to.contain('Редактировать');

      wrapper.find('.info > p').filter((e, i) => i % 2 === 0).forEach(e =>
        expect(e.text()).to.not.equal('')
      );

      wrapper.find('.data-container > h3').forEach(e =>
        expect(e.text()).to.not.equal('')
      );

      expect(wrapper.find('.info > p').at(2).text()).to.not.equal(''); //surname
      expect(wrapper.find('.info > p').at(3).text()).to.not.equal(''); //name
      expect(wrapper.find('.info > p').at(5).text()).to.not.equal(''); //lastname
    });

    it('reacts to button click', () => {
      let spy = sinon.spy(PersonalData.prototype, 'toggleState');
      const wrapper = mount(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );
      wrapper.find('#btn_edit').simulate('click');
      expect(spy.calledOnce).to.equal(true);
    });

    it('reacts to input change', () => {
      const wrapper = mount(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );

      wrapper.find('#btn_edit').simulate('click');

      expect(wrapper.state().snils).to.equal(undefined);
      wrapper.find('#snils > input').simulate('change', {target: {value: '123123123'}});
      expect(wrapper.state().snils).to.equal('123123123');

      expect(wrapper.state().registrationIndex).to.equal(undefined);
      wrapper.find('#registration_index > input').simulate('change', {target: {value: '123123123'}});
      expect(wrapper.state().registrationIndex).to.equal('123123'); //takes only 6 numbers
      // expect(wrapper.state().name).to.equal('Вячеслав');
    });

    it('reacts to select change', () => {
      const wrapper = mount(
        <PersonalData profileLinks={profileLinks} img={avatar}/>
      );

      wrapper.find('#btn_edit').simulate('click');
      expect(wrapper.state().gender).to.equal(undefined);

      wrapper.find('#gender').children().first().simulate('change', {target: {value: 'Мужской'}});
      expect(wrapper.state().gender).to.equal('Мужской');

      wrapper.find('#date_of_birth').children().first().simulate('change', {target: {value: 'Мужской'}});
      expect(wrapper.find('select').props().value).to.equal('Мужской');
      expect(wrapper.state().dateOfBirth).to.equal('Мужской');
    });
  });
});