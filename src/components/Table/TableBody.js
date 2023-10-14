import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme";

const theme = tableTheme.body;

export const TableBody = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    return m("tbody", { class: twMerge(theme.base, className) }, children);
  },
});
