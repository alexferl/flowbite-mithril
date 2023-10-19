import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { blockquoteTheme } from "./theme.js";

export const Blockquote = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(blockquoteTheme, customTheme);

    return m("blockquote", { class: twMerge(theme.root.base, className), ...props }, children);
  },
};
