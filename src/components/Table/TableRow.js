import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.row;

export const TableRow = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.class;
    return m("tr", { class: twMerge(theme.base, className) }, children);
  },
});
