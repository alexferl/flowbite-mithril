import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { dropdownTheme } from "./theme.js";

export const DropdownItem = {
  isActive: false,
  view({ attrs, children, state }) {
    const { class: className, icon: Icon, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(dropdownTheme.floating.item, customTheme);

    const toggle = () => (state.isActive = !state.isActive);

    return m(
      "li",
      { class: theme.container },
      m(
        "button",
        {
          class: twMerge(theme.base, className),
          tabIndex: state.isActive ? 0 : -1,
          onmouseover: () => {
            toggle();
          },
          onmouseout: () => {
            toggle();
          },
          ...props,
        },
        [Icon && m(Icon, { class: theme.icon }), children],
      ),
    );
  },
};
