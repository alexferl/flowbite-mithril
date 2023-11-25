---
layout: home
title: List Group
description: Use the list group component to display a series of items, buttons or links inside a single element
group: components
toc: true

previous: KBD
previousLink: components/kbd/
next: Navbar
nextLink: components/navbar/
---

The list group component can be used to show a list of items inside an unordered list for website navigation, show a list of items inside a card, and more.

You can choose from one of the examples below based on various styles and options and you can customize the component with Mithril attributes and the classes from Tailwind CSS.

## Default list group

Use the default example to create a simple list of items inside a menu by using the `ListGroup` component with `ListGroup.Item` child components inside of it.

{{< example id="default" github="components/list-group.md" >}}
import { ListGroup } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex justify-center" }, [
      m(ListGroup, { class: "w-48" }, [
        m(ListGroup.Item, "Profile"),
        m(ListGroup.Item, "Settings"),
        m(ListGroup.Item, "Messages"),
        m(ListGroup.Item, { disabled: true }, "Download"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left"
  },
  "item": {
    "base": "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    "link": {
      "base": "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
      "active": {
        "off": "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        "on": "bg-blue-700 text-white dark:bg-gray-800"
      },
      "disabled": {
        "off": "",
        "on": "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed"
      },
      "href": {
        "off": "",
        "on": ""
      },
      "icon": "mr-2 h-4 w-4"
    }
  }
}
{{< /example >}}
