function alterarQtd(produto, acao){
    const quantidade = document.getElementById('quantidade_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && quantidade.innerHTML == 0){
        alert('Atenção! A quantidade não pode ser menor que 0')
    }else{
        acao == '+' ? quantidade.innerHTML++ : quantidade.innerHTML--
        const valorTotal = quantidade.innerHTML * somenteNumeros(valor.innerHTML)
        total.innerHTML = formatarValor(valorTotal)
        soma()
    }
    
}

function soma(){
    let soma = 0

    for(let i = 1; i < 4; i++){
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numero)
        console.log(numero)
    }

    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}

function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return 'R$' + n
}





