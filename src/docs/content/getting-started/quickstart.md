---
layout: home
title: Quickstart
description: Learn how to get started with the free and open-source Flowbite Mithril UI component library based on the utility classes from Tailwind CSS
group: getting-started
toc: true

next: Customize
nextLink: customize/theme
---

## Getting started

You can install Flowbite Mithril to any Node.js project.

You'll need to be familiar with Node.js, and have it installed.

## Setup Tailwind CSS

Install Tailwind CSS:

{{< example id="install" lang="shell" show_preview=false >}}
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
{{< /example >}}

Point Tailwind CSS to files you have `class="..."` in:

{{< example id="tailwind" lang="javascript" show_preview=false >}}
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
{{< /example >}}

Add Tailwind CSS to a CSS file:

{{< example id="css" lang="css" show_preview=false >}}
@tailwind base;
@tailwind components;
@tailwind utilities;
{{< /example >}}

## Install Flowbite Mithril

Install Flowbite and Flowbite Mithril:

{{< example id="install" lang="shell" show_preview=false >}}
npm i -D flowbite flowbite-mithril
{{< /example >}}

Add the Flowbite plugin to `tailwind.config.js`, and include content from `flowbite-mithril`:

{{< example id="install" show_preview=false >}}
module.exports = {
  content: ["./node_modules/flowbite-mithril/**/*.js"],
  plugins: [require("flowbite/plugin")],
};
{{< /example >}}


## Try it out

How you use Flowbite Mithril depends on your project setup. In general, you can just import the components you want to use from `flowbite-mithril` and use them in a Mithril `.js` file:

{{< example id="install" show_preview=false >}}
import { Button } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Button, "Click me"),
};
{{< /example >}}
