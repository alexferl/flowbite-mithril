import m from "mithril";
import { twMerge } from "tailwind-merge";
import { buttonGroupTheme } from "./theme";

const theme = buttonGroupTheme;

export const ButtonGroup = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    const outline = attrs.outline;
    const pill = attrs.pill;
    return m(
      "div",
      {
        class: twMerge(theme.base, className),
        role: "group",
      },
      children.map((child, index) => {
        child.attrs.positionInGroup = index === 0 ? "start" : index === children.length - 1 ? "end" : "middle";
        child.attrs.outline = outline;
        child.attrs.pill = pill;
        return child;
      }),
    );
  },
});
