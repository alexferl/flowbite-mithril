import m from "mithril";
import { twMerge } from "tailwind-merge";
import { dropdownTheme } from "./theme.js";

export const DropdownDivider = {
  view({ attrs }) {
    const { class: className, ...props } = attrs;

    return m("div", { class: twMerge(dropdownTheme.floating.divider, className), ...props });
  },
};
