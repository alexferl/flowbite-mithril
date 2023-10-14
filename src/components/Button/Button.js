import m from "mithril";
import { twMerge } from "tailwind-merge";
import { buttonGroupTheme, buttonTheme } from "./theme";
import { Spinner } from "../Spinner/Spinner";
import { ButtonGroup } from "./ButtonGroup";

const theme = buttonTheme;

export const ButtonComponent = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    const color = attrs.color || "info";
    const disabled = attrs.disabled || false;
    const fullSized = attrs.fullSized;
    const isProcessing = attrs.isProcessing || false;
    const processingLabel = attrs.processingLabel || "Loading...";
    const processingSpinner = attrs.processingSpinner;
    const gradientDuoTone = attrs.gradientDuoTone;
    const gradientMonochrome = attrs.gradientMonochrome;
    const label = attrs.label;
    const outline = attrs.outline || false;
    const pill = attrs.pill || false;
    const positionInGroup = attrs.positionInGroup || "none";
    const size = attrs.size || "md";

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
});

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
