const db = new PouchDB('streaming');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function carregarDetalhes() {
  try {
  const filme = await db.get(id);

  document.getElementById('filme-detalhes').innerHTML = `
    <h2 class="titulo"><strong>${filme.titulo}</strong></h2>
    <iframe width="100%" height="650px" src="${converterLinkEmbed(filme.link)}" frameborder="0" allowfullscreen></iframe>
    <hr class="titulo">
    <p>${getClassificacaoImg(filme.stars)}</p>
    <p class="titulo"><strong>Gênero:</strong> ${filme.genero}</p>
    <p class="titulo"><strong>Duração:</strong> ${filme.tempo}</p>

    <p class="titulo"><strong>Sinopse:</strong> ${filme.sinopse}</p>
  `;
  }catch (e) {
    document.getElementById('filme-detalhes').innerHTML = `<p>Filme não encontrado. ${e}</p>`;
  }
}

function converterLinkEmbed(link) {
  if (link.includes('youtube.com/watch?v=')) {
    const videoId = link.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }
  return link;
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

  return `<img src="${src}" alt="Classificação ${stars}" style="height: 60px;">`;
}

carregarDetalhes();
