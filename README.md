# flowbite-mithril

WIP!

## Getting started
Learn how to get started with Flowbite Mithril.

### Setup Tailwind CSS
Install Tailwind CSS:
```shell
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

Point Tailwind CSS to files you have className=".." in:
```javascript
module.exports = {
  content: ["./src/**/*.js" /* src folder, for example */],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind CSS to a CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install Flowbite Mithril
Install Flowbite and Flowbite Mithril:
```shell
npm i flowbite flowbite-mithril
```

Add the Flowbite plugin to `tailwind.config.js`, and include content from `flowbite-mithril`:
```javascript
module.exports = {
  content: [
    "node_modules/flowbite-mithril/src/**/*.js"
  ],
  plugins: [require("flowbite/plugin")],
};
```
