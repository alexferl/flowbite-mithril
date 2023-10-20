import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { listGroupTheme } from "./theme.js";
import { ListGroupItem } from "./ListGroupItem.js";

export const ListGroupComponent = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(listGroupTheme, customTheme);

    return m("ul", { class: twMerge(theme.root.base, className), ...props }, children);
  },
};

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
