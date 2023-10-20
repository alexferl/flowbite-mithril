import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { badgeTheme } from "./theme.js";

export const Badge = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "info", // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      href,
      icon: Icon,
      size = "xs", // "xs" | "sm"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(badgeTheme, customTheme);

    const Content = {
      view: () =>
        m(
          "span",
          {
            class: twMerge(
              theme.root.base,
              theme.root.color[color],
              theme.root.size[size],
              theme.icon[Icon ? "on" : "off"],
              Icon && children.length > 0 ? "gap-1" : "",
              className,
            ),
            ...props,
          },
          [
            Icon && m(Icon, { "aria-hidden": true, class: theme.icon.size[size] }),
            children.length > 0 && m("span", children),
          ],
        ),
    };

    return href ? m(m.route.Link, { class: theme.root.href, href: href }, m(Content)) : m(Content);
  },
};
