# Hugo Flowbite
Starter files for Hugo with Flowbite.

- set up to use [Flowbite](https://flowbite.com) v2.0+
- use [Hugo Pipes](https://gohugo.io/hugo-pipes/) to build and load css based on `dev` or `build` environment
- basic template setup with an index page, an about page and a posts category
- included development helper partials to show Hugo parameters and Flowbite breakpoints during development

Make sure to use a minimum Hugo version of v0.88.0 and above.

## Basic usage
Install the necessary node packages:
```shell
npm install
```

Start the dev server:
```shell
npm run dev
```

## Helpers
Included are some helpers for the development phase (not visible in production):

- `/partials/dev/parameters.html` shows basic Hugo page parameters
- `/partials/dev/size-indicator.html` displays a floating circle in the upper right corner to indicate the current Flowbite responsive breakpoint
- `/partials/dev/container-indicator.html` shows the container area as a color filled background

If you don't need any of these helpers anymore, just delete the `{{- partial "dev/dev-tools.html" . -}}` line from `/layouts/_default/baseof.html`.

## Credits

- [Hugo Starter Theme with Tailwind CSS](https://github.com/dirkolbrich/hugo-tailwindcss-starter-theme)
