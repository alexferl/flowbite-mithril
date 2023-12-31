import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { navbarTheme } from "./theme.js";

export const NavbarBrand = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(navbarTheme.brand, customTheme);

    return m(m.route.Link, { class: twMerge(theme.base, className), ...props }, children);
  },
};
