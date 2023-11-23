import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { avatarTheme } from "./theme.js";

export const AvatarGroupCounter = {
  view({ attrs }) {
    const { class: className, href, total, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(avatarTheme.groupCounter, customTheme);

    return m(m.route.Link, { href: href, class: twMerge(theme.base, className), ...props }, `+${total}`);
  },
};
