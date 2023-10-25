import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { omit } from "../../helpers/omit.js";
import { dropdownTheme } from "./theme.js";
import { DropdownItem } from "./DropdownItem.js";
import { DropdownHeader } from "./DropdownHeader.js";
import { DropdownDivider } from "./DropdownDivider.js";
import { Button } from "../Button/index.js";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon, ChevronLeftIcon } from "flowbite-icons-mithril/outline";
import { Dropdown as FlowbiteDropdown } from "flowbite";

export const DropdownComponent = {
  menuId: "dropdownMenu",
  buttonId: "dropdownButton",
  dropdown: null,
  options: {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
  },
  oninit({ attrs, state }) {
    if (attrs.id) {
      state.menuId = `${attrs.id}Menu`;
      state.buttonId = `${attrs.id}Button`;
    }

    if (attrs.placement) {
      state.options.placement = attrs.placement;
    }
    if (attrs.trigger) {
      state.options.triggerType = attrs.trigger;
    }
    if (attrs.offsetSkidding) {
      state.options.offsetSkidding = attrs.offsetSkidding;
    }
    if (attrs.offsetDistance) {
      state.options.offsetDistance = attrs.offsetDistance;
    }
    if (attrs.delay) {
      state.options.delay = attrs.delay;
    }
    if (attrs.ignoreClickOutsideClass) {
      state.options.ignoreClickOutsideClass = attrs.ignoreClickOutsideClass;
    }
  },
  oncreate({ state }) {
    const targetEl = document.getElementById(state.menuId);
    const triggerEl = document.getElementById(state.buttonId);
    state.dropdown = new FlowbiteDropdown(targetEl, triggerEl, state.options);
  },
  view({ attrs, children, state }) {
    const {
      class: className,
      arrowIcon = true,
      dismissOnClick = true,
      inline,
      label,
      size = "md", // "sm" | "md" | "lg"
      theme: customTheme = {},
      ...props
    } = attrs;

    const theirProps = removeOptionsProps(props);

    const theme = mergeDeep(dropdownTheme, customTheme);

    let Icon = ChevronDownIcon;
    if (state.options.placement.startsWith("right")) {
      Icon = ChevronRightIcon;
    } else if (state.options.placement.startsWith("left")) {
      Icon = ChevronLeftIcon;
    } else if (state.options.placement.startsWith("top")) {
      Icon = ChevronUpIcon;
    }

    return [
      inline
        ? m("button", { id: state.buttonId, type: "button", class: theme.inlineWrapper }, label)
        : m(
            Button,
            {
              id: state.buttonId,
              type: "button",
              size: size,
              "data-dropdown-placement": state.options.placement,
              "data-dropdown-toggle": state.menuId,
              onclick: () => {
                state.dropdown.toggle();
              },
            },
            [label, arrowIcon && m(Icon, { class: theme.arrowIcon })],
          ),
      m(
        "div",
        {
          id: state.menuId,
          class: twMerge(theme.floating.base, theme.floating.animation, "duration-100", className),
          ...theirProps,
        },
        m("ul", { class: theme.content, tabIndex: -1 }, children),
      ),
    ];
  },
};

const removeOptionsProps = omit([
  "id",
  "placement",
  "trigger",
  "offsetSkidding",
  "offsetDistance",
  "delay",
  "ignoreClickOutsideClass",
]);

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
});
