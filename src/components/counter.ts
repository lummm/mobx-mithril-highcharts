import m from "mithril";

import { countStore } from "../stores/count_store";
import { reaction, autorun, IReactionDisposer } from "mobx";
import { redraw } from "../meta/redraw";
import { makeComponent } from "../meta/app_components/makeComponent";


const increment = () => {
  countStore.incrementCount();
}

export const Counter = (): m.Component<
  { id: number }, { count: number }
  > => {
  let stopUpdating: IReactionDisposer;

  return {
    oncreate: vnode => {
      stopUpdating = autorun(() => {
        vnode.state.count = countStore.currentCount;
        redraw();
      });
    },
    view: vnode => {
      return m(
        "div",
        m("div", `The count in ${vnode.attrs.id} is at: ${vnode.state.count}`),
        m("div",
          m("button",
            { type: "click", onclick: increment },
            "Increment!"
           )
         )
      );
    },
    onremove: () => {
      stopUpdating();
    },
  };
}
