const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#botao');


botao.addEventListener('click', (e) => {
    e.preventDefault();
    let cadastro = verificarLogin(login.value, senha.value)

    if (cadastro) {
        window.location.href = "/home.html";
        return
    }
    alert('Usuario não cadastrado')
})



function verificarLogin(login, senha) {
    const logins = localStorage.getItem('email');
    const senhas = localStorage.getItem('senha');

    let cadastro = false

    if (logins === login && senhas === senha) {
        cadastro = true
    }

    return cadastro

}
