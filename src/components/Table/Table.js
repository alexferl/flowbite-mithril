import m from "mithril";
import { twMerge } from "tailwind-merge";
import { tableTheme } from "./theme.js";
import { TableHead } from "./TableHead.js";
import { TableBody } from "./TableBody.js";
import { TableRow } from "./TableRow.js";
import { TableCell } from "./TableCell.js";
import { TableHeadCell } from "./TableHeadCell.js";

const theme = tableTheme.root;

const TableComponent = {
  view({ attrs, children }) {
    const className = attrs.class;
    return m("div", { class: twMerge(theme.wrapper) }, [
      m("div", { class: twMerge(theme.shadow, className) }),
      m("table", { class: twMerge(theme.base, className) }, children),
    ]);
  },
};

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
