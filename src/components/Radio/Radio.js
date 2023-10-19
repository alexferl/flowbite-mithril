import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { radioTheme } from "./theme.js";

export const Radio = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(radioTheme, customTheme);

    return m("input", { type: "radio", class: twMerge(theme.root.base, className), ...props }, children);
  },
};
