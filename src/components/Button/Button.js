import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { buttonGroupTheme, buttonTheme } from "./theme.js";
import { ButtonGroup } from "./ButtonGroup.js";
import { Spinner } from "../Spinner/Spinner.js";

export const ButtonComponent = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "info", // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      disabled = false,
      fullSized,
      isProcessing = false,
      processingLabel = "Loading...",
      processingSpinner,
      gradientDuoTone, // "cyanToBlue" | "greenToBlue" | "pinkToOrange" | "purpleToBlue" | "purpleToPink" | "redToYellow" | "tealToLime"
      gradientMonochrome, // "cyan" | "failure" | "info" | "lime" | "pink" | "purple" | "success" | "teal"
      label,
      outline = false,
      pill = false,
      positionInGroup = "none", // "none" | "start" | "middle" | "end"
      size = "md", // "xs" | "sm" | "md" | "lg" | "xl"
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(buttonTheme, customTheme);

    return m(
      "button",
      {
        type: "button",
        disabled: disabled,
        class: twMerge(
          theme.base,
          disabled && theme.disabled,
          !gradientDuoTone && !gradientMonochrome && theme.color[color],
          gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
          outline && (theme.outline.color[color] ?? theme.outline.color.default),
          theme.pill[pill ? "on" : "off"],
          fullSized && theme.fullSized,
          buttonGroupTheme.position[positionInGroup],
          className,
        ),
        ...props,
      },
      [
        m(
          "span",
          {
            class: twMerge(
              theme.inner.base,
              theme.outline[outline ? "on" : "off"],
              theme.outline.pill[outline && pill ? "on" : "off"],
              theme.size[size],
              outline && !theme.outline.color[color] && theme.inner.outline,
              isProcessing && theme.isProcessing,
              isProcessing && theme.inner.isProcessingPadding[size],
              theme.inner.position[positionInGroup],
            ),
          },
          isProcessing &&
            m(
              "span",
              {
                class: twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size]),
              },
              processingSpinner || m(Spinner, { size: size }),
            ),
          children.length > 0
            ? children
            : m(
                "span",
                {
                  class: twMerge(theme.label),
                },
                isProcessing ? processingLabel : label,
              ),
        ),
      ],
    );
  },
};

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
