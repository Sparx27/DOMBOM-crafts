const d = document, w = window;

export default function scrollBtn(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", e => {
    let scrollCoord = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollCoord > 600) {
      $scrollBtn.classList.add("is-active");
    } else {
      $scrollBtn.classList.remove("is-active");
    }
  });

  d.addEventListener("click", e => {
    if (e.target.matches(`${btn} i`)) {
      w.scrollTo({top: 0});
    }
  })
}