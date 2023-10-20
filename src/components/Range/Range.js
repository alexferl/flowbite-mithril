import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { rangeTheme } from "./theme.js";

export const Range = {
  view({ attrs }) {
    const {
      class: className,
      size = "md", // "sm" | "md" | "lg"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(rangeTheme, customTheme);

    return m(
      "div",
      { class: twMerge(theme.root.base, className) },
      m(
        "div",
        { class: theme.field.base },
        m("input", { type: "range", class: twMerge(theme.field.input.base, theme.field.input.sizes[size]), ...props }),
      ),
    );
  },
};
