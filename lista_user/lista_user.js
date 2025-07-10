async function exibirUsuarios() {
    const usuarios = await listarUsuarios();
    const container = document.getElementById('lista-usuario');

    container.innerHTML = ''; 

    usuarios.forEach(usuario => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style = 'width: 100%';
        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-1">
                    <img src="../assets/icon/icone_person.png" alt="icone_pessoa">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${usuario.nome}</h5>
                        <p class="card-text">${usuario.email}</p>
                        <p class="card-text"><small class="text-body-secondary">${usuario.admin}</small></p>
                        <button class="btn btn-danger" onclick="deletarUsuario('${usuario._id}')">Excluir</button>
                        <button onclick="abrirModalEdicaoUser('${usuario._id}')" class="btn btn-primary">Editar</button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

async function deletarUsuario(id) {
    if(id === "usuario::admin@admin.com") {
        alert(`Não é possivel excluir usuário admin principal.`);
        return;
    }
    await removerUsuario(id);
    exibirUsuarios();
}

async function abrirModalEdicaoUser(id) {
    if(id === "usuario::admin@admin.com") {
        alert(`Não é possivel editar usuário admin principal.`);
        return;
    }
    
    const usuario = await db.get(id);

    document.getElementById('edit-id-usuario').value = usuario._id;
    document.getElementById('edit-nome').value = usuario.nome;
    document.getElementById('edit-email').value = usuario.email;
    document.getElementById('edit-admin').value = usuario.admin;
    document.getElementById('edit-senha').value = usuario.senha;
    
    const modalEl = document.getElementById('modal-editar-usuario');
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
}

document.getElementById('form-editar').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const id = document.getElementById('edit-id-usuario').value;
  const usuario = await db.get(id);

  const usuarioAtualizado = {
    _id: usuario._id,
    _rev: usuario._rev,
    type: "usuario",
    nome:  document.getElementById('edit-nome').value,
    email: document.getElementById('edit-email').value,
    senha: document.getElementById('edit-senha').value,
    admin: document.getElementById('edit-admin').value,
  };

  await db.put(usuarioAtualizado);
  exibirUsuarios();

  const modalEl = document.getElementById('modal-editar-usuario');
  const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
  modal.hide();
  alert(`Usuário atualizado com sucesso!!`);
});

exibirUsuarios();