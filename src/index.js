
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
    
    alert("Running")
    alert(i);

    // Formatting Payment Method - TENHO QUE ARRUMAR
    let getPag = document.getElementById("getMetPag").value;
    if (getPag == "0") {
        getPag = "Método de Pagamento não Indicado";
        return alert(getPag);
    } else {
        if (getPag == "1") {
            getPag = "credito";
        } else {
            if (getPag == "2") {
                getPag = "debito";
            } else {
                getPag = "dinheiro";
            }
            
        }
    }

    // Get Itens, Quantity e Array Checkout
    let checkout = [];
    c = 1;
    while (c <=i) {
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

