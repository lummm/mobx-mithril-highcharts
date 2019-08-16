import m from "mithril";
import { autorun } from "mobx";
import { redraw } from "./redraw";


export function makeComponent<Input>(
  getInput: () => Input,
  component: m.Component,
) {
  console.log("running here");
  const wrappedComponent = {
    oninit: vnode => {
      console.log("oninit");
    },
    view: vnode => m(
      component, vnode.attrs
    ),
    onremove: () => {
      console.log("on remove");
    },
  };

  autorun(() => {
    const input = getInput();
    console.log(`input is : ${input}`);
    (<any>component).input = input;
    redraw();
  });

  return wrappedComponent;
}
