const db = new PouchDB('streaming');

// Salvar Filme
async function salvarFilme(filme) {
    try {
        const exist = await db.get(filme._id);
    }catch (e) {

    }
    alert('Novo filme cadastrado!');
    return db.put(filme);
}

// Remover Filme
function removerFilme(id) {
    return db.get(id).then(doc => db.remove(doc));
}

// Listar Filme
function listarFilmes() {
    return db.allDocs({ include_docs: true}).then(res => res.rows.map(r => r.doc).filter(doc => doc.type == 'filme'));
}

// Criar conta usuario
async function criarUsuario(usuario) {
    const id = `usuario::${usuario.email.toLowerCase()}`;

    try {
        const exist = await db.get(id);
        alert("Usuário já existe com esse e-mail.");
        return;
    } catch (error) {
        
    }

    const novoUsuario = {
        _id: id,
        type: "usuario",
        nome: usuario.nome,
        email: usuario.email.toLowerCase(),
        senha: usuario.senha,
        admin: 1,
    };

    await db.put(novoUsuario);
    alert("Usuário cadastrado com sucesso!");
}

// Listar Usuarios
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
