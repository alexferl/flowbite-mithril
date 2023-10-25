import m from "mithril";
import { twMerge } from "tailwind-merge";
import { dropdownTheme } from "./theme.js";
import { DropdownDivider } from "./DropdownDivider.js";

export const DropdownHeader = {
  view({ attrs, children }) {
    const { class: className, ...props } = attrs;

    return [
      m("div", { class: twMerge(dropdownTheme.floating.header, className), ...props }, children),
      m(DropdownDivider),
    ];
  },
};
