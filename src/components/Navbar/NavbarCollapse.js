import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme.js";

const theme = navbarTheme.collapse;

export const NavbarCollapse = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    return m("div", { class: twMerge(theme.base, className) }, m("ul", { class: theme.list }, children));
  },
});
