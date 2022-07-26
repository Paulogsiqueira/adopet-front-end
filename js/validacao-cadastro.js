const senha = document.querySelector('#senha')
const confirmacao = document.querySelector('#confirma-senha')
const botao = document.querySelector('#botao')

botao.addEventListener('click', (evento) => {
    confirmarSenha(senha,confirmacao,evento)
    
})

function confirmarSenha(senha,confirmacao,evento){
    if(!(senha.value === confirmacao.value)){
        evento.preventDefault();
        alert('A confirmação não é igual a senha')
    }
}