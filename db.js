const db = new PouchDB('streaming');

async function salvarFilme(filme) {
    try {
        const exist = await db.get(filme._id);
    }catch (e) {

    }
    return db.put(filme);
}

function removerFilme(id) {
    return db.get(id).then(doc => db.remove(doc));
}

function listarFilmes() {
    return db.allDocs({ include_docs: true}).then(res => res.rows.map(r => r.doc).filter(doc => doc.type == 'filme'));
}


async function criarUsuario(usuario) {;
    const id = `usuario::${usuario.email.toLowerCase()}`;

    try{
        const exist = await db.get(id);
        alert("Usuário já existe com esse e-mail.");
        return;
    }catch(e) {

    }

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
