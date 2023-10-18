import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.body;

export const TableBody = {
  view({ attrs, children }) {
    const { class: className, ...props } = attrs;

    return m("tbody", { class: twMerge(theme.base, className), ...props }, children);
  },
};
