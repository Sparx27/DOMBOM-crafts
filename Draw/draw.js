const d = document;

export default function draw(btn, players) {
  
  const $players = d.querySelectorAll(players);
  
  const getWinner = () => {
    let random = Math.round(Math.random() * $players.length),
    winner = $players[random];

    return winner.textContent;
  }

  d.addEventListener("click", e => {
    if(e.target.matches(btn)) {
      d.getElementById("winner").innerHTML = `
      <h3><span style="color: #630000">${getWinner()}</span><span style="color: black"> is the winner!</span></h3>
      `
    }
  })
}