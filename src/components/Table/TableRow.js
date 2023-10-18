import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.row;

export const TableRow = {
  view({ attrs, children }) {
    const { class: className, hoverable, striped, ...props } = attrs;

    return m(
      "tr",
      { class: twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className), ...props },
      children,
    );
  },
};
