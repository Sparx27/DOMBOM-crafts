let d = document;

export function clock(clockPlace, on, off) {
  let clockTempo;

  d.addEventListener('click', e => {
    if(e.target.matches(on)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clockPlace).innerHTML = `<h3>${clockHour}</h3>`
      }, 1000);

      e.target.disabled = true;
    }

    if(e.target.matches(off)) {
      clearInterval(clockTempo);
      d.querySelector(clockPlace).innerHTML = null;
      d.querySelector(on).disabled = false;
    }
  })
}

export function alarm(sound, on, off) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener('click', e => {
    if(e.target.matches(on)) {
      $alarm.play();

      e.target.disabled = true;
    }

    if(e.target.matches(off)) {
      $alarm.pause();
      $alarm.currentTime = 0;

      d.querySelector(on).disabled = false;
    }
  })
}