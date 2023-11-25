---
layout: home
title: Spinner
description: Indicate a loading status when fetching data by using the spinner component built with Mithril and animated with Tailwind CSS based on multiple colors and sizes
group: components
toc: true

previous: Navbar
previousLink: components/navbar/
next: Checkbox
nextLink: forms/checkbox/
---

The spinner component should be used to indicate a loading status of the content that you're fetching from your database and you can choose from multiple styles, colors, sizes, and animations based on Mithril and Tailwind CSS.

## Default spinner

Use the default spinner element by adding the `<Spinner>` Mithril component inside your code and integrate the `aria-label` attribute to allow screen readers parse the component for accessibility.

{{< example id="default" github="components/spinner.md" >}}
import { Spinner } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Spinner, { "aria-label": "Default status example" }),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "inline animate-spin text-gray-200",
  "color": {
    "failure": "fill-red-600",
    "gray": "fill-gray-600",
    "info": "fill-blue-600",
    "pink": "fill-pink-600",
    "purple": "fill-purple-600",
    "success": "fill-green-500",
    "warning": "fill-yellow-400"
  },
  "light": {
    "off": {
      "base": "dark:text-gray-600",
      "color": {
        "failure": "",
        "gray": "dark:fill-gray-300",
        "info": "",
        "pink": "",
        "purple": "",
        "success": "",
        "warning": ""
      }
    },
    "on": {
      "base": "",
      "color": {
        "failure": "",
        "gray": "",
        "info": "",
        "pink": "",
        "purple": "",
        "success": "",
        "warning": ""
      }
    }
  },
  "size": {
    "xs": "w-3 h-3",
    "sm": "w-4 h-4",
    "md": "w-6 h-6",
    "lg": "w-8 h-8",
    "xl": "w-10 h-10"
  }
}
{{< /example >}}

