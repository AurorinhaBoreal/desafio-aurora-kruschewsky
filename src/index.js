
// ADDING INPUTS
let i = 1;
function addInput() {
    
    if (i < 10) {
        i++;
        console.log(i);
         // Selecting the Forms
        var itens = document.getElementById("itens");

        // Creating dinamic <input>
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

        // Adding to the container element
        itens.appendChild(br);
        itens.appendChild(inputO);
        itens.appendChild(inputQ);
    } else {
        alert("Número máximo de itens atingido!!")
    }

    
}

// REMOVING INPUTS
function removeInput() {
    if (i > 1) {
        console.log(i);
        
        // Selecting the Inputs
        var removeBr = document.getElementById("br" + i);
        var removeO = document.getElementById("getPed" + i);
        var removeQ = document.getElementById("getQtd" + i);

        // Removing Inputs
        removeBr.remove();
        removeO.remove();
        removeQ.remove();
        i--;
    } else {
        alert("Número mínimo de itens atingido!!")
    }
}

function getInfo() {

    // Verification Payment Method
    let getPag = document.getElementById("getPay").value;
    let adjustment;
    switch (true) {
        // Empty Input
        case (getPag == ""):
            alert("Por favor, insira uma forma de pagamento!")
            break;

        // Credito
        case (getPag == "credito"): 
            adjustment = 0.03
            alert("cred")
            break;

        // Debito
        case (getPag == "debito"): 
            adjustment = 0
            alert("deb")
            break;

        // Dinheiro
        case (getPag == "dinheiro"): 
            adjustment = 0.05
            alert("din")
            break;

        // N/A
        default: alert("Forma de Pagamento Inválida"); break;
    };

    // Get Itens, Quantity e Array Checkout - FEITO
    let checkout = [];
    c = 1;
    while (c <= i) {
        let order;
        order = document.getElementById("getPed"+c).value+','+document.getElementById("getQtd"+c).value;
        checkout.push(order);
        c++;
    }
    alert(checkout);

    // let itens = [cafe, chantily, suco, sanduiche, queijo, salgado, combo1, combo2]

    // let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5]
    
}


// let metodoDePagamento = prompt("Escolha o método de pagamento desejado (1-Crédito | 2-Débito | 3-Dinheiro):")

// let itens = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

// let qtd = prompt("Insira a quantidade de cada item:");

// let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];

