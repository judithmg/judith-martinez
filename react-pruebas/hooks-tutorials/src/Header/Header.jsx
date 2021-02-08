import React from "react";
import "./Header.css";
import logo from "./images/logo-dark.png";
import DropdownUserMenu from './DropdownUserMenu'
import DropdownNotificationsMenu from './DropdownNotificationsMenu'

export default function Header() {
  return (
    <>
      <div className="header-menu__container">
        <img src={logo} className="header-menu__logo"></img>
        <ul className="header-menu__links">
          <li className="header-menu__add">
            <a href="#">Añadir Sociedad</a>
          </li>
          <a href="" className="animation-a">
            <li className="header-menu__notifications icon"></li>
          </a>

          <DropdownNotificationsMenu />

          <li className="header-menu__user"></li>
          
          <a href="#" className="animation-b">
            <li className="header-menu__menu"></li>
          </a>

          <DropdownUserMenu />
        </ul>
      </div>
    </>
  );
}

