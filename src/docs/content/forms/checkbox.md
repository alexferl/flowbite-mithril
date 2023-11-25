---
layout: home
title: Checkbox
description: Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
group: forms
toc: true

previous: Spinner
previousLink: components/spinner/
next: File Input
nextLink: forms/file-input/
---

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants.

## Default checkbox

Use this example to show a list of options to your users that they can choose from by using the `<Checkbox>` component.

{{< example id="default" github="forms/checkbox.md" >}}
import { Checkbox, Label } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex max-w-md flex-col gap-4", id: "checkbox" }, [
      m("div", { class: "flex items-center gap-2" }, [
        m(Checkbox, { id: "accepted", checked: true }),
        m(Label, { for: "accepted", class: "flex" }, [
          " I agree with the",
          m.trust("&nbsp;"),
          " ",
          m(m.route.Link, { href: "#", class: "text-blue-600 hover:underline dark:text-blue-500" }, " terms and conditions "),
        ]),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Checkbox, { id: "promotion" }),
        m(Label, { for: "promotion" }, "I want to get promotional offers"),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Checkbox, { id: "age" }),
        m(Label, { for: "age" }, "I am 18 years or older"),
      ]),
      m("div", { class: "flex gap-2" }, [
        m("div", { class: "flex h-5 items-center" }, m(Checkbox, { id: "shipping" })),
        m("div", { class: "flex flex-col" }, [
          m(Label, { for: "shipping" }, "Free shipping via Flowbite"),
          m(
            "div",
            { class: "text-gray-500 dark:text-gray-300" },
            m("span", { class: "text-xs font-normal" }, [
              " For orders shipped from Flowbite from ",
              m("span", { class: "font-medium" }, "€ 25"),
              " in books or",
              m.trust("&nbsp;"),
              " ",
              m("span", "€ 29"),
              " on other categories ",
            ]),
          ),
        ]),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Checkbox, { id: "disabled", disabled: true }),
        m(Label, { for: "disabled", disabled: true }, "Eligible for international shipping (disabled)"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
    "color": {
      "blue": "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
      "cyan": "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
      "dark": "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
      "default": "focus:ring-blue-600 dark:ring-offset-blue-600 dark:focus:ring-blue-600 text-blue-600",
      "failure": "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
      "gray": "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
      "green": "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
      "indigo": "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
      "info": "focus:ring-blue-800 dark:ring-offset-gray-800 dark:focus:ring-blue-800 text-blue-800",
      "light": "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
      "lime": "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
      "pink": "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
      "purple": "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
      "red": "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
      "success": "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
      "teal": "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
      "warning": "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
      "yellow": "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400"
    }
  }
}
{{< /example >}}
