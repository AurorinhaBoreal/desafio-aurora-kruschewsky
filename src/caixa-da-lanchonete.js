
function chamandoMetodo() {
    let callMethod = new parent();
    alert("Running");
    callMethod.calcularValorDaCompra();
}
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {


        // Itens e Preços Pré-Estabelecidos
        let itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
    
        let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];
    
        // Recendo Forma de Pagamento
        metodoDePagamento = document.getElementById("getPay").value;
        let adjustment;
    
        // Verificação - Método de Pagamento
        switch (true) {
            case (metodoDePagamento == ""):
                alert("Por favor, insira uma forma de pagamento.");
                console.log("Não foi inserido a forma de pagamento.");
                return;
    
            // Credito
            case (metodoDePagamento == "credito"): 
                adjustment = 0.03
                console.log("Pagamento Crédito.");
                break;
    
            // Debito
            case (metodoDePagamento == "debito"): 
                adjustment = 0
                console.log("Pagamendo Débito.");
                break;
    
            // Dinheiro
            case (metodoDePagamento == "dinheiro"): 
                adjustment = 0.05
                console.log("Pagamento Dinheiro.");
                break;
    
            // Invalido
            default: alert("Forma de pagamento inválida!"); console.log("Forma de pagamento inválida."); return;
        };
    
        // Validação de Itens
        let codItens = [];
        c = 1;
        while (c <= i) {
            let item = document.getElementById("getPed"+c).value;
            if (item == "" && i == "1") {
                alert("Não há itens no carrinho de compra!");
                console.log("Não foram inseridos itens no carrinho.");
                return;
            }
    
            let valItem1 = itensRegistrados.indexOf(item);
            if (valItem1 == "-1") {
                alert('Item inválido!');
                console.log('O item "'+item+'" inserido no input '+c+' é inválido.');
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
                alert("Item extra não pode ser pedido sem o principal");
                console.log("Não é possivel pedir chantily sem pedir café.");
                return;
            }
        }
    
        // Validação Item Extra - Chantily
        let valItem3 = codItens.indexOf("queijo");
        if (valItem3 != "-1") {
            let valItem3 = codItens.indexOf("sanduiche");
            if (valItem3 == "-1") {
                alert("Item extra não pode ser pedido sem o principal");
                console.log("Não é possivel pedir queijo sem pedir sanduiche.");
                return;
            }
        }
    
        // Validação Preenchimento
        let valItem4 = codItens.indexOf("")
        if (valItem4 != "-1") {
            alert("Por favor, preencha todos os campos antes de finalizar a compra.");
            console.log("Não foram preenchidos todos os inputs disponíveis.")
            return;
        }
    
        console.log("Tamanho do array Itens: "+codItens.length);
        console.log("Itens: "+codItens);
    
        // Validação de Quantidade
        let quantity = [];
        c = 1;
        while (c <= i) {
            let quantityItem = document.getElementById("getQtd"+c).value;
            if (quantityItem < 1) {
                alert("Quantidade inválida!");
                console.log("Não é possivel pedir 0 itens.")
                return;
            }
            if (quantityItem > 10) {
                alert("Quantidade inválida!");
                console.log("Não é possivel pedir mais de 10 itens por produto.");
                return;
            }
            quantity.push(quantityItem);
            c++;
        };
    
        // Formatando Array de Itens
        itens = [];
        c = 0;
        while (c <= i) {
            let pedido;
            pedido = codItens[c]+','+quantity[c];
            itens.push(pedido);
            console.log(itens);
            c++;
        }

        // Calculo
        console.log("Este Array de itens, está vindo dessa mesma função!! :D" +itens);

        return "";
    }

}

export { CaixaDaLanchonete };

