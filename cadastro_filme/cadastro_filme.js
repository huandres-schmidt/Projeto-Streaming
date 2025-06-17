const form = document.getElementById('form-filme');
const lista = document.getElementById('lista-filmes');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const data = document.getElementById('data').value;
    const link = document.getElementById('link').value;
    const tempo = document.getElementById('tempo').value;
    const thumb = document.getElementById('thumb').value;
    const stars = document.getElementById('stars').value;
    const sinopse = document.getElementById('sinopse').value;

    const filme = {
        _id: "filme::" + new Date().toISOString(),
        titulo,
        genero,
        data,
        link,
        tempo,
        thumb,
        stars,
        sinopse,
        type: "filme"
    };

    await salvarFilme(filme);
    form.reset();
});

async function carregarFilmes() {
    lista.innerHTML = '';
    const filmes = await listarFilmes();
    filmes.forEach(filme => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${filme.titulo}</strong> - ${filme.genero} (${filme.data})
            <br><a href="${filme.link}" target="_blank">Assistir</a>
            <br><img src="${filme.thumb}" alt="Thumbnail" width="200">
            <p>${filme.sinopse}</p>
            <button onclick="deletarFilme('${filme._id}')">Excluir</button>`;
    lista.appendChild(li);
    });
}

async function deletarFilme(id) {
  await removerFilme(id);
  carregarFilmes();
}

carregarFilmes();