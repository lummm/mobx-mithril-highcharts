import m from "mithril";


export interface AppComponent<Params, State> {
  getState: () => State,
  component: m.Component<Params, State>,
}
