<script>
function buscar(tipo) {
  const termo = document.getElementById("busca").value;

  if (!termo) {
    alert("Digite o nome da música 😊");
    return;
  }

  let complemento = "";

  if (tipo === "nacional") {
    complemento = " singer karaoke";
  } else {
    complemento = " sing king karaoke";
  }

  const buscaFinal = encodeURIComponent(termo + complemento);

  const url = `https://www.youtube.com/results?search_query=${buscaFinal}`;

  window.open(url, "_blank");
}
</script>
