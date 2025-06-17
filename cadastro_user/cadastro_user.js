const form = document.getElementById('form-cadastro');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nomeUser = document.getElementById('nome-user').value;
    const emailUser = document.getElementById('email-user').value;
    const passwordUser = document.getElementById('password-user').value;

    const usuario = {
        id: emailUser.toLowerCase(),
        type: "usuario",
        nome: nomeUser,
        email: emailUser.toLowerCase(),
        senha: passwordUser,
        admin: 1,
    }

    await criarUsuario(usuario);
    form.reset();
})