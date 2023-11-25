---
layout: home
title: Select
description: Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants
group: forms
toc: true

previous: Select
previousLink: forms/select/
next: Textarea
nextLink: forms/textarea/
---

## Default select

This component can be used to allow users to select from multiple options based on the `<Select>` component.

{{< example id="default" github="forms/select.md" >}}
import { Label, Select } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "max-w-md" }, [
      m("div", { class: "mb-2 block" }, m(Label, { for: "countries" }, "Select your country")),
      m(Select, { id: "countries", required: true }, [
        m("option", "United States"),
        m("option", "Canada"),
        m("option", "France"),
        m("option", "Germany"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "flex",
  "addon": "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  "field": {
    "base": "relative w-full",
    "icon": {
      "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    "select": {
      "base": "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      "withIcon": {
        "on": "pl-10",
        "off": ""
      },
      "withAddon": {
        "on": "rounded-r-lg",
        "off": "rounded-lg"
      },
      "withShadow": {
        "on": "shadow-sm dark:shadow-sm-light",
        "off": ""
      },
      "sizes": {
        "sm": "p-2 sm:text-xs",
        "md": "p-2.5 text-sm",
        "lg": "sm:text-md p-4"
      },
      "colors": {
        "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        "info": "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      }
    }
  }
}
{{< /example >}}

