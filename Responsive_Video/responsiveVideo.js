const d = document, w = window;

export default function smartVideo() {
  const $video = d.querySelector("#section13 video"),

  cb = entries => {
    if(entries[0].isIntersecting) entries[0].target.play();
    else entries[0].target.pause();

    w.addEventListener("visibilitychange", e => {
      d.visibilityState === "visible"
        ? entries[0].target.play()
        : entries[0].target.pause();
    });
  }

  const observer = new IntersectionObserver(cb, {threshold: 0.5});
  observer.observe($video);
}