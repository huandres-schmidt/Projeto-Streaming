async function inicializarBanco() {
    const usuarioInicial = {
        _id: 'usuario::admin@admin.com',
        admin: 'Administrador',
        nome: 'Administrador',
        email: 'admin@admin.com',
        senha: 'admin123',
        type: 'usuario',
    };

    try {
        await db.get(usuarioInicial._id);
        console.log('Usuário já existe. Nada será feito.');
    } catch (err) {
        if (err.status === 404) {
        await criarUsuario(usuarioInicial);
        console.log('Usuário padrão criado.');
        } else {
        console.log('Usuário já existe.');
        }   
    }
}

document.getElementById("form-login").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email-user").value.toLowerCase();
    const senha = document.getElementById("password-user").value;

    const id = `usuario::${email}`;

    try {
        const usuario = await db.get(id);

        const senhaCorreta = usuario.senha == senha;
        if (senhaCorreta) {
            localStorage.setItem('usuarioLogado', JSON.stringify({
                nome: usuario.nome,
                email: usuario.email,
                admin: usuario.admin
            }));
            window.location.href = "./home/home.html";
        } else {
            alert("Senha incorreta.");
        }
    } catch (err) {
        alert("Usuário não encontrado.");
    }
});
