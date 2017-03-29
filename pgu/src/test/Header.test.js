import * as React from "react";
import {expect} from "chai";
import {renderIntoDocument} from "react-addons-test-utils";
import Header from "../components/Header";

describe('../Header', () => {
  it('should render', () => {
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
    const header = renderIntoDocument(
      <Header links={links}/>
    );

    expect(header).to.exist();
  })
});