---
layout: home
title: Badge
description: Get started with the badge component to add labels or counters inside paragraphs, buttons, and inputs based on multiple colors and sizes from Mithril and Tailwind CSS
group: components
toc: true

previous: Avatar
previousLink: components/avatar/
next: Banner
nextLink: components/banner/
---

The badge component can be used to show text, labels, and counters inside a small box or circle element which can be placed inside paragraphs, buttons, dropdowns, menu items, and more.

You can choose from multiple examples of badges based on the color, size, and icon and even use it as a link component by leveraging the properties from Mithril and classes from Tailwind CSS.

## Default badges

Here's a list of default `<Badge>` component examples where you can use the `color` attribute to change the color of the badge based on contextual colors such as info, gray, success, and more.

{{< example id="default" >}}
import { Badge } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Badge, { color: "info" }, "Default"),
      m(Badge, { color: "gray" }, "Dark"),
      m(Badge, { color: "failure" }, "Failure"),
      m(Badge, { color: "success" }, "Success"),
      m(Badge, { color: "warning" }, "Warning"),
      m(Badge, { color: "indigo" }, "Indigo"),
      m(Badge, { color: "purple" }, "Purple"),
      m(Badge, { color: "pink" }, "Pink"),
    ]),
};
{{< /example >}}

## Badge as link

Use the badge as a link component by adding the `href` attribute and passing the URL as a value.

{{< example id="link" >}}
import { Badge } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Badge, { href: "#" }, "Default"),
      m(Badge, { size: "sm", href: "#" }, "Default"),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "flex h-fit items-center font-semibold",
    "color": {
      "blue": "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      "cyan": "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      "dark": "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
      "failure": "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      "gray": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      "green": "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      "indigo": "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      "info": "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      "light": "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
      "lime": "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
      "pink": "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
      "purple": "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      "red": "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      "success": "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      "teal": "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
      "warning": "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      "yellow": "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300"
    },
    "href": "group",
    "size": {
      "xs": "p-1 text-xs",
      "sm": "p-1.5 text-sm"
    }
  },
  "icon": {
    "off": "rounded px-2 py-0.5",
    "on": "rounded-full p-1.5",
    "size": {
      "xs": "w-3 h-3",
      "sm": "w-3.5 h-3.5"
    }
  }
}
{{< /example >}}
