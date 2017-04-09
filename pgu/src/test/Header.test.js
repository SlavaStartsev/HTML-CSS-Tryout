import * as React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Header } from "../components/Header";
let assert = require('assert');

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

  it('should render', () => {
    const header = shallow(
      <Header links={links}/>
    );

    expect(header).to.be.ok;
  });

  it('should exist', () => {
    const wrapper = shallow(
      <Header links={links}/>
    );

    expect(wrapper).to.exist;
  });

  // it('Header instance is created properly', () => {
  //   expect(isElementOfType(<Header />, Header)).to.equal.true;
  // });

  // it('Header list item test', () => {
  //   const header = renderIntoDocument(
  //     <Header links={links}/>
  //   );
  //   let li = scryRenderedDOMComponentsWithTag(header, 'li');
  //   let liLength = li.length;
  //   expect(liLength).to.equal(4);
  // });
});
