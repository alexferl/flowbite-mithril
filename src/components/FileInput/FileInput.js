import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { fileInputTheme } from "./theme.js";
import { HelperText } from "../HelperText/index.js";

export const FileInput = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "gray", // "failure" | "gray" | "info" | "success" | "warning"
      helperText,
      size = "md", // "sm" | "md" | "lg"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(fileInputTheme, customTheme);

    return [
      m(
        "div",
        { class: twMerge(theme.root.base, className) },
        m(
          "div",
          { class: theme.field.base },
          m("input", {
            class: twMerge(theme.field.input.base, theme.field.input.colors[color], theme.field.input.sizes[size]),
            type: "file",
            ...props,
          }),
        ),
      ),
      helperText && m(HelperText, { color: color }, helperText),
    ];
  },
};
