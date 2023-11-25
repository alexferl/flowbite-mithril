---
layout: home
title: Input
description: Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types
group: forms
toc: true

previous: File Input
previousLink: forms/file-input/
next: Radio
nextLink: forms/radio/
---

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Input fields

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

{{< example id="default" github="forms/input.md" >}}
import { Button, Checkbox, Label, Input } from "flowbite-mithril";

const Component = {
  view: () =>
    m("form", [
      m("div", { class: "grid gap-6 mb-6 md:grid-cols-2" }, [
        m("div", [
          m(Label, { for: "first_name", class: "mb-4" }, "First name"),
          m(Input, { type: "text", id: "first_name", placeholder: "John", required: true }),
        ]),
        m("div", [
          m(Label, { for: "last_name", class: "mb-2" }, "Last name"),
          m(Input, { type: "text", id: "last_name", placeholder: "Doe", required: true }),
        ]),
        m("div", [
          m(Label, { for: "company", class: "mb-2" }, "Company"),
          m(Input, { type: "text", id: "company", placeholder: "Flowbite", required: true }),
        ]),
        m("div", [
          m(Label, { for: "phone", class: "mb-2" }, "Phone number"),
          m(Input, {
            type: "tel",
            id: "phone",
            placeholder: "123-456-7890",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            required: true,
          }),
        ]),
        m("div", [
          m(Label, { for: "website", class: "mb-2" }, "Website URL"),
          m(Input, { type: "url", id: "website", placeholder: "flowbite.com", required: true }),
        ]),
        m("div", [
          m(Label, { for: "visitors", class: "mb-2" }, "Unique visitors (per month)"),
          m(Input, { type: "number", id: "visitors", placeholder: "", required: true }),
        ]),
      ]),
      m("div", { class: "mb-6" }, [
        m(Label, { for: "email", class: "mb-2" }, "Email address"),
        m(Input, { type: "email", id: "email", placeholder: "john.doe@company.com", required: true }),
      ]),
      m("div", { class: "mb-6" }, [
        m(Label, { for: "password", class: "mb-2" }, "Password"),
        m(Input, { type: "password", id: "password", placeholder: "•••••••••", required: true }),
      ]),
      m("div", {class: "flex items-center gap-2 mb-6" }, [
        m(Checkbox, { id: "agreed", required: true }),
        m(Label, { for: "agreed" }, [
          "I agree with the ",
          m(
            m.route.Link,
            { class: "text-blue-700 dark:text-blue-600 hover:underline", href: "#" },
            "terms and conditions",
          ),
          ".",
        ]),
      ]),
      m(Button, { type: "submit" }, "Submit"),
    ]),
}
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "flex",
  "addon": "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  "field": {
    "base": "relative w-full",
    "icon": {
      "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    "rightIcon": {
      "base": "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    "input": {
      "base": "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      "sizes": {
        "sm": "p-2 sm:text-xs",
        "md": "p-2.5 text-sm",
        "lg": "sm:text-md p-4"
      },
      "colors": {
        "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        "info": "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      },
      "withRightIcon": {
        "on": "pr-10",
        "off": ""
      },
      "withIcon": {
        "on": "pl-10",
        "off": ""
      },
      "withAddon": {
        "on": "rounded-r-lg",
        "off": "rounded-lg"
      },
      "withShadow": {
        "on": "shadow-sm dark:shadow-sm-light",
        "off": ""
      }
    }
  }
}
{{< /example >}}

