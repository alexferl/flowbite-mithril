import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { omit } from "../../helpers/omit.js";
import { cardTheme } from "./theme.js";

export const Card = {
  view({ attrs, children }) {
    const { class: className, horizontal, href, theme: customTheme = {}, ...props } = attrs;
    const Component = typeof href === "undefined" ? "div" : "a";
    const theirProps = removeCustomProps(props);

    if (horizontal) {
      props.horizontal = horizontal;
    }

    const theme = mergeDeep(cardTheme, customTheme);

    return m(
      Component,
      {
        href: href,
        class: twMerge(
          theme.root.base,
          theme.root.horizontal[horizontal ? "on" : "off"],
          href && theme.root.href,
          className,
        ),
        ...theirProps,
      },
      [m(Image, { ...props }), m("div", { class: theme.root.children }, children)],
    );
  },
};

const Image = {
  view({ attrs }) {
    const { horizontal, imgAlt, imgSrc, theme: customTheme = {} } = attrs;

    const theme = mergeDeep(cardTheme, customTheme);

    if (imgSrc) {
      return m("img", {
        alt: imgAlt ?? "",
        src: imgSrc,
        class: twMerge(theme.img.base, theme.img.horizontal[horizontal ? "on" : "off"]),
      });
    }

    return null;
  },
};

const removeCustomProps = omit(["class", "horizontal", "href", "imgSrc", "imgAlt", "theme"]);
