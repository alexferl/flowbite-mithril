import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { navbarTheme } from "./theme.js";
import { NavbarBrand } from "./NavbarBrand.js";
import { NavbarCollapse } from "./NavbarCollapse.js";
import { NavbarLink } from "./NavbarLink.js";
import { NavbarToggle } from "./NavbarToggle.js";

export const NavbarComponent = {
  view({ attrs, children }) {
    const { class: className, bordered, rounded, fluid = false, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(navbarTheme.root, customTheme);

    return m(
      "nav",
      {
        class: twMerge(
          theme.base,
          theme.bordered[bordered ? "on" : "off"],
          theme.rounded[rounded ? "on" : "off"],
          className,
        ),
        ...props,
      },
      m(
        "div",
        {
          class: twMerge(theme.inner.base, theme.inner.fluid[fluid ? "on" : "off"]),
        },
        children,
      ),
    );
  },
};

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
