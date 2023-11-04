import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterTitle = {
  view({ attrs }) {
    const { as: Component = "h2", class: className, theme: customTheme = {}, title, ...props } = attrs;

    const theme = mergeDeep(footerTheme.title, customTheme);

    return m(Component, { class: twMerge(theme.base, className), ...props }, title);
  },
};
