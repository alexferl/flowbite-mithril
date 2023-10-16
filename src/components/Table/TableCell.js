import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.body;

export const TableCell = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.class;
    return m("td", { class: twMerge(theme.cell.base, className) }, children);
  },
});
