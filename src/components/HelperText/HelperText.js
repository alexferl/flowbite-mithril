import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { helperTextTheme } from "./theme.js";

export const HelperText = {
  view({ attrs, children }) {
    const { class: className, color = "default", theme: customTheme = {}, value, ...props } = attrs;
    const theme = mergeDeep(helperTextTheme, customTheme);

    console.log("CJOLD", children);

    return m(
      "p",
      { class: twMerge(theme.root.base, theme.root.colors[color], className), ...props },
      value ?? children ?? "",
    );
  },
};

/*
export const HelperText: FC<HelperTextProps> = ({
  children,
  className,
  color = 'default',
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.helperText, customTheme);

  return (
    <p className={twMerge(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ''}
    </p>
  );
};

 */
