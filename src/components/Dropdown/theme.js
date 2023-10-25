export const dropdownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-2 text-sm text-gray-700 dark:text-gray-200",
  floating: {
    animation: "transition-opacity",
    base: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
    item: {
      container: "",
      base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
  },
  inlineWrapper: "flex items-center",
};
