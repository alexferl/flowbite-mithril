import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { inputTheme } from "./theme.js";
import { HelperText } from "../HelperText/index.js";

export const Input = {
  view({ attrs }) {
    const {
      addon,
      class: className,
      color = "gray", // "failure" | "gray" | "info" | "success" | "warning"
      helperText,
      icon: Icon,
      rightIcon: RightIcon,
      shadow,
      sizing = "md", // "sm" | "md" | "lg"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(inputTheme, customTheme);

    return [
      m("div", { class: twMerge(theme.base, className) }, [
        addon && m("span", { class: theme.addon }, addon),
        m("div", { class: theme.field.base }, [
          Icon && m("div", { class: theme.field.icon.base }, m(Icon, { class: theme.field.icon.svg })),
          RightIcon &&
            m("div", { class: theme.field.rightIcon.base }, m(RightIcon, { class: theme.field.rightIcon.svg })),
          m("input", {
            class: twMerge(
              theme.field.input.base,
              theme.field.input.colors[color],
              theme.field.input.sizes[sizing],
              theme.field.input.withIcon[Icon ? "on" : "off"],
              theme.field.input.withRightIcon[RightIcon ? "on" : "off"],
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
