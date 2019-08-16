import m from "mithril";


export interface ComponentRecipe<Attrs, State> extends m.Lifecycle<Attrs, State> {
  getState: () => State,
  view: (vnode: m.Vnode<Attrs, { data: State }>) => m.Children,
}
