import m from "mithril";

import { countStore } from "../stores/count_store";
import { reaction } from "mobx";
import { redraw } from "../meta/redraw";


const increment = () => {
  countStore.incrementCount();
}

export const Counter = {
  oninit: vnode => {
    reaction(
      () => countStore.currentCount,
      () => {
        redraw();
      }
    )
  },
  view: vnode => {
    return m(
      "div",
      m("div", `The count is at: ${countStore.currentCount}`),
      m("div",
        m("button",
          { type: "click", onclick: increment },
          "Increment!"
         )
       )
    );
  },
}
