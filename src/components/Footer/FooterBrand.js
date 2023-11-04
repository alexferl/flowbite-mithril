import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterBrand = {
  view({ attrs, children }) {
    const { alt, class: className, href, name, src, theme: customTheme = {}, ...props } = attrs;

    const theme = mergeDeep(footerTheme.brand, customTheme);

    return m(
      "div",
      href
        ? m("a", { href: href, class: twMerge(theme.base, className), ...props }, [
            m("img", { alt: alt, src: src, class: theme.img }),
            m("span", { class: theme.span }, name),
            children,
          ])
        : m("img", { alt: alt, src: src, class: twMerge(theme.img, className), ...props }),
    );
  },
};
