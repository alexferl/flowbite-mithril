---
layout: home
title: Navbar
description: The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
group: components
toc: true

previous: List Group
previousLink: components/list-group/
next: Spinner
nextLink: components/spinner/
---

The navbar component is an important section of any website as it is the first section that appears on any page and it serves the purpose of allowing your users to navigate throughout your website.

Generally, the navigation bar consists of the logo of your website, a list of menu items for navigation and other secondary elements such as buttons, dropdowns, and a hamburger menu for mobile devices.

All interactivity and options are handled by using Mithril attributes and you can customise the appearance of the navbar using the classes from Tailwind CSS.

## Default navbar

Use the default navbar component to showcase the logo and a list of menu items with links to other pages of your website by adding the `<Navbar.Brand>` and `<Navbar.Link>` components inside the `<Navbar>` component.

On mobile device the navigation bar will be collapsed and you will be able to use the hamburger menu to toggle the menu items by adding the `<Navbar.Toggle>` component.

{{< example id="default" github="components/navbar.md" >}}
import { Navbar } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Navbar, { fluid: true, rounded: true }, [
      m(Navbar.Brand, { href: "https://alexferl.github.io/flowbite-mithril" }, [
        m("img", {
          src: "/flowbite-mithril/images/logo.svg",
          class: "mr-3 h-6 sm:h-9",
          alt: "Flowbite Mithril Logo",
        }),
        m(
          "span",
          { class: "self-center whitespace-nowrap text-xl font-semibold dark:text-white" },
          "Flowbite Mithril",
        ),
      ]),
      m(Navbar.Toggle),
      m(Navbar.Collapse, [
        m(Navbar.Link, { href: "#", active: true }, "Home"),
        m(Navbar.Link, { href: "#" }, "About"),
        m(Navbar.Link, { href: "#" }, "Services"),
        m(Navbar.Link, { href: "#" }, "Pricing"),
        m(Navbar.Link, { href: "#" }, "Contact"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "border",
      "off": ""
    },
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-between",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": "flex items-center"
  },
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pr-4 pl-3 md:p-0",
    "active": {
      "on": "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
      "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    "icon": "h-6 w-6 shrink-0"
  }
}
{{< /example >}}
