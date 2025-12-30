function buscar(tipo) {
  let termo = document.getElementById("busca").value;

  if (!termo.trim()) {
    alert("Digite o nome da música 🎵");
    return;
  }

  // Normaliza espaços
  termo = termo.trim().replace(/\s+/g, " ");

  // Converte para padrão de URL
  const termoFormatado = encodeURIComponent(termo);

  let url = "";

  if (tipo === "nacional") {
    url = "https://www.youtube.com/@singerkaraoke/search?query=" + termoFormatado;
  } else {
    url = "https://www.youtube.com/@singkingkaraoke/search?query=" + termoFormatado;
  }

  // Popup centralizado
  const largura = 900;
  const altura = 600;
  const esquerda = (screen.width - largura) / 2;
  const topo = (screen.height - altura) / 2;

  window.open(
    url,
    "karaokePlayer",
    `width=${largura},height=${altura},left=${esquerda},top=${topo},resizable=yes,scrollbars=yes`
  );
}
