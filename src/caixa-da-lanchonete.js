class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        let itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
        let precosRegistrados = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];
        let lenItens = itens.length;
        let cont = 0;
        let resultado;

        // Verificação - Método de Pagamento
        let ajuste;
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

        // Populando arrayItens e arrayQtd
        let arrayItens = [];
        let arrayQtd = [];
        let separacao;
        while (cont < lenItens) {
            separacao = itens[cont].split(",")
            arrayItens.push(separacao[0])
            arrayQtd.push(separacao[1])
            cont++;
        }

        // Verificação de Itens Válidos e Quantidade Válida
        let validacaoItens;
        let validacaoQtd;
        cont = 0;
        while (cont < lenItens) {
            validacaoItens = itensRegistrados.indexOf(arrayItens[cont]);
            if (validacaoItens == "-1") {
                resultado = "Item inválido!"
                return resultado;
            }
            validacaoQtd = arrayQtd[cont];
            if (validacaoQtd < "1") {
                resultado = "Quantidade inválida!"
                return resultado;
            }
            cont++;
        }

        // Validação Item Extra - Chantily
        let validacaoExtraC;
        cont = 0;
        while (cont < lenItens) {
            validacaoExtraC = arrayItens.indexOf("chantily");
            if (validacaoExtraC != "-1") {
                validacaoExtraC = arrayItens.indexOf("cafe");
                if (validacaoExtraC == "-1") {
                    resultado = "Item extra não pode ser pedido sem o principal"
                    return resultado;
                }
            }
            cont++;
        }

        // Validação Item Extra - Queijo
        let validacaoExtraQ;
        cont = 0;
        while (cont < lenItens) {
            validacaoExtraQ = arrayItens.indexOf("queijo");
            if (validacaoExtraQ != "-1") {
                validacaoExtraQ = arrayItens.indexOf("sanduiche");
                if (validacaoExtraQ == "-1") {
                    resultado = "Item extra não pode ser pedido sem o principal"
                    return resultado;
                }
            }
            cont++;
        }

        // Cálculos e Formatações
        let valorPedido = 0;
        let valorTotal = 0;
        let pedidoPreco;
        let pedidoQuantidade;
        let codIndex;
        let valorAjustado;
        let valorFormatado;
        cont = 0;

        while (cont < lenItens) {
            codIndex = itensRegistrados.indexOf(arrayItens[cont]);
            pedidoPreco = parseFloat(precosRegistrados[codIndex]);
            pedidoQuantidade = parseInt(arrayQtd[cont]);
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

