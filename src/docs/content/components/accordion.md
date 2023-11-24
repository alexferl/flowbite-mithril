---
layout: home
title: Accordion
description: Use the accordion component and its options to expand and collapse the content inside each panel based on state reactivity from Mithril and Tailwind CSS
group: components
toc: true

next: Alert
nextLink: components/alert/
---

The accordion component from Flowbite Mithril can be used to toggle the visibility of the content of each accordion panel tab by expanding the collapsing the trigger element based on multiple examples and styles.

The reactivity and state is handled by Mithril and the components is built using the Tailwind CSS framework meaning that you can easily customize the styles and colors of the accordion.

## Default accordion

Use this example of the `<Accordion>` component and the `<Accordion.Panel>` and `<Accordion.Title>` subcomponents to create an accordion with multiple panels.

{{< example id="default" github="components/accordion.md" >}}
import { Accordion } from "flowbite-mithril";

export const Component = {
  view: () =>
    m(Accordion, [
      m(Accordion.Panel, [
        m(Accordion.Title, "What is Flowbite?"),
        m(Accordion.Content, [
          m(
            "p",
            { class: "mb-2 text-gray-500 dark:text-gray-400" },
            " Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
          ),
          m("p", { class: "text-gray-500 dark:text-gray-400" }, [
            " Check out this guide to learn how to",
            m.trust("&nbsp;"),
            " ",
            m(
              "a",
              {
                href: "https://flowbite.com/docs/getting-started/introduction/",
                class: "text-blue-600 hover:underline dark:text-blue-500",
              },
              [" get started", m.trust("&nbsp;"), " "],
            ),
            " and start developing websites even faster with components on top of Tailwind CSS. ",
          ]),
        ]),
      ]),
      m(Accordion.Panel, [
        m(Accordion.Title, "What are the differences between Flowbite and Tailwind UI?"),
        m(Accordion.Content, [
          m(
            "p",
            { class: "mb-2 text-gray-500 dark:text-gray-400" },
            " Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. ",
          ),
          m("p", { class: "text-gray-500 dark:text-gray-400" }, [
            " Check out the ",
            m(
              "a",
              { href: "https://flowbite.com/figma/", class: "text-blue-600 hover:underline dark:text-blue-500" },
              " Figma design system ",
            ),
            " based on the utility classes from Tailwind CSS and components from Flowbite. ",
          ]),
        ]),
      ]),
      m(Accordion.Panel, [
        m(Accordion.Title, "Is there a Figma file available?"),
        m(Accordion.Content, [
          m(
            "p",
            { class: "mb-2 text-gray-500 dark:text-gray-400" },
            " The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. ",
          ),
          m(
            "p",
            { class: "mb-2 text-gray-500 dark:text-gray-400" },
            " However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. ",
          ),
          m("p", { class: "mb-2 text-gray-500 dark:text-gray-400" }, "Learn more about these technologies:"),
          m("ul", { class: "list-disc pl-5 text-gray-500 dark:text-gray-400" }, [
            m(
              "li",
              m(
                "a",
                { href: "https://flowbite.com/pro/", class: "text-blue-600 hover:underline dark:text-blue-500" },
                " Flowbite Pro ",
              ),
            ),
            m(
              "li",
              m(
                "a",
                {
                  href: "https://tailwindui.com/",
                  rel: "nofollow",
                  class: "text-blue-600 hover:underline dark:text-blue-500",
                },
                " Tailwind UI ",
              ),
            ),
          ]),
        ]),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    "flush": {
      "off": "rounded-lg border",
      "on": "border-b"
    }
  },
  "content": {
    "base": "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
  },
  "title": {
    "arrow": {
      "base": "h-3 w-3 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
    "flush": {
      "off": "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      "on": "bg-transparent dark:bg-transparent"
    },
    "heading": "",
    "open": {
      "off": "",
      "on": "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    }
  }
}
{{< /example >}}
