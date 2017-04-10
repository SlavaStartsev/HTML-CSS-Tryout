import * as React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
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

  it('should render with props', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );

    expect(wrapper).to.have.length(1);
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
      expect(e.find('i').hasClass(links[i].icon)).to.equal(true);
    });

    // wrapper.find('ul').find('li').find('i').forEach((e, i) => {
    //   expect(e.hasClass(links[i].icon)).to.equal(true);
    // });
  });

  it('contains all items from props', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );
    expect(wrapper.find('ul').children()).to.have.length(links.length);
  });

  it('simulate clicks on links', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );

    let spy = sinon.spy(Header.prototype, 'clicker');

    wrapper.find('a').forEach(e => {
      e.simulate('click');
    });

    expect(spy).to.have.been.called;
    expect(wrapper.state('linksClicked')).to.equal(links.length);

  });
});
