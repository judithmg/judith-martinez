import React from "react";
import "./Header.css";

export default function DropdownUserMenu() {
  return (
    <div className="user-dropdown__container">
      <ul className="user-dropdown__list">
        <li className="user-dropdown__item">
          <span className="user-profile icon"></span>Mi perfil
        </li>
        <li className="user-dropdown__item">
          <span className="account-config icon"></span>Configuración cuenta
        </li>
        <li className="user-dropdown__item">
          <span className="user-subscr icon"></span>Mi suscripción
        </li>
        <li className="user-dropdown__item">
          <span className="users-account icon"></span>Usuarios de la cuenta
        </li>
        <li className="user-dropdown__item">
          <span className="night-mode icon"></span>Modo nocturno
        </li>
        <li className="user-dropdown__item">
          <span className="user-exit icon"></span>Salir
        </li>
      </ul>
    </div>
  );
}