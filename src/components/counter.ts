import m from "mithril";

import { countStore } from "../stores/count_store";
import { reaction, autorun } from "mobx";
import { redraw } from "../meta/redraw";
import { makeComponent } from "../meta/make_component";


const increment = () => {
  countStore.incrementCount();
}

export const Counter = makeComponent<{

}>(
  () => ({
    count: countStore.currentCount
  }),
  {
    view: (vnode: any) => m(
      "div",
      m("div", `The count in ${vnode.attrs.id} is at: ${vnode.state.input.count}`),
      m("div",
        m("button",
          { type: "click", onclick: increment },
          "Increment!"
         )
       )
    )}
);
