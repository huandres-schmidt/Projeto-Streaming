const db = new PouchDB('streaming');

//Filmes
async function salvarFilme(filme) {
    return db.put(filme);
}

function removerFilme(id) {
    return db.get(id).then(doc => db.remove(doc));
}

function listarFilmes() {
    return db.allDocs({ include_docs: true}).then(res => res.rows.map(r => r.doc).filter(doc => doc.type == 'filme'));
}

//Usuario

async function criarUsuario(usuario) {
    const id = `usuario::${usuario.email.toLowerCase()}`;

    try{
        const exist = await db.get(id);
        alert("Usuário já existe com esse e-mail.");
        return;
    }catch(e) {

    }
    alert("Usuario cadastrado.");
    await db.put(usuario);
}

async function listarUsuarios() {
  try {
    const res = await db.allDocs({ include_docs: true });
    const docs = res.rows.map(r => r.doc);
    return docs.filter(doc => doc.type === 'usuario');
  } catch (e) {
    console.error('Erro ao listar usuários:', e);
    return [];
  }
}

function removerUsuario(id) {
  return db.get(id).then(doc => db.remove(doc));
}


async function addFilmesIniciais() {
  const filme1 = {
        _id: "filme::" + 1,
        titulo: "Ford vs Ferrari",
        genero: "Ação",
        data: "2019",
        link: "https://www.youtube.com/watch?v=5OF_8Df78_k",
        tempo: "2h 32m",
        thumb: "https://upload.wikimedia.org/wikipedia/pt/f/fa/Ford_v_Ferrari_poster.png",
        stars: "12",
        sinopse: "O projetista Carroll Shelby e o piloto Ken Miles enfrentam a interferência empresarial, as leis da física e os próprios demônios para construir um carro de corrida para a Ford derrotar a hegemonia de Enzo Ferrari nas 24 horas de Le Mans",
        type: "filme"
    }

    const filme2 = {
        _id: "filme::" + 2,
        titulo: "Moonfall - Ameaça Lunar",
        genero: "Ficcão",
        data: "2022",
        link: "https://www.youtube.com/watch?v=c3yCQ-Fa2HE",
        tempo: "2h 10m",
        thumb: "https://br.web.img2.acsta.net/pictures/22/01/04/09/58/1947183.jpg",
        stars: "12",
        sinopse: "Uma força misteriosa tira a lua de sua órbita e a lança em rota de colisão em direção à Terra.",
        type: "filme"
    }

    const filme3 = {
        _id: "filme::" + 3,
        titulo: "A Proposta",
        genero: "Romance",
        data: "2009",
        link: "https://www.youtube.com/watch?v=hHXOiaRtnzk",
        tempo: "1h 48m",
        thumb: "https://m.media-amazon.com/images/S/pv-target-images/009aff84a3d54f8b347d1abd6ce54f5c68e74f4062467bcbc37d249d8c1f6a9b.jpg",
        stars: "14",
        sinopse: "Margaret Tate é uma poderosa editora de livros que corre o risco de ser deportada para o Canadá, seu país natal. Para poder permanecer em Nova York, ela diz estar noiva de Andrew, seu assistente. O jovem aceita ajudá-la, mas impõe algumas condições, entre elas ir para o Alasca e conhecer sua família excêntrica. Com um oficial da imigração sempre à espreita, Margaret e Andrew têm que seguir o plano de casamento apesar de diversos problemas.",
        type: "filme"
    }

    const filme4 = {
        _id: "filme::" + 4,
        titulo: "Casamento Sangrento",
        genero: "Terror",
        data: "2019",
        link: "https://www.youtube.com/watch?v=ZtYTwUxhAoI",
        tempo: "1h 35m",
        thumb: "https://m.media-amazon.com/images/I/81HF4EpruxL._UF894,1000_QL80_.jpg",
        stars: "18",
        sinopse: "Horas após o casamento dos seus sonhos, Grace retorna à casa de campo do novo marido para passar a noite com seus novos sogros. Grace logo se vê em uma luta sangrenta pela sobrevivência no que deveria ser a sua lua de mel.",
        type: "filme"
    }

    const filme5 = {
        _id: "filme::" + 5,
        titulo: "Carros 3",
        genero: "Animação",
        data: "2017",
        link: "https://www.youtube.com/watch?v=E4K7JgPJ8-s",
        tempo: "1h 49m",
        thumb: "https://cinemacomrapadura.com.br/imagens/2017/04/20170417-carros-3-internacional-poster-02.jpg",
        stars: "Livre",
        sinopse: "Durante mais uma disputa eletrizante nas pistas, o campeão Relâmpago McQueen acelerou demais e acabou perdendo o controle. Agora, após ter capotando várias vezes e quase ter partido dessa para melhor, o vermelinho vai ter sua vida alterada para sempre. O acidente foi tão grave que, com os estragos, McQueen pode ter que se aposentar de vez.",
        type: "filme"
    }

    const filme6 = {
        _id: "filme::" + 6,
        titulo: "F1",
        genero: "Ação",
        data: "2025",
        link: "https://www.youtube.com/watch?v=ZiDphkXCZsQ",
        tempo: "2h 35m",
        thumb: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/F1.webp/333px-F1.webp.png",
        stars: "12",
        sinopse: "Na década de 1990, Sonny Hayes era o piloto mais promissor da Fórmula 1 até que um acidente na pista quase encerrou sua carreira. Trinta anos depois, o proprietário de uma equipe de Fórmula 1 em dificuldades convence Sonny a voltar a correr e se tornar o melhor do mundo.",
        type: "filme"
    }

    const filme7 = {
        _id: "filme::" + 7,
        titulo: "A Guerra do Amanhã",
        genero: "Ficcão",
        data: "2021",
        link: "https://www.youtube.com/watch?v=LnIbOiskSdc&pp=0gcJCfwAo7VqN5tD",
        tempo: "2h 18m",
        thumb: "https://br.web.img3.acsta.net/pictures/21/05/26/20/19/2966501.jpg",
        stars: "14",
        sinopse: "O mundo fica chocado quando um grupo de viajantes do tempo chega em 2051 para entregar uma mensagem urgente: trinta anos no futuro, a humanidade está perdendo uma guerra global contra uma espécie alienígena mortal.",
        type: "filme"
    }


    const filme8 = {
        _id: "filme::" + 8,
        titulo: "Como Eu Era Antes de Você",
        genero: "Romance",
        data: "2016",
        link: "https://www.youtube.com/watch?v=PnqUs3xiAVI&pp=0gcJCfwAo7VqN5tD",
        tempo: "1h 50m",
        thumb: "https://br.web.img2.acsta.net/pictures/16/02/03/19/11/303307.jpg",
        stars: "12",
        sinopse: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
        type: "filme"
    }

    const filme9 = {
        _id: "filme::" + 9,
        titulo: "It - A Coisa",
        genero: "Terror",
        data: "2017",
        link: "https://www.youtube.com/watch?v=dD264ZjfKlk",
        tempo: "2h 15m",
        thumb: "https://upload.wikimedia.org/wikipedia/pt/8/82/It_2017.jpg",
        stars: "16",
        sinopse: "Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.",
        type: "filme"
    }

    const filme10 = {
        _id: "filme::" + 10,
        titulo: "Universidade Monstros",
        genero: "Animação",
        data: "2013",
        link: "https://www.youtube.com/watch?v=H4kDZgSPr6E",
        tempo: "1h 44m",
        thumb: "https://vejasp.abril.com.br/wp-content/uploads/2016/12/dom_brazil-jpg_rgb.jpeg",
        stars: "Livre",
        sinopse: "Mike e Sulley, alunos promissores da Universidade Monstros, são forçados a se unirem quando sua disputa acirrada pelo posto de aluno mais assustador da turma foge ao controle e eles acabam sendo expulsos da faculdade.",
        type: "filme"
    }

    await salvarFilme(filme1);
    await salvarFilme(filme2);
    await salvarFilme(filme3);
    await salvarFilme(filme4);
    await salvarFilme(filme5);
    await salvarFilme(filme6);
    await salvarFilme(filme7);
    await salvarFilme(filme8);
    await salvarFilme(filme9);
    await salvarFilme(filme10);
}
