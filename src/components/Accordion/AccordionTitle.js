import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { accordionTheme } from "./theme.js";
import { ChevronDownIcon } from "flowbite-icons-mithril/outline";

export const AccordionTitle = {
  isOpen: false,
  flush: false,
  view({ attrs, children, state }) {
    const {
      class: className,
      as: Heading = "h2",
      arrowIcon: ArrowIcon = ChevronDownIcon,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(accordionTheme.title, customTheme);

    return m(
      "button",
      {
        class: twMerge(
          theme.base,
          theme.flush[state.flush ? "on" : "off"],
          theme.open[state.isOpen ? "on" : "off"],
          className,
        ),
        type: "button",
        onclick: () => {
          state.isOpen = !state.isOpen;
        },
        ...props,
      },
      [
        m(Heading, { class: theme.heading }, children),
        ArrowIcon &&
          m(ArrowIcon, {
            "aria-hidden": "true",
            class: twMerge(theme.arrow.base, theme.arrow.open[state.isOpen ? "on" : "off"]),
          }),
      ],
    );
  },
};
