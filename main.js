const form = document.getElementById ('form-pagamento');
const nomeBeneficiário = document.getElementById('Nome-Beneficiário');

function validaNome(nomeCompleto) {
   const nomeComoArray = nomeCompleto.split('');
   return nomeComoArray.lenght >= 2;


}

form.addEventListener('submit', function(e) { 
    let formEvalido = false;
    e.preventDefault();

    const nomeBeneficiário = document.getElementById('Nome-Beneficiário');
    const numeroContaBeneficiário = document.getElementById('numero-conta');
    const valorPagamento = document.getElementById('valor-pagamento');
    const mensagemSucesso = `Pagamento efetuado com sucesso`

    formEvalido = validaNome(nomeBeneficiário.value)
    if (formEvalido) {
                const conteinerSucessMessage = document.querySelector('sucess-message');
                conteinerSucessMessage.innerHTML = mensagemSucesso;
                conteinerSucessMessage.style.display = 'block'

                nomeBeneficiário.value = '';
                numeroContaBeneficiário.value = '';
                valorPagamento.value = '';
    } else {
        document.querySelector('error-message').style.display = 'block'
    }
   
    
})

nomeBeneficiário.addEventListener('change' function(e) {
    console.log(e);

})
