import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterCopyright = {
  view({ attrs }) {
    const { by, class: className, href, theme: customTheme = {}, year, ...props } = attrs;

    const theme = mergeDeep(footerTheme.copyright, customTheme);

    return m("div", { class: twMerge(theme.base, className), ...props }, [
      `© ${year}`,
      href ? m("a", { href: href, class: theme.href }, by) : m("span", { class: theme.span }, by),
    ]);
  },
};
