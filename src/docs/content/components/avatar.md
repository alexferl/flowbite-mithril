---
layout: home
title: Avatar
description: Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes
group: components
toc: true

previous: Alert
previousLink: components/alert/
next: Badge
nextLink: components/badge/
---

The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Flowbite to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

## Default avatar

Here's a default example of the `Avatar` component where you can use the `img` attribute to pass the image URL, the `alt` attribute to pass a description of the image for accessibility and the `rounded` attribute to make the avatar rounded.

{{< example id="default" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Avatar, {
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
        rounded: true,
      }),
      m(Avatar, {
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
      }),
    ]),
};
{{< /example >}}

## Avatar with border

Use the `bordered` attribute to add a border style to the avatar.

{{< example id="border" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Avatar, {
        bordered: true,
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
        rounded: true,
      }),
      m(Avatar, {
        bordered: true,
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
      }),
    ]),
};
{{< /example >}}

## Avatar placeholder

If the user doesn't have an image you can use the `placeholder` attribute to show a placeholder image and you can still pass the `rounded` attribute to make the avatar rounded and other options.

{{< example id="placeholder" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Avatar),
      m(Avatar, { rounded: true }),
    ]),
};
{{< /example >}}


## Placeholder initials

Alternatively to the placeholder image you can use the `initials` attribute to show the user initials.

{{< example id="initials" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" },
      m(Avatar, { initials: "RR" })
    ),
};
{{< /example >}}

## Dot indicator

You can use the `status` attribute to show a dot indicator on the avatar and you can use the `statusPosition` attribute to change the position of the dot indicator.

{{< example id="dot_indicator" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Avatar, {
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
        status: "online",
      }),
      m(Avatar, {
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
        rounded: true,
        status: "busy",
        statusPosition: "top-right"
      }),
      m(Avatar, {
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
        status: "offline",
        statusPosition: "bottom-right"
      }),
      m(Avatar, {
        img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
        rounded: true,
        status: "away",
        statusPosition: "bottom-right"
      }),
    ]),
};
{{< /example >}}

## Stacked layout

Stack multiple avatars together by using the `Avatar.Group` component and by passing the `stacked` prop to the child components of the group.

The `Avatar.Counter` component can be used to show the total number of avatars in the group by passing the `total` prop and a link to the `href` prop to view all users.

{{< example id="stacked" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-wrap gap-2" }, [
      m(Avatar.Group, [
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-1.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-2.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-3.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-4.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
          rounded: true,
          stacked: true,
        }),
      ]),
      m(Avatar.Group, [
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-1.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-2.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-3.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-4.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar, {
          img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
          rounded: true,
          stacked: true,
        }),
        m(Avatar.Counter, { total: 99, href: "#" }),
      ]),
    ]),
};
{{< /example >}}

## Avatar with text

Use this example to show an avatar with text (ie. user name, email, etc) by passing the custom markup inside the `Avatar` component. This is useful for admin dashboard interfaces while the user is logged in.

{{< example id="with_text" >}}
import { Avatar } from "flowbite-mithril";

const Component = {
  view: () =>
    m(
      "div",
      { class: "flex items-center space-x-4" },
      m(
        Avatar,
        {
          img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
          rounded: true,
        },
        m("div", { class: "space-y-1 font-medium dark:text-white" }, [
          m("div", "Jese Leos"),
          m("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Joined in August 2014"),
        ]),
      ),
    ),
};
{{< /example >}}

## Dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component.

{{< example id="dropdown" >}}
import { Avatar, Dropdown } from "flowbite-mithril";

const Component = {
  view: () =>
    m(
      "div",
      { class: "flex items-center space-x-4" },
      m(
        Dropdown,
        {
          label: m(Avatar, {
            alt: "User settings",
            img: "/flowbite-mithril/images/people/profile-picture-5.jpg",
            rounded: true,
          }),
          arrowIcon: false,
          inline: true,
        },
        [
          m(Dropdown.Header, [
            m("span", { class: "block text-sm" }, "Bonnie Green"),
            m("span", { class: "block truncate text-sm font-medium" }, "name@flowbite.com"),
          ]),
          m(Dropdown.Item, "Dashboard"),
          m(Dropdown.Item, "Settings"),
          m(Dropdown.Item, "Earnings"),
          m(Dropdown.Divider),
          m(Dropdown.Item, "Sign out"),
        ],
      ),
    ),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://www.flowbite-react.com/docs/customize/theme).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "flex justify-center items-center space-x-4 rounded",
    "bordered": "p-1 ring-2",
    "rounded": "rounded-full",
    "color": {
      "dark": "ring-gray-800 dark:ring-gray-800",
      "failure": "ring-red-500 dark:ring-red-700",
      "gray": "ring-gray-500 dark:ring-gray-400",
      "info": "ring-blue-400 dark:ring-blue-800",
      "light": "ring-gray-300 dark:ring-gray-500",
      "pink": "ring-pink-500 dark:ring-pink-500",
      "purple": "ring-purple-500 dark:ring-purple-600",
      "success": "ring-green-500 dark:ring-green-500",
      "warning": "ring-yellow-300 dark:ring-yellow-500"
    },
    "img": {
      "base": "rounded",
      "off": "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      "on": "",
      "placeholder": "absolute w-auto h-auto text-gray-400 -bottom-1"
    },
    "size": {
      "xs": "w-6 h-6",
      "sm": "w-8 h-8",
      "md": "w-10 h-10",
      "lg": "w-20 h-20",
      "xl": "w-36 h-36"
    },
    "stacked": "ring-2 ring-gray-300 dark:ring-gray-500",
    "statusPosition": {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1 center",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-top-1 -left-1",
      "top-center": "-top-1 center",
      "top-right": "-top-1 -right-1",
      "center-right": "center -right-1",
      "center": "center center",
      "center-left": "center -left-1"
    },
    "status": {
      "away": "bg-yellow-400",
      "base": "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      "busy": "bg-red-400",
      "offline": "bg-gray-400",
      "online": "bg-green-400"
    },
    "initials": {
      "text": "font-medium text-gray-600 dark:text-gray-300",
      "base": "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600"
    }
  },
  "group": {
    "base": "flex -space-x-4"
  },
  "groupCounter": {
    "base": "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
}
{{< /example >}}
