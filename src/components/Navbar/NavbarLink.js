import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme.js";

const theme = navbarTheme.link;

export const NavbarLink = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.class;
    const active = attrs.active;
    const disabled = attrs.disabled;
    const href = attrs.href;
    return m(
      "li",
      m(
        m.route.Link,
        {
          class: twMerge(
            theme.base,
            active && theme.active.on,
            !active && !disabled && theme.active.off,
            theme.disabled[disabled ? "on" : "off"],
            className,
          ),
          href: href,
        },
        children,
      ),
    );
  },
});
