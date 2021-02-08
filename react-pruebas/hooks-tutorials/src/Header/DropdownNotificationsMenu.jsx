import React from "react";
import "./Header.css";

export default function DropdownNotificationsMenu() {
  return (
    <div className="notifications-dropdown__container">
      <div className="notifications-dropdown__head">
        <span>Notificaciones</span>
        <span>
          <a>Marcar como leídas</a>
        </span>
      </div>
      <div>
        <ul className="notifications-dropdown__list">
          <li className="notifications-dropdown__item">
            <span className="notifications-dropdown__status"></span>
            <div className="notifications-dropdown__notification">
              <p className="notifications-dropdown__text">
                You have requested to Widthdrawl
              </p>
              <p className="notifications-dropdown__time">2 hrs ago</p>
            </div>
          </li>
          <li className="notifications-dropdown__item">
            <span className="notifications-dropdown__status"></span>
            <div className="notifications-dropdown__notification">
              <p className="notifications-dropdown__text">
                You have requested to Widthdrawl
              </p>
              <p className="notifications-dropdown__time">2 hrs ago</p>
            </div>
          </li>
          <li className="notifications-dropdown__item">
            <span className="notifications-dropdown__status"></span>
            <div className="notifications-dropdown__notification">
              <p className="notifications-dropdown__text">
                You have requested to Widthdrawl
              </p>
              <p className="notifications-dropdown__time">2 hrs ago</p>
            </div>
          </li>
          <li className="notifications-dropdown__item">
            <span className="notifications-dropdown__status"></span>
            <div className="notifications-dropdown__notification">
              <p className="notifications-dropdown__text">
                You have requested to Widthdrawl
              </p>
              <p className="notifications-dropdown__time">2 hrs ago</p>
            </div>
          </li>
          <li className="notifications-dropdown__item">
            <span className="notifications-dropdown__status"></span>
            <div className="notifications-dropdown__notification">
              <p className="notifications-dropdown__text">
                You have requested to Widthdrawl
              </p>
              <p className="notifications-dropdown__time">2 hrs ago</p>
            </div>
          </li>
        </ul>
        <div className="notifications-dropdown__sticky">
          <p>Ver todas</p>
        </div>
      </div>
    </div>
  );
}
