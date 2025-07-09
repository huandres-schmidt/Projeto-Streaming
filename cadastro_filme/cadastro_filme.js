const form = document.getElementById('form-filme');
const lista = document.getElementById('lista-filmes');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const data = document.getElementById('data').value.trim();
    const link = document.getElementById('link').value.trim();
    const tempo = document.getElementById('tempo').value.trim();
    const thumb = document.getElementById('thumb').value.trim();
    const stars = document.getElementById('stars').value.trim();
    const sinopse = document.getElementById('sinopse').value.trim();

    if (!titulo || !genero || !data || !link || !tempo || !thumb || !stars || !sinopse) {
        alert("Por favor, preencha todos os campos antes de salvar.");
        return;
    }

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
    alert(`Novo filme adicionado com sucesso!!`);
    form.reset();
});