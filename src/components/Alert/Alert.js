import m from "mithril";
import { twMerge } from "tailwind-merge";
import { alertTheme } from "./theme.js";
import { CloseIcon } from "flowbite-icons-mithril/outline";

const theme = alertTheme;

export const Alert = {
  view({ attrs, children }) {
    const {
      additionalContent,
      class: className,
      color = "info", // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      icon,
      onDismiss,
      rounded = true,
      withBorderAccent = false,
      ...props
    } = attrs;

    return m(
      "div",
      {
        class: twMerge(
          theme.base,
          theme.color[color],
          rounded && theme.rounded,
          withBorderAccent && theme.borderAccent,
          className,
        ),
        role: "alert",
        ...props,
      },
      m("div", { class: theme.wrapper }, [
        icon && m(icon, { class: theme.icon }),
        m("div", children),
        typeof onDismiss === "function" &&
          m(
            "button",
            {
              "aria-label": "Dismiss",
              class: twMerge(theme.closeButton.base, theme.closeButton.color[color]),
              onclick: onDismiss,
              type: "button",
            },
            m(CloseIcon, { "aria-hidden": true, class: theme.closeButton.icon, size: "xs" }),
          ),
      ]),
      additionalContent && m("div", additionalContent),
    );
  },
};
