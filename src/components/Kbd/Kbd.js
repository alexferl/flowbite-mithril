import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { kbdTheme } from "./theme.js";

export const Kbd = {
  view({ attrs, children }) {
    const { class: className, icon: Icon, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(kbdTheme, customTheme);

    return m("span", { class: twMerge(theme.root.base, className), ...props }, [
      Icon && m(Icon, { class: theme.root.icon }),
      children,
    ]);
  },
};
