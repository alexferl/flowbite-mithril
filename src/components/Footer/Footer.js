import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { footerTheme } from "./theme.js";
import { FooterBrand } from "./FooterBrand.js";
import { FooterCopyright } from "./FooterCopyright.js";
import { FooterDivider } from "./FooterDivider.js";
import { FooterIcon } from "./FooterIcon.js";
import { FooterLink } from "./FooterLink.js";
import { FooterLinkGroup } from "./FooterLinkGroup.js";
import { FooterTitle } from "./FooterTitle.js";

export const FooterComponent = {
  view({ attrs, children }) {
    const { bgDark = false, class: className, container = false, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(footerTheme, customTheme);

    return m(
      "footer",
      {
        class: twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className),
        ...props,
      },
      children,
    );
  },
};

export const Footer = Object.assign(FooterComponent, {
  Brand: FooterBrand,
  Copyright: FooterCopyright,
  Divider: FooterDivider,
  Icon: FooterIcon,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Title: FooterTitle,
});
