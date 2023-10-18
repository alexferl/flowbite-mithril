import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme.js";

const theme = navbarTheme.toggle;

export const NavbarToggle = {
  view({ attrs }) {
    const { class: className, ...props } = attrs;

    return m(
      "button",
      { class: twMerge(theme.base, className), ...props },
      m("span", { class: "sr-only" }, "Open main menu"),
    );
  },
};
