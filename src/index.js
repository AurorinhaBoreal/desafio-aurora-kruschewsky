
// ADDING INPUTS
let i = 1;
function addInput() {
    
    if (i < 11) {
        i++;
        console.log(i);
         // Selecting the Forms
        var itens = document.getElementById("itens");

        // Creating dinamic <input>
        var br = document.createElement("br")
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

function getInfo() {
    
    alert("Running")
    console.log(i);
    
}


// let metodoDePagamento = prompt("Escolha o método de pagamento desejado (1-Crédito | 2-Débito | 3-Dinheiro):")

// let itens = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

// let qtd = prompt("Insira a quantidade de cada item:");

// let precos = [3, 1.5, 6.2, 6.5, 2, 7.25, 9.5, 7.5];

