import m from "mithril";
import { twMerge } from "tailwind-merge";
import { labelTheme } from "./theme.js";

const theme = labelTheme;

export const Label = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    const color = attrs.color || "default";
    const disabled = attrs.disabled || false;
    return m(
      "label",
      {
        class: twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className),
        for: attrs.for,
      },
      children,
    );
  },
});
