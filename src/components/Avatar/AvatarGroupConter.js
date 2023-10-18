import m from "mithril";
import { twMerge } from "tailwind-merge";
import { avatarTheme } from "./theme.js";

const theme = avatarTheme.groupCounter;

export const AvatarGroupCounter = {
  view({ attrs }) {
    const { class: className, href, total, ...props } = attrs;

    return m(m.route.Link, { href: href, class: twMerge(theme.base, className), ...props }, `+${total}`);
  },
};
