import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { avatarTheme } from "./theme.js";

export const AvatarGroup = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(avatarTheme.group, customTheme);

    return m("div", { class: twMerge(theme.base, className), ...props }, children);
  },
};
