document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Converter os dados para JSON
    const jsonDados = JSON.stringify(dados);

    // Exibir o JSON no console
    console.log(jsonDados);

    // Aqui você pode enviar o JSON para o servidor usando AJAX/fetch, se necessário
});

function redirecionar() {
    window.location.href = "3lista_eventos\main.html";
}