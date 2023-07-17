const d = document, s = localStorage;

export default function darkTheme(btn, classDark, darkPanel) {
  const $themeBtn = d.querySelector(btn),
  $selectors = d.querySelectorAll("[data-dark]"),
  $panel = d.querySelectorAll(".menu a"),
  $panelActive = d.querySelector(".menu a.active"),
  $panelDarkActive = d.querySelector(".menu a.darkActive");

  let moon = "🌙", 
  sun = "☀️";

  const lightMode = () => {
    $selectors.forEach(el => el.classList.remove(classDark));
    $panel.forEach(el => el.classList.remove(darkPanel));
    $themeBtn.textContent = moon;
    s.setItem("theme", "light");
  }

  const darkMode = () => {
    $selectors.forEach(el => el.classList.add(classDark));
    $panel.forEach(el => el.classList.add(darkPanel));
    
    $themeBtn.textContent = sun;
    s.setItem("theme", "dark");
  }

  d.addEventListener("click", e => {
    if(e.target.matches(btn)) {
      if($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  })

  d.addEventListener("DOMContentLoaded", e => {
    if(s.getItem("theme") === null) {s.setItem("theme", "light")}
    if(s.getItem("theme") === "light") lightMode();
    if(s.getItem("theme") === "dark") darkMode();
  })
}