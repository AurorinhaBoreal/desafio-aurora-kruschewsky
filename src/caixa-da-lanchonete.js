class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        let itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
        let precosRegistrados = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];
        let lenItens = itens.length;
        let separacao;
        let cont = 0;
        let resultado;
        let ajuste;

        // Verificação - Método de Pagamento
        switch (true) {
            // Credito
            case (metodoDePagamento == "credito"): 
                ajuste = 1.03;
                break;

            // Debito
            case (metodoDePagamento == "debito"): 
                ajuste = 1;
                break;

            // Dinheiro
            case (metodoDePagamento == "dinheiro"): 
                ajuste = 0.95;
                break;

            // Invalido
            default: 
                resultado = "Forma de pagamento inválida!"; 
                return resultado;
        };

        // Verificação do Carrinho Vazio
        if (itens == "") {
            resultado = "Não há itens no carrinho de compra!"
            return resultado;
        }

        // Verificação de Itens Válidos e Quantidade Válida
        while (cont < lenItens) {
            separacao = itens[cont].split(",")
            let valIdacaoItens = itensRegistrados.indexOf(separacao[0]);
            let validacaoQtd = separacao[1];
            if (valIdacaoItens == "-1") {
                resultado = "Item inválido!"
                return resultado;
            }
            if (validacaoQtd < "1") {
                resultado = "Quantidade inválida!"
                return resultado;
            }
            cont++;
        }

        // Cálculos e Formatações
        let codIndex;
        let pedidoPreco;
        let pedidoQuantidade;
        let valorPedido = 0;
        let valorTotal = 0;
        let valorAjustado;
        let valorFormatado;
        cont = 0;

        while (cont < lenItens) {
            separacao = itens[cont].split(",")
            codIndex = itensRegistrados.indexOf(separacao[0]);
            pedidoPreco = parseFloat(precosRegistrados[codIndex]);
            pedidoQuantidade = parseInt(separacao[1]);
            valorPedido = pedidoPreco*pedidoQuantidade;
            valorTotal = valorTotal+valorPedido;
            cont++;
            
        }

        valorAjustado = valorTotal*ajuste;
        valorAjustado = valorAjustado.toFixed(2)
        valorFormatado = valorAjustado.split(".");
        resultado = "R$ "+valorFormatado[0]+","+valorFormatado[1];

        return resultado;
    }

}

export { CaixaDaLanchonete };

