---
layout: home
title: Breadcrumb
description: Get started with the breadcrumb component to show the current page location based on the URL structure using Mithril and Tailwind CSS
group: components
toc: true

previous: Banner
previousLink: components/banner/
next: Button
nextLink: components/button/
---

The breadcrumb component can be used to indicate the current page's location within a navigational hierarchy and you can choose from multiple examples, colors, and sizes built with Mithril and based on the utility classes from Tailwind CSS.

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "",
    "list": "flex items-center"
  },
  "item": {
    "base": "group flex items-center",
    "chevron": "mx-1 h-3 w-3 text-gray-400 group-first:hidden md:mx-2",
    "href": {
      "off": "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      "on": "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    "icon": "mr-2 h-3 w-3"
  }
}
{{< /example >}}
