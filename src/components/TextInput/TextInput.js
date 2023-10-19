import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { textInputTheme } from "./theme.js";
import { HelperText } from "../HelperText/index.js";

export const TextInput = {
  view({ attrs }) {
    const {
      addon,
      class: className,
      color = "gray", // "failure" | "gray" | "info" | "success" | "warning"
      helperText,
      icon,
      rightIcon,
      shadow,
      sizing = "md", // "sm" | "md" | "lg"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(textInputTheme, customTheme);

    return [
      m("div", { class: twMerge(theme.base, className) }, [
        addon && m("span", { class: theme.addon }, addon),
        m("div", { class: theme.field.base }, [
          icon && m("div", { class: theme.field.icon.base }, m(icon, { class: theme.field.icon.svg })),
          rightIcon &&
            m("div", { class: theme.field.rightIcon.base }, m(rightIcon, { class: theme.field.rightIcon.svg })),
          m("input", {
            class: twMerge(
              theme.field.input.base,
              theme.field.input.colors[color],
              theme.field.input.sizes[sizing],
              theme.field.input.withIcon[icon ? "on" : "off"],
              theme.field.input.withRightIcon[rightIcon ? "on" : "off"],
              theme.field.input.withAddon[addon ? "on" : "off"],
              theme.field.input.withShadow[shadow ? "on" : "off"],
            ),
            ...props,
          }),
        ]),
      ]),
      helperText && m(HelperText, { color: color }, helperText),
    ];
  },
};
