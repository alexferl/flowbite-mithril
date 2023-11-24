---
layout: home
title: Button Group
description: Button groups allow you to stack together multiple buttons in a single line horizontally based on multiple styles and sizes using Mithril and Tailwind CSS
group: components
toc: true

previous: Button
previousLink: components/button/
next: Card
nextLink: components/card/
---

The button group component from Flowbite Mithril can be used to stack multiple button elements and group them visually together. It can often be used to create a navigation menu or a toolbar.

Choose from multiple examples and you can update properties such as the color, size, and appearance using the attributes from Mithril and utility classes from Tailwind CSS.

## Default button group

Use this example of the `<Button.Group>` component by adding the `Button` component as a child element and stack them together. You can also use the `color` attribute to change the color of the buttons.

{{< example id="default" github="components/button-group.md" >}}
import { Button } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Button.Group, [
      m(Button, { color: "gray" }, "Profile"),
      m(Button, { color: "gray" }, "Settings"),
      m(Button, { color: "gray" }, "Messages"),
    ]),
};
{{< /example >}}

## Button group with icons

Import one of the icons from the `flowbite-icons-mithril` library and add it as a child element to the `<Button>` component to create multiple buttons with icons grouped together.

{{< example id="icons" github="components/button-group.md" >}}
import { Button } from "flowbite-mithril";
import { UserCircleIcon, AdjustmentsVerticalIcon, DownloadIcon } from "flowbite-icons-mithril/solid";

const Component = {
  view: () =>
    m(Button.Group, [
      m(Button, { color: "gray" }, m(UserCircleIcon, { class: "mr-3" }), "Profile"),
      m(Button, { color: "gray" }, m(AdjustmentsVerticalIcon, { class: "mr-3" }), "Settings"),
      m(Button, { color: "gray" }, m(DownloadIcon, { class: "mr-3" }), "Messages"),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "inline-flex",
  "position": {
    "none": "focus:ring-2",
    "start": "rounded-r-none",
    "middle": "rounded-none border-l-0 pl-0",
    "end": "rounded-l-none border-l-0 pl-0"
  }
}
{{< /example >}}
