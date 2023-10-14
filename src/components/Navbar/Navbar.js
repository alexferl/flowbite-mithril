import m from "mithril";
import { twMerge } from "tailwind-merge";
import { navbarTheme } from "./theme";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarLink } from "./NavbarLink";
import { NavbarToggle } from "./NavbarToggle";

const theme = navbarTheme.root;

export const NavbarComponent = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    const bordered = attrs.bordered;
    const rounded = attrs.rounded;
    const fluid = attrs.fluid || false;
    return m(
      "nav",
      {
        class: twMerge(
          theme.base,
          theme.bordered[bordered ? "on" : "off"],
          theme.rounded[rounded ? "on" : "off"],
          className,
        ),
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
});

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
