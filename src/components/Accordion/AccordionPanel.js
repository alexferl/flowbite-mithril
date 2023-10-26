import m from "mithril";

export const AccordionPanel = {
  isOpen: false,
  view({ attrs, children, state }) {
    const { isOpen = false, ...props } = attrs;
    state.isOpen = isOpen;

    return m("div", { ...props }, children);
  },
};
