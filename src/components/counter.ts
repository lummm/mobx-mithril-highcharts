import m from "mithril";

import { countStore } from "../stores/count_store";
import { reaction, autorun } from "mobx";
import { redraw } from "../meta/redraw";


const increment = () => {
  countStore.incrementCount();
}

export let Counter;

const disposer = autorun(() => {
  Counter = {
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
    onremove: () => {
      disposer();
    },
  };
});
