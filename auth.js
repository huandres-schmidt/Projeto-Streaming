function verificarAcessoAdmin() {
    const user = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!user || user.admin !== 0) {
        alert("Acesso não autorizado.");
        window.location.href = "/login/login.html";
    }
}

function ocultarLinksParaUsuariosComuns() {
    const user = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (user && user.admin !== 0) {
        const linkCadastro = document.getElementById('link-cadastro');
        const linkUsuarios = document.getElementById('link-usuarios');
        if (linkCadastro) linkCadastro.style.display = 'none';
        if (linkUsuarios) linkUsuarios.style.display = 'none';
    }
}

function exibirNomeUsuario() {
    const user = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (user) {
        const nomeEl = document.getElementById('nome-usuario');
        if (nomeEl) nomeEl.textContent = `Olá, ${user.nome}`;
    }
}