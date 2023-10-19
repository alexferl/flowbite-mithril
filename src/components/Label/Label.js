import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { labelTheme } from "./theme.js";

export const Label = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "default", // "default" | "failure" | "info" | "success" | "warning
      disabled = false,
      value,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(labelTheme, customTheme);

    return m(
      "label",
      {
        class: twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className),
        ...props,
      },
      children ?? children ?? "",
    );
  },
};
