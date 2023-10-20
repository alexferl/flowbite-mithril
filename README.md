# flowbite-mithril

Work in progress.

✅ = Fully implemented

🚧 = Partially implemented

❌ = Not implemented

## Components
|     Name     | Done | Notes                 |
|:------------:|------|-----------------------|
|  Accordion   | ❌    |
|    Alert     | ✅    |
|    Avatar    | ✅    |
|    Badge     | ✅    |
|  Breadcrumb  | ❌    |
|    Button    | ✅    |
| Button group | ✅    |
|     Card     | ❌    |
|   Carousel   | ❌    |
|  Datepicker  | ❌    |
|   Dropdown   | ❌    |
|    Footer    | ❌    |
|     KDB      | ❌    |
|  List group  | ✅    |
|    Modal     | ❌    |
|    Navbar    | ✅    |
|  Pagination  | ❌    |
| Progress bar | ❌    |
|    Rating    | ❌    |
|   Sidebar    | ❌    |
|   Spinner    | ✅    |
|    Table     | 🚧   | Missing hover/striped |
|     Tabs     | ❌    |
|   Timeline   | ❌    |
|    Toast     | ❌    |
|   Tooltip    | ❌    |

## Forms
|    Name    | Done | Notes            |
|:----------:|------|------------------|
|   Input    | ✅    |
| File Input | 🚧   | Missing dropzone |
|  Checkbox  | ✅    |
|   Select   | ✅    |
|   Toggle   | ✅    |
|  Textarea  | ✅    |
|   Range    | ✅    |
|   Radio    | ✅    |


## Typography
|    Name    | Done | Notes |
|:----------:|------|-------|
| Blockquote | ✅    |

## Getting started
Learn how to get started with Flowbite Mithril.

### Setup Tailwind CSS
Install Tailwind CSS:

```shell
npm i -D autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

Point Tailwind CSS to files you have class="..." in:
```javascript
module.exports = {
  content: ["./src/**/*.js"],
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
npm i -D flowbite github:alexferl/flowbite-mithril
```

Add the Flowbite plugin to `tailwind.config.js`, and include content from `flowbite-mithril`:
```javascript
module.exports = {
  content: ["./node_modules/flowbite-mithril/src/**/*.js"],
  plugins: [require("flowbite/plugin")],
};
```
