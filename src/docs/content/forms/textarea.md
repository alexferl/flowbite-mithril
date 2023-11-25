---
layout: home
title: Textarea
description: Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants
group: forms
toc: true

previous: Select
previousLink: forms/select/
next: Toggle
nextLink: forms/toggle/
---

The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

## Default textarea

Use this example to show a textarea component and receive longer text from your users.

{{< example id="default" github="forms/textarea.md" >}}
import { Label, Textarea } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "max-w-md" }, [
      m("div", { class: "mb-2 block" }, m(Label, { for: "comment" }, "Your message")),
      m(Textarea, { id: "comment", placeholder: "Leave a comment...", rows: 4, required: true }),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
  "colors": {
    "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    "info": "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
    "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
  },
  "withShadow": {
    "on": "shadow-sm dark:shadow-sm-light",
    "off": ""
  }
}
{{< /example >}}

