import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { textareaTheme } from "./theme.js";
import { HelperText } from "../HelperText/index.js";

export const Textarea = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "gray", // "failure" | "gray" | "info" | "success" | "warning"
      helperText,
      shadow,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(textareaTheme, customTheme);

    return [
      m(
        "textarea",
        {
          class: twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? "on" : "off"], className),
          ...props,
        },
        children,
      ),
      helperText && m(HelperText, { color: color }, helperText),
    ];
  },
};

/*
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color = 'gray', helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().textarea, customTheme);

    return (
      <>
        <textarea
          ref={ref}
          className={twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? 'on' : 'off'], className)}
          {...props}
        />
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);
 */
