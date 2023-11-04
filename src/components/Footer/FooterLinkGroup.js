import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterLinkGroup = {
  view({ attrs, children }) {
    const { class: className, col = false, theme: customTheme = {}, ...props } = attrs;

    const theme = mergeDeep(footerTheme.groupLink, customTheme);

    return m("ul", { class: twMerge(theme.base, col && theme.col, className), ...props }, children);
  },
};
