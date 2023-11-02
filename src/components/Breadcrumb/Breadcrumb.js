import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { breadcrumbTheme } from "./theme.js";
import { BreadcrumbItem } from "./BreadcrumbItem.js";

export const BreadcrumbComponent = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(breadcrumbTheme.root, customTheme);

    return m(
      "nav",
      { "aria-label": "Breadcrumb", class: twMerge(theme.base, className), ...props },
      m("ol", { class: theme.list }, children),
    );
  },
};

export const Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
