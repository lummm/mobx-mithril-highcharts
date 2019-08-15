import m from "mithril";

import { Counter } from "./components/counter";
import { setRedrawFn } from "./meta/redraw";
import { countStore } from "./stores/count_store";


const baseElement = document.getElementById("app");

const redraw = () => {
  m.render(
    baseElement as Element,
    m(
      "div",
      m(Counter, {id: 1}),
      m(Counter, {id: 2}),
      m(Counter, {id: 3}),
      countStore.currentCount < 3 ?
        m(Counter, {id: 4}) : m("div"),
     )
  );

};

setRedrawFn(redraw);

redraw();
