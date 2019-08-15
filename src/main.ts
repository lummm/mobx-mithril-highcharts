import m from "mithril";

import { Counter } from "./components/counter";
import { setRedrawFn } from "./meta/redraw";


const baseElement = document.getElementById("app");

const redraw = () => {
  m.render(
    baseElement as Element,
    m(Counter),
  );

};

setRedrawFn(redraw);

redraw();
