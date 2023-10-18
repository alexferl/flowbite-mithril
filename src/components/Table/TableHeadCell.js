import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.head;

export const TableHeadCell = {
  view({ attrs, children }) {
    const { class: className, ...props } = attrs;

    return m("th", { class: twMerge(theme.cell.base, className), ...props }, children);
  },
};
