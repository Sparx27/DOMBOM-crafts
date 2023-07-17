const d = document, w = window, n = navigator;

export default function networkStatus() {
  
  const isOnline = () => {
    const $div = d.createElement("div");

    if(n.onLine) {
      $div.textContent = "Connected";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Disconnected";
      $div.classList.add("offline");

    }

    d.querySelector(".header").insertAdjacentElement("afterbegin", $div);

    setTimeout(() => d.querySelector(".header").removeChild($div), 1500);
  }

  w.addEventListener("online", e => isOnline());
  w.addEventListener("offline", e => isOnline());
}