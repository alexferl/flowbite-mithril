---
layout: home
title: Dropdown
description: Use the dropdown component to trigger a list of menu items when clicking on an element such as a button or link based on multiple styles, sizes, and placements with Mithril
group: components
toc: true

previous: Button Group
previousLink: components/button-group/
next: Footer
nextLink: components/footer/
---

The dropdown component is a UI component built with Mithril that allows you to show a list of items when clicking on a trigger element (i.e. a button) that you can use to build dropdown menus, lists, and more.

The default styles are built with the utility classes from Tailwind CSS and you can use the custom attributes from Mithril to customize the behaviour and positioning of the dropdowns.

## Default dropdown

{{< example id="default" github="components/dropdown.md" >}}
import { Dropdown } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Dropdown, { label: "Dropdown button", dismissOnClick: false }, [
      m(Dropdown.Item, "Dashboard"),
      m(Dropdown.Item, "Settings"),
      m(Dropdown.Item, "Earnings"),
      m(Dropdown.Item, "Sign out")
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-2 text-sm text-gray-700 dark:text-gray-200",
  "floating": {
    "animation": "transition-opacity",
    "base": "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden",
    "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
    "header": "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
    "item": {
      "container": "",
      "base": "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      "icon": "mr-2 h-4 w-4"
    }
  },
  "inlineWrapper": "flex items-center"
}
{{< /example >}}
