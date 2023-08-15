// VALIDAÇÃO
        // Itens e Preços Pré-Estabelecidos
        let itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

        let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];

        // Recendo Forma de Pagamento
        let ajuste;
        let resultado;

        // Verificação - Método de Pagamento
        switch (true) {
            case (metodoDePagamento == ""):
                console.log("Não foi inserido a forma de pagamento.");
                resultado = "Não foi inserido a forma de pagamento.";
                return;

            // Credito
            case (metodoDePagamento == "credito"): 
                ajuste = 1.03
                break;

            // Debito
            case (metodoDePagamento == "debito"): 
                ajuste = 0
                break;

            // Dinheiro
            case (metodoDePagamento == "dinheiro"): 
                ajuste = 0.95
                break;

            // Invalido
            default: resultado = "Forma de pagamento inválida!"; return;
        };

        // Validação de Itens
        let i = itens.length;
        let c = 1;
        let codItens = [];
        let valiArray = [];
        let valiTeste1;
        let valiTeste2;
        let item;

        
        while (c <= i) {

            // Validação de Itens no Carrinho!! - Única e Multipla
            while (c <= i) {
                if (item == "") {
                    valiArray.push("0");
                } else { 
                    valiArray.push("1");
                    break; }
                c++;
            }
            console.log(valiArray);
            valiTeste1 = valiArray.indexOf("1");
            valiTeste2 = valiArray.indexOf("0");
            if (valiTeste1 == "-1") {
                resultado = "Não há itens no carrinho de compra!"
                return;
            } else if (valiTeste2 != "-1") {
                resultado = "Não há itens no carrinho de compra!"
                return;
            }

            // Validação de Itens Validos
            let valItem1 = itensRegistrados.indexOf(item);
            if (valItem1 == "-1") {
                resultado = "Item inválido"
                return;
            }
            codItens.push(item);
            c++;
        };

        // Validação Item Extra - Chantily
        let valItem2 = codItens.indexOf("chantily");
        if (valItem2 != "-1") {
            let valItem2 = codItens.indexOf("cafe");
            if (valItem2 == "-1") {
                resultado = "Item extra não pode ser pedido sem o principal";
                return;
            }
        }

        // Validação Item Extra - Chantily
        let valItem3 = codItens.indexOf("queijo");
        if (valItem3 != "-1") {
            let valItem3 = codItens.indexOf("sanduiche");
            if (valItem3 == "-1") {
                resultado = "Item extra não pode ser pedido sem o principal"
                return;
            }
        }

        // Validação de Quantidade
        let quantity = [];

        c = 1;
        while (c <= i) {
            let quantityItem = document.getElementById("getQtd"+c).value;
            if (quantityItem < 1) {
                resultado = "Quantidade inválida";
                return;
            }
            if (quantityItem > 10) {
                resultado = "Quantidade inválida";
                return;
            }
            quantity.push(quantityItem);
            c++;
        };

        // Formatando Array de Itens
        c = 0;
        while (c <= i - 1) {
            let pedido;
            pedido = codItens[c]+','+quantity[c];
            c++;
        }

        // CALCULO
        // Itens e Preços Pré-Estabelecidos
        itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

        precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];

        // Calculo
        console.log("===================")
        console.log("Cálculo de Valor Bruto");
        console.log("===================")

        // Variaveis e Definições
        let valor = 0;
        let soma = 0;
        let codigo;
        let quantidade;
        let codInd;
        let tamanho;
        let n = 0;

        // Cáculo valor bruto
        tamanho = itens.length;
        while (n <= tamanho - 1) {
            itens[n];
            codigo = itens[n].split(",");
            codInd = itensRegistrados.indexOf(codigo[0]);
            itemPreco = parseFloat(precos[codInd]);
            quantidade = parseInt(codigo[1]);
            valor = quantidade*itemPreco;
            soma = soma+valor;
            n++;
        }

        // Cálculo do valor após ajustes

        let vFinal;
        
        vFinal = soma*ajuste;

        // Formatação do Valor Final
        console.log("===================");
        console.log("Formatação");
        console.log("===================");

        let vFormatado;

        vFinal = vFinal.toFixed(2)
        vFormatado = vFinal.split(".");
        resultado = "R$"+vFormatado[0]+","+vFormatado[1];