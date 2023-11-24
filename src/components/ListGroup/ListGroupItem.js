import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { listGroupTheme } from "./theme.js";

export const ListGroupItem = {
  view({ attrs, children }) {
    const { active: isActive, class: className, href, icon: Icon, disabled, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(listGroupTheme.item, customTheme);

    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "button";

    console.log("DISA", disabled);

    return m("li", { class: twMerge(theme.base, className) }, [
      m(
        Component,
        {
          href: href,
          type: isLink ? undefined : "button",
          disabled: disabled,
          class: twMerge(
            theme.link.active[isActive ? "on" : "off"],
            theme.link.disabled[disabled ? "on" : "off"],
            theme.link.base,
            theme.link.href[isLink ? "on" : "off"],
          ),
          ...props,
        },
        [Icon && m(Icon, { "aria-hidden": true, class: theme.link.icon }), children],
      ),
    ]);
  },
};
