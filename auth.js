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
        const linkFilmes = document.getElementById('link-filme');
        const linkUser = document.getElementById('link-cadastro-user');
        if (linkCadastro) linkCadastro.style.display = 'none';
        if (linkUsuarios) linkUsuarios.style.display = 'none';
        if (linkFilmes) linkFilmes.style.display = 'none';
        if (linkUser) linkUser.style.display = 'nome';
    }
}