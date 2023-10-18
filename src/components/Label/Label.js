import m from "mithril";
import { twMerge } from "tailwind-merge";
import { labelTheme } from "./theme.js";

const theme = labelTheme;

export const Label = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "default", // "default" | "failure" | "info" | "success" | "warning
      disabled = false,
      value,
      ...props
    } = attrs;

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
