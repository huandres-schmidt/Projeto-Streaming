const db = new PouchDB('streaming');

async function listarFilmes() {
  const res = await db.allDocs({ include_docs: true });
  return res.rows.map(r => r.doc).filter(doc => doc.type === 'filme');
}

async function exibirFilmes() {
  const lista = document.getElementById('lista-filmes');
  lista.innerHTML = '';
  const filmes = await listarFilmes();

  filmes.forEach(filme => {
    const card = document.createElement('div');
    card.className = 'filme-card';

    card.innerHTML = `
      <img src="${filme.thumb}" alt="${filme.titulo}" class="filme-thumb" />
      <div class="filme-info">
        <h4>${filme.titulo}</h4>
        <p>${filme.genero}</p>
      </div>
    `;
    lista.appendChild(card);
  });
}

exibirFilmes();
