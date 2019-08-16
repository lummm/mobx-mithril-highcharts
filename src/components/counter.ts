import m from "mithril";

import { countStore } from "../stores/count_store";
import { reaction, autorun, IReactionDisposer } from "mobx";
import { redraw } from "../meta/redraw";
import { makeComponent } from "../meta/app_components/makeComponent";


const increment = () => {
  countStore.incrementCount();
}


export const Counter = makeComponent<
  { id: number }, { count: number }
  >({
    getState: () => ({
      count: countStore.currentCount,
    }),
    oninit: function(vnode) {
      console.log("hi I'm initing myself here");
      console.log(vnode);
    },
    view: function(vnode) {
      return m(
        "div",
        m("div", `The count in ${vnode.attrs.id} is at: ${vnode.state.data.count}`),
        m("div",
          m("button",
            { type: "click", onclick: increment },
            "Increment!"
           )
         )
      );
    },
    onremove: function(vnode){
      console.log("I am removing insdie here");
      console.log(vnode);
    }
  })
