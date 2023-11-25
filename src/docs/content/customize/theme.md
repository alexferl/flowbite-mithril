---
layout: home
title: Theme
description: Learn how you can change the Tailwind CSS classes used by the components in Flowbite Mithril
group: customize
toc: true

previous: Quickstart
previousLink: getting-started/quickstart/
next: Accordion
nextLink: components/accordion/
---

Flowbite Mithril is built on top of Tailwind CSS and it uses Tailwind CSS classes to style the components. This means that you can customize the components by changing the Tailwind CSS classes used by the components.

You have a few options, and each has its own pros and cons.

## Option 1: Change the Tailwind CSS classes directly in the component

This is the easiest way to customize the components. You can change the Tailwind CSS classes directly in the component via the `class` attribute.

{{< example id="option-1" show_preview=false >}}
import { Button } from "flowbite-mithril";

const Component = {
  view: () =>
    m(
      Button,
      { class: "bg-red-500 enabled:hover:bg-red-600 dark:bg-red-500 dark:enabled:hover:bg-red-600" },
      "Click me",
    ),
};
{{< /example >}}

The downside of this approach is that you have to change the `class` attribute in every component instance. This can be tedious and error-prone. Also, some components have nested elements that are not directly exposed, which in some cases makes this approach impossible.

## Option 2: Create a reusable component with a custom theme

You can pass `theme={}` directly to any component, which will override the theme for that component, but not its children. This is useful if you want to create a reusable component with a custom theme.
{{< example id="option-2" show_preview=false >}}
import { Button } from "flowbite-mithril";

const customTheme = {
  color: {
    primary: "bg-red-500 enabled:hover:bg-red-600 dark:bg-red-500 dark:enabled:hover:bg-red-600 text-white",
  },
};

const Component = {
  view: () =>
    m(Button, { theme: customTheme, color: "primary" }, "Click me"),
};
{{< /example >}}
