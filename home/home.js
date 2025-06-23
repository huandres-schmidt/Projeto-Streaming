const db = new PouchDB('streaming');

async function listarFilmes() {
  const res = await db.allDocs({ include_docs: true });
  return res.rows.map(r => r.doc).filter(doc => doc.type === 'filme');
}

async function carregarFilme() {
  const filmes = await listarFilmes();
  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  filmes.forEach(filme => {
    const card = document.createElement('div');
    card.className = 'col-md-2 mb-4';
    card.innerHTML = `
      <div class="card filme-card h-100" onclick="abrirDetalhes('${filme._id}')">
        <img src="${filme.thumb}" class="card-img-top" alt="${filme.titulo}">
      </div>
    `;

    container.appendChild(card);
  });
}

function abrirDetalhes(id) {
  window.location.href = `../detalhes_filme/detalhes_filme.html?id=${id}`;
}

carregarFilme();
