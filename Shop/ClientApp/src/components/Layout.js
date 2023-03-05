import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import "./Layout.css";
import AsideBasket from "./AsideBasket";
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <AsideBasket />
        <Container tag="main">{this.props.children}</Container>
      </div>
    );
  }
}
