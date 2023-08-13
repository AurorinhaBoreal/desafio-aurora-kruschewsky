
// ADICIONANDO INPUTS
let i = 1;
function addInput() {
    
    if (i < 8) {
        i++;
        console.log("Input " +i+ " Adicionado");
         // Selecionando a Div
        var itens = document.getElementById("itens");

        // Criando <input> dinâmicos
        var br = document.createElement("br")
        br.id="br" + i;
        var inputO = document.createElement("input");
        inputO.className="addedInputO"
        inputO.type="text";
        inputO.id="getPed" + i;
        inputO.name="Pedidos";
        inputO.required = true;
        var inputQ = document.createElement("input");
        inputQ.className="addedInputQ"
        inputQ.type="number";
        inputQ.id="getQtd" + i;
        inputQ.min="1"
        inputQ.max="10";
        inputQ.required = true;

        // Adicionando os elementos
        itens.appendChild(br);
        itens.appendChild(inputO);
        itens.appendChild(inputQ);
    } else {
        alert("Número máximo de itens atingido.")
        console.log("Número máximo de inputs atingidos!")
    }

    
}

// REMOVENDO INPUTS
function removeInput() {
    if (i > 1) {
        
        // Selecionando os inputs
        var removeBr = document.getElementById("br" + i);
        var removeO = document.getElementById("getPed" + i);
        var removeQ = document.getElementById("getQtd" + i);

        // Removendo Inputs
        removeBr.remove();
        removeO.remove();
        removeQ.remove();
        console.log("Input " +i+ " Removido");
        i--;
    } else {
        alert("Não é possivel ter menos que 1 item.")
        console.log("Número mínimo de itens atingido!")
    }
}

function getInfo() {

    // Itens e Preços Pré-Estabelecidos
    let itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

    let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];

    // Recendo Forma de Pagamento
    let metodoDePagamento = document.getElementById("getPay").value;
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
    let itens = [];
    c = 1;
    while (c <= i) {
        let codItem = document.getElementById("getPed"+c).value;
        if (codItem == "" && i == "1") {
            alert("Não há itens no carrinho de compra!");
            console.log("Não foram inseridos itens no carrinho.");
            return;
        }

        let valItem1 = itensRegistrados.indexOf(codItem);
        if (valItem1 == "-1") {
            alert('Item inválido!');
            console.log('O item "'+codItem+'" inserido no input '+c+' é inválido.');
            return;
        }
        itens.push(codItem);
        c++;
    };

    // Validação Item Extra - Chantily
    let valItem2 = itens.indexOf("chantily");
    if (valItem2 != "-1") {
        let valItem2 = itens.indexOf("cafe");
        if (valItem2 == "-1") {
            alert("Item extra não pode ser pedido sem o principal");
            console.log("Não é possivel pedir chantily sem pedir café.");
            return;
        }
    }

    // Validação Item Extra - Chantily
    let valItem3 = itens.indexOf("queijo");
    if (valItem3 != "-1") {
        let valItem3 = itens.indexOf("sanduiche");
        if (valItem3 == "-1") {
            alert("Item extra não pode ser pedido sem o principal");
            console.log("Não é possivel pedir queijo sem pedir sanduiche.");
            return;
        }
    }

    // Validação Preenchimento
    let valItem4 = itens.indexOf("")
    if (valItem4 != "-1") {
        alert("Por favor, preencha todos os campos antes de finalizar a compra.");
        console.log("Não foram preenchidos todos os inputs disponíveis.")
        return;
    }

    console.log("Tamanho do array Itens: "+itens.length);
    console.log("Itens: "+itens);

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
    alert("Length Quantity"+quantity.length);
    alert(quantity);

    // Formatting Itens, Quantity e Array Checkout
    let checkout = [];
    c = 1;
    while (c <= i) {
        let order;
        order = document.getElementById("getPed"+c).value+','+document.getElementById("getQtd"+c).value;
        checkout.push(order);
        c++;
    }
    
}



