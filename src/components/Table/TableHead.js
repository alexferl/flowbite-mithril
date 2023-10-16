import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";

const theme = tableTheme.head;

export const TableHead = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.class;
    return m("thead", { class: twMerge(theme.base, className) }, m("tr", children));
  },
});
