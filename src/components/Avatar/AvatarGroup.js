import m from "mithril";
import { twMerge } from "tailwind-merge";
import { avatarTheme } from "./theme";

const theme = avatarTheme.group;

export const AvatarGroup = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    return m("div", { class: twMerge(theme.base, className) }, children);
  },
});
