async function exibirUsuarios() {
    const usuarios = await listarUsuarios();
    const container = document.getElementById('lista-usuario');

    container.innerHTML = ''; 

    usuarios.forEach(usuario => {
        const isAdmin = usuario.admin === 0 ? 'Administrador' : "Usuário Comum";

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
                        <p class="card-text"><small class="text-body-secondary">${isAdmin}</small></p>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

exibirUsuarios();