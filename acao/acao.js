const db = new PouchDB('streaming');

function listarFilmeAcao() {
   return db.allDocs({ include_docs: true}).then(res => res.rows.map(r => r.doc).filter(doc => doc.type == 'filme' && doc.genero == 'Ação'));
}

async function exibirFilmes() {
    const lista = document.getElementById('lista-filmes-Acao');
    lista.innerHTML = ''; 
    const filmes = await listarFilmeAcao();

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