const d = document, n = navigator;

export default function webcam(id, play) {
  const $video = d.getElementById(id);

  d.addEventListener("click", e =>{
    if(e.target.matches(play)) {
      if(n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video: true, audio: true})
        .then(stream => {
          $video.srcObject = stream;
          $video.play();
          console.log(stream)
        })
        .catch(err => $video.insertAdjacentHTML("afterend", `<p>Error: ${err}</p>`))
      }
    }
  });
}