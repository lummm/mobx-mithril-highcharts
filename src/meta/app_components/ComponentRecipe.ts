import m from "mithril";


export interface ComponentRecipe<Attrs, ExtState, IntState> extends m.Lifecycle<Attrs, IntState> {
  getState: () => ExtState,
  view: (
    vnode: m.Vnode<Attrs, IntState>,
    attrs: Attrs,
    state: ExtState,
  ) => m.Children,
}
