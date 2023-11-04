import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterLink = {
  view({ attrs, children }) {
    const { as: Component = "a", class: className, href, theme: customTheme = {}, ...props } = attrs;

    const theme = mergeDeep(footerTheme.groupLink.link, customTheme);

    return m(
      "li",
      { class: twMerge(theme.base, className) },
      m(Component, { href: href, class: theme.href, ...props }, children),
    );
  },
};
