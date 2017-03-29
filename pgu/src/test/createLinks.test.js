import * as React from "react";
import {expect} from "chai";
import {renderIntoDocument} from "react-addons-test-utils";
import Header from "../components/Header";

describe('../Header', () => {
  it('should render', () => {
    let links = ["версия для слабовидящих", " мое местоположение: сыктывкар", "старцев вячеслав александрович", "выход", "flag", "flag"];
    const item = renderIntoDocument(
      <Header links={links}/>
    );

    expect(item).to.exist;
  })
});