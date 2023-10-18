import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme.js";

const theme = navbarTheme.brand;

export const NavbarBrand = {
  view({ attrs, children }) {
    const { class: className, ...props } = attrs;

    return m(m.route.Link, { class: twMerge(theme.base, className), ...props }, children);
  },
};
