---
layout: home
title: Footer
description: Use the footer component at the end of your page to show content such as sitemap links, brand logo, social icons and more using Mithril and Tailwind CSS
group: components
toc: true

previous: Dropdown
previousLink: components/dropdown/
next: KBD
nextLink: components/kbd/
---

The footer component is an important section of a website where you should provide content such as sitemap links, copyright text, logo of your brand, social media account links, and more.

Get started with the examples from Flowbite Mithril based on multiple styles, sizes, and colors by using Mithril components and the utility classes from Tailwind CSS.

## Default footer

{{< example id="default" github="components/footer.md" >}}
import { Footer } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Footer, { container: true }, [
      m(Footer.Copyright, { href: "#", by: "Flowbite™", year: "2023" }),
      m(Footer.LinkGroup, [
        m(Footer.Link, { href: "#" }, "About"),
        m(Footer.Link, { href: "#" }, "Privacy Policy"),
        m(Footer.Link, { href: "#" }, "Licensing"),
        m(Footer.Link, { href: "#" }, "Contact"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    "container": "w-full p-6",
    "bgDark": "bg-gray-800"
  },
  "groupLink": {
    "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
    "link": {
      "base": "last:mr-0 md:mr-6",
      "href": "hover:underline"
    },
    "col": "flex-col space-y-4"
  },
  "icon": {
    "base": "text-gray-500 dark:hover:text-white",
    "size": "h-5 w-5"
  },
  "title": {
    "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  "divider": {
    "base": "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  "copyright": {
    "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    "href": "ml-1 hover:underline",
    "span": "ml-1"
  },
  "brand": {
    "base": "mb-4 flex items-center sm:mb-0",
    "img": "mr-3 h-8",
    "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}
{{< /example >}}
