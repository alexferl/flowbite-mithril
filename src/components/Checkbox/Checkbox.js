import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { checkboxTheme } from "./theme.js";

export const Checkbox = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "default", // "blue" | "cyan" | "dark" | "default" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(checkboxTheme, customTheme);

    return m(
      "input",
      { type: "checkbox", class: twMerge(theme.root.base, theme.root.color[color], className), ...props },
      children,
    );
  },
};
