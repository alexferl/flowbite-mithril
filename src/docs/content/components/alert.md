---
layout: home
title: Alert
description: Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on Mithril and Tailwind CSS
group: components
toc: true

previous: Accordion
previousLink: components/accordion/
next: Avatar
nextLink: components/avatar/
---

The alert component can be used to show a contextual text to the user such as a success or error message after form validation inside an alert box where you can choose from multiple colors, sizes, and styles.

The examples below are styled with Tailwind CSS and the reactivity is handled by Mithril and you can also add any type of content inside the alert box.

## Default alert

The default alert component is a simple alert box with a text inside it and you can use the `color` attribute to change the color of the alert box and the `title` attribute to add a title to the alert box.

Inside the `<Alert>` component you can add any type of content such as text, images, or other components as they will be considered children of the alert box.

{{< example id="default" >}}
import { Alert } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Alert, { color: "info" }, [
      m("span", { class: "font-medium" }, "Info alert!"),
      " Change a few things up and try submitting again. ",
    ]),
};
{{< /example >}}

## Alert with icon

Use the `icon` attribute to add an icon to the alert box and you can use any icon from the [Flowbite Icons Mithril](https://github.com/alexferl/flowbite-icons-mithril) library.

{{< example id="icon" >}}
import { Alert } from "flowbite-mithril";
import { InfoCircleIcon } from "flowbite-icons-mithril/solid";

const Component = {
  view: () =>
    m(Alert, { color: "failure", icon: InfoCircleIcon }, [
      m("span", { class: "font-medium" }, "Info alert!"),
      " Change a few things up and try submitting again. ",
    ]),
};
{{< /example >}}

## Dismissible alert

You can use the `onDismiss` attribute on the `<Alert>` component to add a dismiss button to the alert box by adding a function inside of it that will be called when the user clicks on the dismiss button.

{{< example id="dismissible" >}}
import { Alert } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Alert, { color: "success", onDismiss: () => alert('Alert dismissed!') }, [
      m("span", { class: "font-medium" }, "Info alert!"),
      " Change a few things up and try submitting again. ",
    ]),
};
{{< /example >}}

## Rounded alert

To make the alert box rounded you can use the `rounded` attribute on the `<Alert>` component.
{{< example id="rounded" >}}
import { Alert } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Alert, { color: "info", rounded: true }, [
      m("span", { class: "font-medium" }, "Info alert!"),
      " Change a few things up and try submitting again. ",
    ]),
};
{{< /example >}}

## Border accent

Add a border accent to the alert box by applying the `withBorderAccent` attribute on the `<Alert>` component.

{{< example id="border" >}}
import { Alert } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Alert, { color: "warning", withBorderAccent: true }, [
      m("span", { class: "font-medium" }, "Info alert!"),
      " Change a few things up and try submitting again. ",
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "flex flex-col gap-2 p-4 text-sm",
  "borderAccent": "border-t-4",
  "closeButton": {
    "base": "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    "icon": "w-4 h-4",
    "color": {
      "blue": "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      "cyan": "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      "dark": "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      "failure": "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      "gray": "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      "green": "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      "indigo": "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      "info": "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      "light": "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
      "lime": "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      "pink": "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      "purple": "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      "red": "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      "success": "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      "teal": "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      "warning": "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      "yellow": "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300"
    }
  },
  "color": {
    "blue": "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
    "cyan": "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    "dark": "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
    "failure": "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    "gray": "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
    "green": "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    "indigo": "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
    "info": "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
    "light": "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
    "lime": "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
    "pink": "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
    "purple": "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
    "red": "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    "success": "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    "teal": "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
    "warning": "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
    "yellow": "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800"
  },
  "icon": "mr-3 inline h-5 w-5 flex-shrink-0",
  "rounded": "rounded-lg",
  "wrapper": "flex items-center"
}
{{< /example >}}
