import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme";

const theme = navbarTheme.toggle;

export const NavbarToggle = () => ({
  view: ({ attrs }) => {
    const className = attrs.className;
    return m("button", { class: twMerge(theme.base, className) }, m("span", { class: "sr-only" }, "Open main menu"));
  },
});
