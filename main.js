const form = document.getElementById ('form-valor');
const valorA = document.getElementById('campoA').value;
const valorB = document.getElementById('campoB').value;

function validaValor(valorA, valorB){
    return valorA < valorB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroFinalA = document.getElementById('campoA');
    const numeroFinalB = document.getElementById('campoB');
    const mensagemSucesso = `Preenchimeto correto. O valor de A é <b>menor</b> que o valor de B: ${numeroFinalA.value} < ${numeroFinalB.value}`;
    const mensagemErro = `Preenchimento incorreto. O valor de A é <b>maior</b> que o valor de B:  ${numeroFinalA.value} > ${numeroFinalB.value}`;

    formEValido = validaValor(valorA, valorB)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.mensagem-de-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.getElementsByClassName.display = 'block';

        numeroFinalA.value = '';
        numeroFinalB.value = '';

    }else{
        const containerMensagemErro = document.querySelector('.mensagem-de-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.getElementsByClassName.display = 'block';

        numeroFinalA.value = '';
        numeroFinalB.value = '';
    }
});




