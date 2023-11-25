---
layout: home
title: Range
description: Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options
group: forms
toc: true

previous: Radio
previousLink: forms/radio/
next: Select
nextLink: forms/select/
---

## Default radio

The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

{{< example id="default" github="forms/range.md" >}}
import { Label, Range } from "flowbite-mithril";

const Component = {
  view: () =>
    m(
      "div",
      { class: "flex max-w-md flex-col gap-4" },
      m("div", [
        m("div", { class: "mb-1 block" }, [
          m(Label, { for: "default-range" }, "Default"),
          m(Range, { id: "default-range" }),
        ]),
      ]),
      m("div", [
        m("div", { class: "mb-1 block" }, [
          m(Label, { for: "disabled-range" }, "Disabled"),
          m(Range, { id: "disabled-range", disabled: true }),
        ]),
      ]),
      m("div", [
        m("div", { class: "mb-1 block" }, [
          m(Label, { for: "sm-range" }, "Small"),
          m(Range, { id: "sm-range", size: "sm" }),
        ]),
      ]),
      m("div", [
        m("div", { class: "mb-1 block" }, [
          m(Label, { for: "md-range" }, "Medium"),
          m(Range, { id: "md-range", size: "md" }),
        ]),
      ]),
      m("div", [
        m("div", { class: "mb-1 block" }, [
          m(Label, { for: "lg-range" }, "Large"),
          m(Range, { id: "lg-range", size: "lg" }),
        ]),
      ]),
    ),
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
      "base": "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
      "sizes": {
        "sm": "h-1 range-sm",
        "md": "h-2",
        "lg": "h-3 range-lg"
      }
    }
  }
}
{{< /example >}}

