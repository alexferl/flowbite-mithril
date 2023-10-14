import m from "mithril";
import { twMerge } from "tailwind-merge";
import { avatarTheme } from "./theme";

const theme = avatarTheme.groupCounter;

export const AvatarGroupCounter = () => ({
  view: ({ attrs }) => {
    const className = attrs.className;
    const href = attrs.href;
    const total = attrs.total;
    return m(m.route.Link, { href: href, class: twMerge(theme.base, className) }, `+${total}`);
  },
});
