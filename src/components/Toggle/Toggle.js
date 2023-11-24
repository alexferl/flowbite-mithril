import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { toggleTheme } from "./theme.js";

export const Toggle = {
  toggled: false,
  oninit({ attrs, state }) {
    state.toggled = attrs.checked;
  },
  view({ attrs, state }) {
    const {
      id,
      class: className,
      color = "blue", // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      size = "md", // "sm" | "md" | "lg"
      disabled,
      label,
      name,
      onclick: onClick,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(toggleTheme, customTheme);

    const toggle = () => (state.toggled = !state.toggled);

    const handleClick = () => {
      if (!disabled) {
        toggle();
        if (onClick) {
          onClick();
        }
      }
    };

    const handleOnKeyDown = (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
      }
    };

    return [
      name && state.toggled
        ? m("input", {
            checked: state.toggled,
            hidden: true,
            name: name,
            readOnly: true,
            type: "checkbox",
            class: "sr-only",
          })
        : null,
      m(
        "button",
        {
          "aria-checked": state.toggled,
          "aria-labelledby": `${id}-flowbite-toggleswitch-label`,
          id: `${id}-flowbite-toggleswitch`,
          onclick: handleClick,
          onkeydown: handleOnKeyDown,
          role: "switch",
          tabIndex: 0,
          type: "button",
          class: twMerge(theme.root.base, theme.root.active[disabled ? "off" : "on"], className),
          ...props,
        },
        m("div", {
          class: twMerge(
            theme.toggle.base,
            theme.toggle.checked[state.toggled ? "on" : "off"],
            state.toggled && theme.toggle.checked.color[color],
            theme.toggle.sizes[size],
          ),
        }),
        label?.length
          ? m(
              "span",
              {
                id: `${id}-flowbite-toggleswitch-label`,
                class: theme.root.label,
              },
              label,
            )
          : null,
      ),
    ];
  },
};
