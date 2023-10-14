import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme";

const theme = tableTheme.body;

export const TableCell = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    return m("td", { class: twMerge(theme.cell.base, className) }, children);
  },
});
