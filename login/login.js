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
            window.location.href = "../home.html";
        } else {
            alert("Senha incorreta.");
        }
    } catch (err) {
        alert("Usuário não encontrado.");
    }
});

