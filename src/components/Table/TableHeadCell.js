import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { tableTheme } from "./theme.js";

export const TableHeadCell = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(tableTheme.head, customTheme);

    return m("th", { class: twMerge(theme.cell.base, className), ...props }, children);
  },
};
