import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { omit } from "../../helpers/omit.js";
import { accordionTheme } from "./theme.js";
import { AccordionContent } from "./AccordionContent.js";
import { AccordionPanel } from "./AccordionPanel.js";
import { AccordionTitle } from "./AccordionTitle.js";
import { Accordion as FlowbiteAccordion } from "flowbite";

export const AccordionComponent = {
  accordion: null,
  options: {
    alwaysOpen: true,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400",
  },
  oncreate({ state, attrs, children }) {
    const { collapseAll = false, flush = false } = attrs;

    if (attrs.alwaysOpen) {
      state.options.alwaysOpen = attrs.alwaysOpen;
    }

    const items = [];
    children.map((child, index) => {
      const heading = child.children[0];
      const body = child.children[1];

      heading.state.isOpen = child.state.isOpen;
      heading.state.flush = flush;

      heading.dom.id = `accordion-heading-${index}`;
      body.dom.id = `accordion-body-${index}`;
      if (collapseAll) {
        body.dom.className = twMerge(body.dom.className, "hidden");
      } else if (!child.state.isOpen) {
        body.dom.className = twMerge(body.dom.className, "hidden");
      }

      items.push({
        id: `accordion-heading-${index}`,
        triggerEl: heading.dom,
        targetEl: body.dom,
        active: !collapseAll ? child.state.isOpen : false,
      });
    });

    // call redraw so the DOM is updated
    // with the state values we just set
    m.redraw();

    state.accordion = new FlowbiteAccordion(items, state.options);
  },
  view({ attrs, children }) {
    const { class: className, alwaysOpen = false, flush = false, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(accordionTheme.root, customTheme);

    const theirProps = removeOptionsProps(props);

    return m(
      "div",
      {
        class: twMerge(theme.base, theme.flush[flush ? "on" : "off"], className),
        "data-accordion": alwaysOpen ? "open" : "collapse",
        ...theirProps,
      },
      children,
    );
  },
};

const removeOptionsProps = omit(["collapseAll"]);

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
