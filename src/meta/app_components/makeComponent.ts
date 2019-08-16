import m from "mithril";
import { autorun, IReactionDisposer } from "mobx";
import { redraw } from "../redraw";
import { AppComponent } from "./AppComponent";
import { ComponentRecipe } from "./ComponentRecipe";


export function makeComponent<Attr, State>(
  recipe: ComponentRecipe<Attr, State>
) {
  let stopUpdating: IReactionDisposer;

  return {
    oninit: function(vnode) {
      vnode.state.data = recipe.getState();
    },
    oncreate: function(vnode) {
      stopUpdating = autorun(() => {
        vnode.state.data = recipe.getState();
        redraw();
        console.log("updating");
      });
    },
    view: function(vnode) {
      return recipe.view(vnode);
    },
    onremove: function() {
      stopUpdating();
    },
  }
}
