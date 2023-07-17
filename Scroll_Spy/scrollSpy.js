const d = document, s = localStorage;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]"),

    cb = entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");

        if(entry.isIntersecting) {
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
            .classList.add("active");
          } else {
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
            .classList.remove("active");     
        }
      })

    },
    options = {
      rootMargin: "-305px"
    }
     
  const observer = new IntersectionObserver(cb, options);
  $sections.forEach(section => observer.observe(section))
}