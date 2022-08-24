const senha = document.querySelector('#senha')
const confirmacao = document.querySelector('#confirma-senha')
const email = document.querySelector('#email')
const botao = document.querySelector('#botao')

let listaEmail = [];

botao.addEventListener('click', (evento) => {
    confirmarSenha(senha, confirmacao, evento)
    guardarCadastro(email, senha);

})

function confirmarSenha(senha, confirmacao, evento) {
    if (!(senha.value === confirmacao.value)) {
        evento.preventDefault();
        alert('A confirmação não é igual a senha')
        return
    }

}

function guardarCadastro(email, senha) {

    localStorage.setItem('email', email.value);
    localStorage.setItem('senha', senha.value);

}