const d = document, w = window;

export default function webTester(form) {
  const $form = d.getElementById(form);
  let testerWindow;

  d.addEventListener("submit", e => {
    if(e.target === $form) {
      e.preventDefault();

      testerWindow = w.open(
        $form.page.value, 
        "testerWindow",
        `innerWidth=${$form.w.value}, innerHeight=${$form.h.value}`
      )
    }
  });

  d.addEventListener("click", e => {
    if(e.target === $form.close) {
      testerWindow.close();
      console.log("on")
    }
  })
}