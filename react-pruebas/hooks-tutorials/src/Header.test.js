import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Header, DropdownNotificationsMenu, DropdownUserMenu } from "./Header";

describe("Given a Header component", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe("When there is no hero id", () => {
    test("Then display an error message", () => {
      // arrange

      // act
      act(() => {
        render(<Header />, container);
      });

      const h2 = container.querySelector(".notifications-dropdown__time");

      expect(h2.textContent).toBe("2 hrs ago");
    });
  });
});
