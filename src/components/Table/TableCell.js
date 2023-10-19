import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { tableTheme } from "./theme.js";

export const TableCell = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(tableTheme.body.cell, customTheme);

    return m("td", { class: twMerge(theme.base, className), ...props }, children);
  },
};
