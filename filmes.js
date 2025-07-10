const db = new PouchDB('streaming');

function listarFilmesGenero(genero) {
   return db.allDocs({ include_docs: true}).then(res => res.rows.map(r => r.doc).filter(doc => doc.type == 'filme' && doc.genero == genero));
}

async function exibirFilmesGenero(genero) {
    const lista = document.getElementById('cards-container');
    lista.innerHTML = ''; 
    const filmes = await listarFilmesGenero(genero);

    filmes.forEach(filme => {
    const card = document.createElement('div');
    card.className = 'col-md-2 mb-4';
    card.innerHTML = `
      <div class="card filme-card h-100" onclick="abrirDetalhes('${filme._id}')">
        <img src="${filme.thumb}" class="card-img-top" alt="${filme.titulo}">
      </div>
    `;
    lista.appendChild(card);
  });
}

function abrirDetalhes(id) {
  window.location.href = `../detalhes_filme/detalhes_filme.html?id=${id}`;
}
