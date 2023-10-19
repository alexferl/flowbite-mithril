import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { buttonGroupTheme } from "./theme.js";

export const ButtonGroup = {
  view({ attrs, children }) {
    const { class: className, outline, pill, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(buttonGroupTheme, customTheme);

    return m(
      "div",
      {
        class: twMerge(theme.base, className),
        role: "group",
        ...props,
      },
      children.map((child, index) => {
        child.attrs.positionInGroup = index === 0 ? "start" : index === children.length - 1 ? "end" : "middle";
        child.attrs.outline = outline;
        child.attrs.pill = pill;
        return child;
      }),
    );
  },
};
