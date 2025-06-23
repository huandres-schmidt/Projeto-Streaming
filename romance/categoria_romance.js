const db = new PouchDB('streaming');

function listarFilmeRomance() {
   return db.allDocs({ include_docs: true}).then(res => res.rows.map(r => r.doc).filter(doc => doc.type == 'filme' && doc.genero == 'Romance'));
}

async function exibirFilmes() {
    const lista = document.getElementById('cards-container');
    lista.innerHTML = ''; 
    const filmes = await listarFilmeRomance();

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

exibirFilmes();