const form = document.getElementById('form-cadastro');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nomeUser = document.getElementById('nome-user').value;
    const emailUser = document.getElementById('email-user').value;
    const passwordUser = document.getElementById('password-user').value;
    const admin = document.getElementById('admin').value;

    if (!nomeUser || !emailUser || !passwordUser || !admin) {
        alert(`Por favor, preencha todos os campos antes de salvar.`);
        return;
    }

    const usuario = {
        _id: emailUser.toLowerCase(),
        type: "usuario",
        nome: nomeUser,
        email: emailUser.toLowerCase(),
        senha: passwordUser,
        admin: admin,
    }

    await criarUsuario(usuario);
    alert(`Novo usuário adicionado com sucesso!!`);
    form.reset();
})