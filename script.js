<script>
function buscar(tipo) {
  const termo = document.getElementById("busca").value.trim();

  if (!termo) {
    alert("Digite o nome da música 😊");
    return;
  }

  let canal = "";

  if (tipo === "nacional") {
    canal = "singer karaoke";
  } else {
    canal = "sing king karaoke";
  }

  const url = "https://www.youtube.com/results?search_query=" +
              encodeURIComponent(termo + " " + canal);

  window.open(url, "_blank");
}
</script>
