---
layout: home
title: Toggle
description: Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors
group: forms
toc: true

previous: Toggle
previousLink: forms/toggle/
---

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available.

## Default toggle

{{< example id="default" github="forms/toggle.md" >}}
import { Label, Toggle } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex max-w-md flex-col gap-4" }, [
      m(Toggle, { id: "toggle", label: "Toggle me" }),
      m(Toggle, { id: "toggle-checked", checked: true, label: "Toggle me (checked)" }),
      m(Toggle, { id: "toggle-disabled", disabled: true, label: "Toggle me (disabled)" }),
      m(Toggle, { id: "toggle-disabled-checked", disabled: true, checked: true, label: "Toggle me (disabled)" }),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "group relative flex items-center rounded-lg focus:outline-none",
    "active": {
      "on": "cursor-pointer",
      "off": "cursor-not-allowed opacity-50"
    },
    "label": "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  "toggle": {
    "base": "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25",
    "checked": {
      "on": "after:translate-x-full after:border-white",
      "off": "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      "color": {
        "blue": "bg-blue-700 border-blue-700",
        "cyan": "bg-cyan-500 border-cyan-500",
        "dark": "bg-dark-700 border-dark-900",
        "failure": "bg-red-700 border-red-900",
        "gray": "bg-gray-500 border-gray-600",
        "green": "bg-green-600 border-green-700",
        "indigo": "bg-indigo-400 border-indigo-400",
        "info": "bg-blue-600 border-blue-600",
        "light": "bg-light-700 border-light-900",
        "lime": "bg-lime-400 border-lime-400",
        "pink": "bg-pink-600 border-pink-600",
        "purple": "bg-purple-700 border-purple-900",
        "red": "bg-red-700 border-red-900",
        "success": "bg-green-500 border-green-500",
        "teal": "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        "warning": "bg-yellow-600 border-yellow-600",
        "yellow": "bg-yellow-400 border-yellow-400"
      }
    },
    "sizes": {
      "sm": "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
      "md": "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
      "lg": "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
    }
  }
}
{{< /example >}}

