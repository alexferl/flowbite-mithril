---
layout: home
title: Card
description: Get started with the card component to show content in a box such as titles, descriptions, and images based on multiple styles and sizes built with Mithril
group: components
toc: true

previous: Button Group
previousLink: components/button-group/
next: Dropdown
nextLink: components/dropdown/
---

The card component can be used to show a wide variety of content such as previews of blog posts, user profiles, pricing plans, and more. Choose from one of the many examples built with Mithril and the utility classes from Tailwind CSS.

## Default card

Use this example to show a simple card component with a title and description and apply the `href` attribute to the `<Card>` component to set a hyperlink on the card.

{{< example id="default" github="components/card.md" >}}
import { Card } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Card, { href: "#", class: "max-w-sm" }, [
      m(
        "h5",
        { class: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white" },
        " Noteworthy technology acquisitions 2021 ",
      ),
      m(
        "p",
        { class: "font-normal text-gray-700 dark:text-gray-400" },
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      ),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    "children": "flex h-full flex-col justify-center gap-4 p-6",
    "horizontal": {
      "off": "flex-col",
      "on": "flex-col md:max-w-xl md:flex-row"
    },
    "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  "img": {
    "base": "",
    "horizontal": {
      "off": "rounded-t-lg",
      "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}
{{< /example >}}
