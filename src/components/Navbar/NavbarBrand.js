import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme";

const theme = navbarTheme.brand;

export const NavbarBrand = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    const href = attrs.href;
    return m(m.route.Link, { class: twMerge(theme.base, className), href: href }, children);
  },
});
