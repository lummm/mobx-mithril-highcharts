const attrs = {
  redrawFn: null,
};

export function setRedrawFn(
  redrawFn: () => void,
): void {
  attrs.redrawFn = redrawFn;
}

export function redraw(): void {
  attrs.redrawFn();
}
