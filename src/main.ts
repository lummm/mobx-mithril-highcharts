import m from "mithril";

import { Counter } from "./components/counter";


const baseElement = document.getElementById("app");

const redraw = () => {
  m.render(
    baseElement as Element,
    m(
      Counter
    )
  );
};

window["redraw"] = redraw;

redraw();
