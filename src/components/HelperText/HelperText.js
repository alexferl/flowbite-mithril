import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { helperTextTheme } from "./theme.js";

export const HelperText = {
  view({ attrs, children }) {
    const { class: className, color = "default", theme: customTheme = {}, value, ...props } = attrs;
    const theme = mergeDeep(helperTextTheme, customTheme);

    return m(
      "p",
      { class: twMerge(theme.root.base, theme.root.colors[color], className), ...props },
      value ?? children ?? "",
    );
  },
};
