import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { tableTheme } from "./theme.js";

export const TableHead = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(tableTheme.head, customTheme);

    return m("thead", { class: twMerge(theme.base, className), ...props }, m("tr", children));
  },
};
