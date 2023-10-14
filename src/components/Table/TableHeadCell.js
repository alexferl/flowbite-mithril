import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme";

const theme = tableTheme.head;

export const TableHeadCell = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    return m("th", { class: twMerge(theme.cell.base, className) }, children);
  },
});
