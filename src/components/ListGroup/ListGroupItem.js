import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { listGroupTheme } from "./theme.js";

export const ListGroupItem = {
  view({ attrs, children }) {
    const { active: isActive, class: className, href, icon, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(listGroupTheme.item, customTheme);

    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "button";

    return m("li", { class: twMerge(theme.base, className) }, [
      m(
        Component,
        {
          href: href,
          type: isLink ? undefined : "button",
          class: twMerge(
            theme.link.active[isActive ? "on" : "off"],
            theme.link.base,
            theme.link.href[isLink ? "on" : "off"],
          ),
          ...props,
        },
        [icon && m(icon, { "aria-hidden": true, class: theme.link.icon }), children],
      ),
    ]);
  },
};
