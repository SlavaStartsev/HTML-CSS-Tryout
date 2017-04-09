import * as React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';

import ReactDOM from 'react-dom';

import {Header} from "../components/Header";

let headerLinks = [
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

describe('Header', () => {
  it('should render', () => {
    let header = TestUtils.renderIntoDocument(
      <Header links={headerLinks}/>
    );

    //assertion
    expect(header).to.be;
    let items = TestUtils.scryRenderedDOMComponentsWithTag(header, 'li');

    //assertion
    // expect(items[0].textContent).to.equal('версия для слабовидящих');
    // expect(header).to.be;
  });
});