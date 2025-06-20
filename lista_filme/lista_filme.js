async function exibirFilmes() {
    const filmes = await listarFilmes();
    const container = document.getElementById('lista-filme');

    container.innerHTML = ''; 

    filmes.forEach(filme => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style = 'width: 100%';
        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${filme.thumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">${filme.genero}</p>
                        <p class="card-text">${filme.data}</p>
                        <p class="card-text">${filme.tempo}</p>
                        <p class="card-text">${filme.stars}</p>
                        <p class="card-text"><small class="text-body-secondary">${filme.sinopse}</small></p>
                        <button onclick="deletarFilme('${filme._id}')">Excluir</button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

async function deletarFilme(id) {
  await removerFilme(id);
  exibirFilmes();
}

exibirFilmes();