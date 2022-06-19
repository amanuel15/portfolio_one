export default function shadowAnimation(e, ref) {
  if (ref) {
    const rXP = e.pageX - ref.current.offsetLeft - ref.current.offsetWidth / 2;
    const rYP = e.pageY - ref.current.offsetTop - ref.current.offsetHeight / 2;
    ref.current.setAttribute(
      "style",
      "text-shadow:" +
        rYP / 10 +
        "px " +
        rXP / 80 +
        "px rgba(227,6,19,.8), " +
        rYP / 8 +
        "px " +
        rXP / 60 +
        "px rgba(255,237,0,1), " +
        rXP / 70 +
        "px " +
        rYP / 12 +
        "px rgba(0,159,227,.7)"
    );
  }
}
