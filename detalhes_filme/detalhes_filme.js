const db = new PouchDB('streaming');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function carregarDetalhes() {
  try {
  const filme = await db.get(id);

  document.getElementById('filme-detalhes').innerHTML = `
    <h2>${filme.titulo}</h2>
    <iframe width="560" height="315" src="${filme.link}" frameborder="0" allowfullscreen></iframe>
    <p><strong>Gênero:</strong> ${filme.genero}</p>
    <p><strong>Duração:</strong> ${filme.tempo}</p>
    <p><strong>Estrelas:</strong> ${filme.stars}</p>
    <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
  `;
  }catch (e) {
    document.getElementById('filme-detalhes').innerHTML = `<p>Filme não encontrado. ${e}</p>`;
  }

}

carregarDetalhes();
