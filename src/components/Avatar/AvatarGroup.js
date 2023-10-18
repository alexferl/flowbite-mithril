import m from "mithril";
import { twMerge } from "tailwind-merge";
import { avatarTheme } from "./theme.js";

const theme = avatarTheme.group;

export const AvatarGroup = {
  view({ attrs, children }) {
    const { class: className, ...props } = attrs;

    return m("div", { class: twMerge(theme.base, className), ...props }, children);
  },
};
