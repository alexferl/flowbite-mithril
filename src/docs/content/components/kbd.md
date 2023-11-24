---
layout: home
title: KBD
description: Use the KBD component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components
group: components
toc: true

previous: Footer
previousLink: components/footer/
next: List Group
nextLink: components/list-group/
---

The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables, cards, and more.

Use the semantic `<Kbd>` keyboard input tag to use the default monospace font which is best suited for representing input keys.

## Default KBD

Here’s a list of KBD components that you can use inside any other element.

{{< example id="default" github="components/kbd.md" >}}
import { Kbd } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-1" }, [
      m(Kbd, "Shift"),
      m(Kbd, "Ctrl"),
      m(Kbd, "Tab"),
      m(Kbd, "Caps Lock"),
      m(Kbd, "Esc"),
      m(Kbd, "Spacebar"),
      m(Kbd, "Enter"),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "px-2 py-1.5 mr-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    "icon": "inline-block"
  }
}
{{< /example >}}

