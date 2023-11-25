---
layout: home
title: Radio
description: Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors
group: forms
toc: true

previous: Input
previousLink: forms/input/
next: Range
nextLink: forms/range/
---

## Default radio

Ask your users to choose only one value from multiple options based on the `<Radio>` component.

{{< example id="default" github="forms/radio.md" >}}
import { Label, Radio } from "flowbite-mithril";

const Component = {
  view: () =>
    m("fieldset", { class: "flex max-w-md flex-col gap-4" }, [
      m("legend", { class: "mb-4 text-gray-400" }, "Choose your favorite country"),
      m("div", { class: "flex items-center gap-2" }, [
        m(Radio, { id: "united-states", name: "countries", value: "USA", checked: true }),
        m(Label, { for: "united-states" }, "United States"),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Radio, { id: "germany", name: "countries", value: "Germany" }),
        m(Label, { for: "germany" }, "Germany"),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Radio, { id: "spain", name: "countries", value: "Spain" }),
        m(Label, { for: "spain" }, "Spain"),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Radio, { id: "uk", name: "countries", value: "United Kingdon" }),
        m(Label, { for: "uk" }, "United Kingdom"),
      ]),
      m("div", { class: "flex items-center gap-2" }, [
        m(Radio, { id: "china", name: "countries", value: "China", disabled: true }),
        m(Label, { for: "china", disabled: true }, "China (disabled)"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600 text-blue-600"
  }
}
{{< /example >}}

