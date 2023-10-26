import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { accordionTheme } from "./theme.js";

export const AccordionContent = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(accordionTheme.content, customTheme);

    return m("div", { class: twMerge(theme.base, className), ...props }, children);
  },
};
