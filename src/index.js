
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

function validationCalculation() {

    // VALIDAÇÃO
    // Itens e Preços Pré-Estabelecidos
    let itensRegistrados = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

    let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];

    // Recendo Forma de Pagamento
    let metodoDePagamento = document.getElementById("getPay").value;
    let ajuste;

    // Verificação - Método de Pagamento
    console.log("===================")
    console.log("Entrada de Dados")
    switch (true) {
        case (metodoDePagamento == ""):
            alert("Por favor, insira uma forma de pagamento.");
            console.log("Não foi inserido a forma de pagamento.");
            return;

        // Credito
        case (metodoDePagamento == "credito"): 
            ajuste = 1.03
            console.log("Pagamento Crédito.");
            break;

        // Debito
        case (metodoDePagamento == "debito"): 
            ajuste = 0
            console.log("Pagamendo Débito.");
            break;

        // Dinheiro
        case (metodoDePagamento == "dinheiro"): 
            ajuste = 0.95
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
    let itens = [];
    c = 0;
    while (c <= i - 1) {
        let pedido;
        pedido = codItens[c]+','+quantity[c];
        itens.push(pedido);
        console.log(itens);
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
    n = 0;

    // Cáculo valor bruto
    tamanho = itens.length;
    while (n <= tamanho - 1) {
        itens[n];
        console.log(n+1+"° Input: "+itens[n]);
        codigo = itens[n].split(",");
        console.log("Pedido: "+codigo[0]+" | Quantidade: "+codigo[1]);
        codInd = itensRegistrados.indexOf(codigo[0]);
        console.log("Index do pedido no registro: "+codInd);
        itemPreco = parseFloat(precos[codInd]);
        console.log("O preço do "+codigo[0]+" é R$"+itemPreco);
        quantidade = parseInt(codigo[1]);
        valor = quantidade*itemPreco;
        console.log("Valor total do "+codigo[0]+" é: R$"+valor)
        soma = soma+valor;
        console.log(n+1+"° Input, o valor total é: R$"+soma);
        console.log("===================")
        n++;
    }

    // Cálculo do valor após ajustes
    console.log("Ajustes");
    console.log("===================");
    console.log("O valor bruto é:"+soma);

    switch (true) {
        case (metodoDePagamento == "credito"):
            vFinal = soma*ajuste;
            console.log("Pagamento: "+metodoDePagamento+" | Ajuste: +"+((ajuste*100)-100)+"% | Valor Final: "+vFinal);
            break;
        
        case (metodoDePagamento == "dinheiro"):
            vFinal = soma*ajuste;
            console.log("Pagamento: "+metodoDePagamento+" | Ajuste: -"+((ajuste*100)-100)+"% | Valor Final: "+vFinal);
            break;
        default:
            console.log("Não é necessário Ajuste!")
            break;
    }

    // Formatação do Valor Final
    console.log("===================");
    console.log("Formatação");
    console.log("===================");

    
}



