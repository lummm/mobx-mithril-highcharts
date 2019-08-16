import m from "mithril";
import { autorun, IReactionDisposer } from "mobx";
import { redraw } from "../redraw";
import { ComponentRecipe } from "./ComponentRecipe";


export function makeComponent<Attr, ExtState, IntState>(
  recipe: ComponentRecipe<Attr, ExtState, IntState>
) {
  let stopUpdating: IReactionDisposer;

  return {
    oninit: function(vnode) {
      if (recipe.oninit) {
        recipe.oninit.bind(vnode.state)(vnode);
      }
    },
    oncreate: function(vnode) {
      stopUpdating = autorun(() => {
        recipe.getState();
        redraw();
      });
      if (recipe.oncreate) {
        recipe.oncreate.bind(vnode.state)(vnode);
      }
    },
    view: function(vnode) {
      const attrs: Attr = vnode.attrs;
      return recipe.view(vnode, attrs, recipe.getState());
    },
    onremove: function(vnode) {
      stopUpdating();
      if (recipe.onremove) {
        recipe.onremove.bind(vnode.state)(vnode);
      }
    },
  }
}
