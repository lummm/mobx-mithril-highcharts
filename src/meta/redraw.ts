const attrs = {
  redrawFn: null,
};

window["x"] = attrs;

export function setRedrawFn(
  redrawFn: () => void,
): void {
  attrs.redrawFn = redrawFn;
}

export function redraw(): void {
  attrs.redrawFn && attrs.redrawFn();
}
