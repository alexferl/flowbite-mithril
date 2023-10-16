import m from "mithril";
import { twMerge } from "tailwind-merge";
import { avatarTheme } from "./theme.js";

const theme = avatarTheme.groupCounter;

export const AvatarGroupCounter = () => ({
  view: ({ attrs }) => {
    const className = attrs.class;
    const href = attrs.href;
    const total = attrs.total;
    return m(m.route.Link, { href: href, class: twMerge(theme.base, className) }, `+${total}`);
  },
});
