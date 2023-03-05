import React, { Component } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { useGlobalContext } from "../AppProvider";

export function NavMenu() {
  const { basket, ShowBasket } = useGlobalContext();

  return (
    <nav>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm MyNavbar "
        container
        light
      >
        <NavbarBrand className="Logo" tag={Link} to="/">
          Home
        </NavbarBrand>
        <div className="backetSwith" onClick={ShowBasket}>
          <FaShoppingBasket className="icon_Basket" />
          <div className="div_count"> {basket.length}</div>
        </div>
      </Navbar>
    </nav>
  );
}
