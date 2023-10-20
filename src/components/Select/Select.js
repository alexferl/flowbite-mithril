import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { selectTheme } from "./theme.js";
import { HelperText } from "../HelperText/index.js";

export const Select = {
  view({ attrs, children }) {
    const {
      addon,
      class: className,
      color = "gray", // "failure" | "gray" | "info" | "success" | "warning"
      helperText,
      icon,
      shadow,
      size = "md", // "sm" | "md" | "lg"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(selectTheme, customTheme);

    return m("div", { class: twMerge(theme.base, className) }, [
      addon && m("span", { class: theme.addon }, addon),
      m("div", { class: theme.field.base }, [
        icon && m("div", { class: theme.field.icon.base }, m(icon, { class: theme.field.icon.svg })),
        m(
          "select",
          {
            class: twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.sizes[size],
              theme.field.select.withIcon[icon ? "on" : "off"],
              theme.field.select.withAddon[addon ? "on" : "off"],
              theme.field.select.withShadow[shadow ? "on" : "off"],
            ),
            ...props,
          },
          children,
        ),
        helperText && m(HelperText, { color: color }, helperText),
      ]),
    ]);
  },
};
