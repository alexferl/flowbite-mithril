import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { tableTheme } from "./theme.js";

export const TableRow = {
  view({ attrs, children }) {
    const { class: className, hoverable, striped, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(tableTheme.row, customTheme);

    return m(
      "tr",
      { class: twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className), ...props },
      children,
    );
  },
};
