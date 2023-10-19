import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { navbarTheme } from "./theme.js";

export const NavbarCollapse = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(navbarTheme.collapse, customTheme);

    return m("div", { class: twMerge(theme.base, className), ...props }, m("ul", { class: theme.list }, children));
  },
};
