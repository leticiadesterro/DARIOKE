function buscar(tipo) {
  const termo = document.getElementById("busca").value;

  if (!termo) return;

  let complemento = "";

  if (tipo === "nacional") {
    complemento = " singer karaoke";
  } else {
    complemento = " sing king karaoke";
  }

  const buscaFinal = encodeURIComponent(termo + complemento);

  const url = `https://www.youtube.com/embed?listType=search&list=${buscaFinal}`;

  document.getElementById("iframe").src = url;
  document.getElementById("player").style.display = "block";
}

function fechar() {
  document.getElementById("iframe").src = "";
  document.getElementById("player").style.display = "none";
}
