import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";

export const FooterIcon = {
  view({ attrs }) {
    const { ariaLabel, class: className, href, icon: Icon, theme: customTheme = {}, ...props } = attrs;

    const theme = mergeDeep(footerTheme.footer.icon, customTheme);

    return m(
      "div",
      href
        ? m(
            "a",
            { "aria-label": ariaLabel, href: href, class: twMerge(theme.base, className), ...props },
            m(Icon, { class: theme.size }),
          )
        : m(Icon, { class: theme.size, ...props }),
    );
  },
};
