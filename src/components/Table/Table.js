import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableHeadCell } from "./TableHeadCell";

const theme = tableTheme.root;

const TableComponent = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    return m("div", { class: twMerge(theme.wrapper) }, [
      m("div", { class: twMerge(theme.shadow, className) }),
      m("table", { class: twMerge(theme.base, className) }, children),
    ]);
  },
});

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
