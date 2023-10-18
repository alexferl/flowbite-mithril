import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.head;

export const TableHead = {
  view({ attrs, children }) {
    const { class: className, ...props } = attrs;

    return m("thead", { class: twMerge(theme.base, className), ...props }, m("tr", children));
  },
};
