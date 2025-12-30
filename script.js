const API_KEY = "COLOQUE_SUA_CHAVE_DO_YOUTUBE_AQUI";

const CANAIS = [
  "UCxxxxxxxx", 
  "UCyyyyyyyy"
];

async function buscarMusica() {
  const termo = document.getElementById("searchInput").value;
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "Buscando...";

  let videos = [];

  for (let canal of CANAIS) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${termo}&channelId=${canal}&type=video&maxResults=5&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    videos = videos.concat(data.items);
  }

  resultados.innerHTML = "";

  videos.forEach(video => {
    const div = document.createElement("div");
    div.textContent = video.snippet.title;
    div.onclick = () => tocar(video.id.videoId);
    resultados.appendChild(div);
  });
}

function tocar(id) {
  document.getElementById("player").style.display = "block";
  document.getElementById("videoFrame").src =
    `https://www.youtube.com/embed/${id}?autoplay=1`;
}
