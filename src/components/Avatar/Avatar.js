import m from "mithril";
import { twMerge } from "tailwind-merge";
import { avatarTheme } from "./theme.js";
import { AvatarGroup } from "./AvatarGroup.js";
import { AvatarGroupCounter } from "./AvatarGroupConter.js";

const theme = avatarTheme;

export const AvatarComponent = () => ({
  view: ({ attrs, children }) => {
    const className = attrs.className;
    const alt = attrs.alt || "";
    const bordered = attrs.bordered || false;
    const color = attrs.color || "light";
    const img = attrs.img;
    const placeholderInitials = attrs.placeholderInitials || "";
    const rounded = attrs.rounded || false;
    const size = attrs.size || "md";
    const stacked = attrs.stacked || false;
    const status = attrs.status;
    const statusPosition = attrs.statusPosition || "top-left";

    const imgClassName = twMerge(
      theme.root.img.base,
      bordered && theme.root.bordered,
      bordered && theme.root.color[color],
      rounded && theme.root.rounded,
      stacked && theme.root.stacked,
      theme.root.img.on,
      theme.root.size[size],
    );

    const imgProps = twMerge(imgClassName, theme.root.img.on);

    return m(
      "div",
      { class: twMerge(theme.root.base, className) },
      m("div", { class: "relative" }, [
        img
          ? m("img", { class: imgProps, alt: alt, src: img })
          : placeholderInitials
          ? m(
              "div",
              {
                class: twMerge(
                  theme.root.img.off,
                  theme.root.initials.base,
                  stacked && theme.root.stacked,
                  bordered && theme.root.bordered,
                  bordered && theme.root.color[color],
                  theme.root.size[size],
                  rounded && theme.root.rounded,
                ),
              },
              m("span", { class: twMerge(theme.root.initials.text) }, placeholderInitials),
            )
          : m(
              "div",
              { class: twMerge(imgClassName, theme.root.img.off) },
              m(
                "svg",
                {
                  class: theme.root.img.placeholder,
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                m("path", {
                  fillRule: "evenodd",
                  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                  clipRule: "evenodd",
                }),
              ),
            ),
        status &&
          m("span", {
            class: twMerge(
              theme.root.status.base,
              theme.root.status[status],
              theme.root.statusPosition[statusPosition],
            ),
          }),
      ]),
      children.length > 0 && m("div", children),
    );
  },
});

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
