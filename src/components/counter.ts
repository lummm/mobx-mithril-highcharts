import m from "mithril";


export function Counter(initialVnode) {
  let count = 0;

  const increment = () => {
    count = count + 1;
  }
  
  return {
    oninit: vnode => {
      console.log("counter inited, with vnode:");
      console.log(vnode);
    },
    view: vnode => {
      return m(
        "div",
        m("div", `The count is at: ${count}`),
        m("div",
          m("button",
            { type: "click", onclick: increment },
            "Increment!"
           )
         )
      );
    },
  };
}
