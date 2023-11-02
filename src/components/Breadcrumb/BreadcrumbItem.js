import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { breadcrumbTheme } from "./theme.js";
import { ChevronRightIcon } from "flowbite-icons-mithril/outline";

export const BreadcrumbItem = {
  view({ attrs, children }) {
    const { class: className, href, icon: Icon, theme: customTheme = {}, ...props } = attrs;
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";

    const theme = mergeDeep(breadcrumbTheme.item, customTheme);

    return m("li", { class: twMerge(theme.base, className), ...props }, [
      m(ChevronRightIcon, { "aria-hidden": true, class: theme.chevron }),
      m(Component, { class: theme.href[isLink ? "on" : "off"], href: href }, [
        Icon && m(Icon, { "aria-hidden": true, class: theme.icon }),
        children,
      ]),
    ]);
  },
};
