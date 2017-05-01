import React from "react";
import {expect} from "chai";
import {mount, shallow} from "enzyme";
import Header from "../components/Header";
import sinon from "sinon";

describe('../components/Header', () => {
  let links = [
    {
      icon: "fa fa-eye",
      text: "версия для слабовидящих"
    },
    {
      icon: "fa fa-map-marker",
      text: " мое местоположение: сыктывкар"
    },
    {
      icon: "fa fa-user",
      text: "старцев вячеслав александрович"
    },
    {
      icon: "",
      text: "выход"
    }
  ];

  it('should render with props and no errors', () => {
    let spy = sinon.spy(Header.prototype, 'createLinks');
    const wrapper = shallow(
      <Header links={links}/>
    );

    expect(spy.calledOnce).to.equal(true);
    expect(spy.threw()).to.equal(false); // not throws errors. ps threw() -> sinon method
    expect(wrapper).to.have.length(1);
    // console.log(wrapper.debug());
  });

  it('contains header tag', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );

    expect(wrapper.find('header')).to.have.length(1);
  });

  it('has ul with class container inside header', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );

    expect(wrapper.find('ul').hasClass('container')).to.equal(true);
  });

  it('contains only li tags inside ul', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );
    expect(wrapper.find('ul').children().every('li')).to.equal(true);
  });

  it('li.length equals props.links.length', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );
    expect(wrapper.find('ul').children()).to.have.length(links.length);
  });

  it('has text inside matching with props passed', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );

    wrapper.find('ul').children().forEach((e, i) => {
      expect(e.text()).to.equal(links[i].text);
      expect(e.find('li > i').hasClass(links[i].icon)).to.equal(true);
    });

  });

  it('contains all items from props', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );
    expect(wrapper.find('ul').children()).to.have.length.of(links.length);
  });


  context('anchor element', () => {
    it('simulate clicks on anchor ', () => {
      let spy = sinon.spy(Header.prototype, 'clicker');
      const wrapper = mount(
        <Header links={links}/>
      );

      wrapper.find('a').forEach(e => {
        e.simulate('click');
      });

      expect(spy.callCount).to.equal(wrapper.find('a').length);
      expect(wrapper.state('linksClicked')).to.equal(links.length);
    });

    it('checking a tag props', () => {
      const wrapper = shallow(
        <Header links={links}/>
      );

      wrapper.find('a').forEach(e => {
        expect(e.prop('href')).to.equal('#');
      });
    });
  });
});
