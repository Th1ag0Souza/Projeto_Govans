// Função para enviar o formulário de contato (ainda precisa ser implementada)
function enviarFormularioContato() {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados do formulário
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;

    // Valida os dados (opcional)

    // Envia os dados para o servidor (via AJAX ou fetch)
    console.log("Enviando formulário..."); // Simula o envio
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);

    // Limpa o formulário
    document.querySelector('.secao-contato form').reset();

    // Exibe mensagem de sucesso (opcional)
    alert('Formulário enviado com sucesso!');
}

// Adiciona o evento de submit ao formulário de contato
const formularioContato = document.querySelector('.secao-contato form');
formularioContato.addEventListener('submit', enviarFormularioContato);
