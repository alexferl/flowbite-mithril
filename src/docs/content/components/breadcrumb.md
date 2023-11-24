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

## Default breadcrumb

Use the `<Breadcrumb>` component and the child `<Breadcrumb.Item>` components to create and indicate a series of page structure and URLs to help the user navigate through the website.

You can use the `href` attribute to make the breadcrumb items clickable and the `icon` attribute to add an icon to the breadcrumb item such as for the homepage.

{{< example id="default" github="components/breadcrumb.md" >}}
import { Breadcrumb } from "flowbite-mithril";
import { HomeIcon } from "flowbite-icons-mithril/solid";

const Component = {
  view: () =>
    m(Breadcrumb, { "aria-label": "Default breadcrumb example" }, [
      m(Breadcrumb.Item, { href: "#", icon: HomeIcon }, "Home"),
      m(Breadcrumb.Item, { href: "#" }, "Projects"),
      m(Breadcrumb.Item, "Flowbite Mithril"),
    ]),
};
{{< /example >}}

## Background color

You can add a solid background style to the breadcrumb component by adding the `bg-gray-50` class to the component from Tailwind CSS.

{{< example id="color" github="components/breadcrumb.md" >}}
import { Breadcrumb } from "flowbite-mithril";
import { HomeIcon } from "flowbite-icons-mithril/solid";

const Component = {
  view: () =>
    m(
      Breadcrumb,
      { "aria-label": "Solid background breadcrumb example", class: "bg-gray-50 px-5 py-3 dark:bg-gray-800" },
      [
        m(Breadcrumb.Item, { href: "#", icon: HomeIcon }, "Home"),
        m(Breadcrumb.Item, { href: "#" }, "Projects"),
        m(Breadcrumb.Item, "Flowbite Mithril"),
      ],
    ),
};
{{< /example >}}

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
