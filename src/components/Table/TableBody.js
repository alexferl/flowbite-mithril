import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { tableTheme } from "./theme.js";

export const TableBody = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(tableTheme.body, customTheme);

    return m("tbody", { class: twMerge(theme.base, className), ...props }, children);
  },
};
