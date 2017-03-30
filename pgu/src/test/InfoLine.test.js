import * as React from "react";
import {expect} from "chai";
let assert = require('assert');
import {Simulate, isElementOfType, renderIntoDocument} from "react-addons-test-utils";
import {Header} from "../components/Header";

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
    const header = renderIntoDocument(
      <Header links={links}/>
    );

    expect(header).toExist;
  });

  it('Header instance is created properly', () => {
    assert.equal(isElementOfType(<Header />, Header), true);
  });
});