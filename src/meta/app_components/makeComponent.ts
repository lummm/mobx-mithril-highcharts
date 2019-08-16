import m from "mithril";
import { autorun } from "mobx";
import { redraw } from "../redraw";
import { AppComponent } from "./AppComponent";
  


export function makeComponent<Params, State>(
  appComponent: AppComponent<Params, State>
): m.Component<Params, State> {
  console.log("running here");

  // return {
  //   oninit: vnode => {
  //     autorun(() => {
  //       console.log("updating");
  //       const input = appComponent.getState();
  //       Object.assign(vnode.state, input);
  //       console.log("state in here is");
  //       console.log(vnode.state);
  //       redraw();
  //     });
  //     const originalOnInit = appComponent.component.oninit;
  //     if (originalOnInit) {
  //       console.log("executing original oninit");
  //       originalOnInit.bind(
  //         appComponent.getState()
  //       )(vnode);
  //     }
  //   },
  //   view: vnode => appComponent.component.view.bind(
  //     vnode.state
  //   )(vnode),
  // }

  const wrappedComponent = {
    oninit: vnode => {
      console.log("oninit");
    },
    view: vnode => m(
      appComponent.component, vnode.attrs
    ),
    onremove: () => {
      console.log("on remove");
    },
  };

  autorun(function() {
    const state = appComponent.getState();
    console.log("new state");
    console.log(state);
    console.log("the interior component");
    (<any>appComponent.component).state.data = state;
    redraw();
  });

  return wrappedComponent;
}
