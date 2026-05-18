/** Lock page scroll while overlays are open (no padding jump — html uses scrollbar-gutter: stable). */
export function lockBodyScroll(): () => void {
  if (typeof document === "undefined") return () => {};

  const { body } = document;
  const prevOverflow = body.style.overflow;
  body.style.overflow = "hidden";

  return () => {
    body.style.overflow = prevOverflow;
  };
}
