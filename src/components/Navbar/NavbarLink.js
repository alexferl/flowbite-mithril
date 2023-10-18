import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme.js";

const theme = navbarTheme.link;

export const NavbarLink = {
  view({ attrs, children }) {
    const { class: className, active, disabled, ...props } = attrs;

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
          ...props,
        },
        children,
      ),
    );
  },
};
