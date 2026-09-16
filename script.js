const tracks = [
  ["Gralha Azul", "1k9tJVErzKApKr2zpPsSt5E_U7mYqnxkC"],
  ["Comando Alfa", "1xSnG2DUmEh3pKevw2DqnWWFDLa-_yjOQ"],
  ["Doze de Janeiro", "1IcglQABhYAmwhdCpLTdD55L3yWqw6SFa"],
  ["As Mocinhas da Cidade", "1cvP17MCMaotYU2GuldWI1RipPx1vnHdL"],
  ["Cantigas de Roda", "149eJ9PAU0vsxNJJk17xccwYrBgOlbH81"],
  ["Parabéns", "1Xe-R7g7T8ZHGzaSsPQVPSZWGtdd9HGrl"],
  ["Hino Nacional Brasileiro", "1qsEmLBANi9lTZR2KXXhLGFa2WP0XKGD5"],
  ["Hino do Estado do Paraná", "13LUXJ9_KHT-laMp6oRaFYAHII63ZgSE9"],
  ["Hino da Independência", "19B6Id_jgWTCnJeSMlTBH6NcVsk0j0P7b"],
  ["Hino à Bandeira do Brasil", "1VRfTSZLcbfx2Jx8-gm8GH36qykhWnqsA"],
  ["Marcha de Curitiba", "13SYcF1c0o1-6AAs94H5-SjVxM2i8RGap"]
];

const trackList = document.querySelector("#track-list");

const playerDialog = document.createElement("dialog");
playerDialog.className = "player-dialog";
playerDialog.innerHTML = `
  <div class="player-dialog-header">
    <div>
      <p class="eyebrow">Reprodutor do Google Drive</p>
      <h2></h2>
    </div>
    <button class="close-player" type="button" aria-label="Fechar player">&times;</button>
  </div>
  <iframe title="Player de música" allow="autoplay" allowfullscreen></iframe>
`;
document.body.appendChild(playerDialog);

const dialogTitle = playerDialog.querySelector("h2");
const dialogFrame = playerDialog.querySelector("iframe");

function openPlayer(title, id) {
  dialogTitle.textContent = title;
  dialogFrame.src = `https://drive.google.com/file/d/${id}/preview`;
  playerDialog.showModal();
}

function closePlayer() {
  playerDialog.close();
  dialogFrame.src = "about:blank";
}

playerDialog.querySelector(".close-player").addEventListener("click", closePlayer);
playerDialog.addEventListener("click", (event) => {
  if (event.target === playerDialog) closePlayer();
});

tracks.forEach(([title, id], index) => {
  const item = document.createElement("li");
  item.className = "track";
  item.innerHTML = `
    <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
    <div>
      <div class="track-title">${title}</div>
    
    </div>
    <button class="listen-button" type="button" aria-label="Ouvir ${title}">ouvir</button>
  `;
  trackList.appendChild(item);

  item.querySelector(".listen-button").addEventListener("click", () => {
    document.querySelectorAll(".track").forEach((otherItem) => otherItem.classList.remove("is-playing"));
    item.classList.add("is-playing");
    openPlayer(title, id);
  });
});

document.querySelector("#track-count").textContent = tracks.length;
