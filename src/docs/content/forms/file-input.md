---
layout: home
title: File Input
description: Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes
group: forms
toc: true

previous: Checkbox
previousLink: forms/checkbox/
next: Input
nextLink: forms/input/
---

## Default file input

Use the `<FileInput>` component to allow users to upload files from their browser.

{{< example id="default" github="forms/file-input.md" >}}
import { FileInput, Label } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { id: "fileUpload", class: "max-w-md" }, [
      m(
        "div",
        { class: "mb-2 block" },
        m(Label, { for: "file", value: "Upload file" }),
        m(FileInput, {
          id: "file",
          helperText: "A profile picture is useful to confirm your are logged into your account",
        }),
      ),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "flex"
  },
  "field": {
    "base": "relative w-full",
    "input": {
      "base": "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      "sizes": {
        "sm": "sm:text-xs",
        "md": "text-sm",
        "lg": "sm:text-md"
      },
      "colors": {
        "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        "info": "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      }
    }
  }
}
{{< /example >}}
