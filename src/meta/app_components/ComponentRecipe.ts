import m from "mithril";

export interface ComponentRecipe<Attrs, State> {
  getState: () => State,
  view: (vnode: m.Vnode<Attrs, { data: State }>) => m.Children,
}
