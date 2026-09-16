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

tracks.forEach(([title, id], index) => {
  const item = document.createElement("li");
  item.className = "track";
  item.innerHTML = `
    <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
    <div>
      <div class="track-title">${title}</div>
      <a class="drive-link" href="https://drive.google.com/file/d/${id}/view" target="_blank" rel="noopener">abrir no Google Drive</a>
    </div>
    <audio controls preload="none" src="https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t"></audio>
  `;
  trackList.appendChild(item);

  const audio = item.querySelector("audio");
  audio.addEventListener("play", () => {
    document.querySelectorAll("audio").forEach((otherAudio) => {
      if (otherAudio !== audio) otherAudio.pause();
    });
    document.querySelectorAll(".track").forEach((otherItem) => otherItem.classList.remove("is-playing"));
    item.classList.add("is-playing");
  });
  audio.addEventListener("pause", () => item.classList.remove("is-playing"));
});

document.querySelector("#track-count").textContent = tracks.length;