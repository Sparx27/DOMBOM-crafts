const d = document;

export default function slider() {
  const $next = d.querySelector(".slider-btns .next"),
    $prev = d.querySelector(".prev"),
    $slides = d.querySelectorAll(".slide");

    let i = 0;
  d.addEventListener("click", e => {
    if(e.target === $next) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if(i > $slides.length - 1) i = 0;
      $slides[i].classList.add("active");
    }
  })
  d.addEventListener("click", e => {
    if(e.target === $prev) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--

      if(i < 0) i = $slides.length - 1;
      $slides[i].classList.add("active");
    }
  })
}