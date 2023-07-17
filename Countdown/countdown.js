const d = document;

export default function countdown (id, limitDate, finalMessage) {
  const $countdownDiv = d.getElementById(id),
  countdownDate = new Date(limitDate).getTime();
  
  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
    timeLeft = countdownDate - now,

    days = Math.floor(timeLeft / (1000*60*60*24)),
    hours = ("0" + Math.floor(timeLeft % (1000*60*60*24) / (1000*60*60))).slice(-2),
    minutes = ("0" + Math.floor(timeLeft % (1000*60*60) / (1000*60))).slice(-2),
    seconds = ("0" + Math.floor(timeLeft % (1000*60) / 1000)).slice(-2);

    $countdownDiv.innerHTML = `Left: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    if (timeLeft < 0) {
      clearInterval(countdownTempo);
      $countdownDiv.innerHTML = `<h3>${finalMessage}</h3>`
    }
  }, 1000)
}