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
                    <img src="${filme.thumb}" alt="${filme.titulo}">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">${filme.genero}</p>
                        <p class="card-text">${filme.data}</p>
                        <p class="card-text">${filme.tempo}</p>
                        <p>${getClassificacaoImg(filme.stars)}</p>
                        <p class="card-text"><small class="text-body-secondary">${filme.sinopse}</small></p>
                        <button class="btn btn-danger" onclick="deletarFilme('${filme._id}')">Excluir</button>
                        <button onclick="abrirModalEdicao('${filme._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-editar-filme">Editar</button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function getClassificacaoImg(stars) {
  let src = '';

  switch (stars) {
    case 'Livre':
      src = "../assets/classificacao/livre.png";
    break;
    case '10':
      src = "../assets/classificacao/10.png";
    break;
    case '12':
      src = "../assets/classificacao/12.png";
    break;
    case '14':
      src = "../assets/classificacao/14.png";
    break;
    case '16':
      src = "../assets/classificacao/16.png";
    break;
    case '18':
      src = "../assets/classificacao/18.png";
    break;
    default:
      src = "../assets/classificacao/livre.png";
  }

  return `<img src="${src}" alt="Classificação ${stars}" style="height: 40px; width: 40px;">`;
}

async function deletarFilme(id) {
  await removerFilme(id);
  exibirFilmes();
}

async function abrirModalEdicao(id) {
  const filme = await db.get(id);
  
  document.getElementById('edit-id-filme').value = filme._id
  document.getElementById('edit-titulo').value = filme.titulo;
  document.getElementById('edit-genero').value = filme.genero;
  document.getElementById('edit-data').value = filme.data;
  document.getElementById('edit-tempo').value = filme.tempo;
  document.getElementById('edit-stars').value = filme.stars;
  document.getElementById('edit-thumb').value = filme.thumb;
  document.getElementById('edit-sinopse').value = filme.sinopse;
  document.getElementById('edit-link').value = filme.link;
}

document.getElementById('form-editar').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const id = document.getElementById('edit-id-filme').value;
  const filme = await db.get(id);

  const filmeAtualizado = {
    _id: id,
    _rev: filme._rev,
    titulo: document.getElementById('edit-titulo').value,
    genero: document.getElementById('edit-genero').value,
    data: document.getElementById('edit-data').value,
    tempo: document.getElementById('edit-tempo').value,
    stars: document.getElementById('edit-stars').value,
    thumb: document.getElementById('edit-thumb').value,
    link: document.getElementById('edit-link').value,
    sinopse: document.getElementById('edit-sinopse').value,
    type: "filme"
  };

  await db.put(filmeAtualizado);
  exibirFilmes();

  const modalEl = document.getElementById('modal-editar-filme');
  const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
  modal.hide();
  alert(`Filme atualizado com sucesso!!`);
});

exibirFilmes();