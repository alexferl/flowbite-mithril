import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { navbarTheme } from "./theme.js";

export const NavbarToggle = {
  view({ attrs }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(navbarTheme.toggle, customTheme);

    return m(
      "button",
      { class: twMerge(theme.base, className), ...props },
      m("span", { class: "sr-only" }, "Open main menu"),
    );
  },
};
