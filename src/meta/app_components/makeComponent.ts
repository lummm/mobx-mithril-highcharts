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
      if (recipe.oninit) {
        recipe.oninit.bind(vnode.state)(vnode);
      }
    },
    oncreate: function(vnode) {
      stopUpdating = autorun(() => {
        vnode.state.data = recipe.getState();
        redraw();
        console.log("updating");
      });
      if (recipe.oncreate) {
        recipe.oncreate.bind(vnode.state)(vnode);
      }
    },
    view: function(vnode) {
      return recipe.view(vnode);
    },
    onremove: function(vnode) {
      stopUpdating();
      if (recipe.onremove) {
        recipe.onremove.bind(vnode.state)(vnode);
      }
    },
  }
}
