function alterarQtd(produto, acao) {
    // Busca pelos ids dentro do html
    const quantidade = document.getElementById('quantidade_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);

    if (acao === '-' && parseInt(quantidade.innerHTML) === 0) { // Verifica se a ação de subtrair for igual a 0, se for então da o erro
        alert('Atenção! A quantidade não pode ser menor que 0');
    } else {
        // Se não faz o if ternário,  se a ação for uma adição ("+"), a quantidade é incrementada em 1; se a ação for uma diminuição ("-"), a quantidade é decrementada em 1
        quantidade.innerHTML = acao === '+' ? parseInt(quantidade.innerHTML) + 1 : parseInt(quantidade.innerHTML) - 1; 

        // Armazena nas variaveis
        const quantidadeValue = parseInt(quantidade.innerHTML);
        const valorValue = parseFloat(valor.innerHTML);

        // Checa se é um número válido, se for então faz o que está dentro do if
        if (!isNaN(quantidadeValue) && !isNaN(valorValue)) {
            const valorTotal = quantidadeValue * valorValue; // Multiplicação
            total.innerHTML = formatarValor(valorTotal); // Formata o valor
            soma(); // Chama para calcular o subtotal
        }
    }
}

// Função para calcular a soma total dos produtos
function soma() {
    let soma = 0;

    for (let i = 1; i <= 3; i++) {
        const totalElement = document.getElementById('total_' + i); // Corrigido para 'total_' em vez de 'subtotal_'
        const numero = parseFloat(totalElement.innerHTML);
        if (!isNaN(numero)) {
            soma += numero;
        }
    }

    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.innerHTML = formatarValor(soma); // Atualiza o subtotal formatado corretamente
}


function formatarValor(n) {
    return  n.toFixed(2);
}