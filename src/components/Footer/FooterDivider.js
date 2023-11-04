import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterDivider = {
  view({ attrs }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;

    const theme = mergeDeep(footerTheme.divider, customTheme);

    return m("hr", { class: twMerge(theme.base, className), ...props });
  },
};
