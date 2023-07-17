const d = document, w = window;

export default function resObj(id, mq, objDesktop, objPhone) {
  let breakpoint = w.matchMedia(mq);
  const container = d.getElementById(id);

  const listener = (e) => {
    if(e.matches) {
      container.innerHTML = objDesktop;
    } else {
      container.innerHTML = objPhone;
    }
  }

  breakpoint.addEventListener("change", listener);
  listener(breakpoint);
}