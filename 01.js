
//1

let fruta = "kiwi";
switch (fruta) {
    case "maçã":
        console.log("Não vendemos esta fruta aqui");
        break;
    case "kiwi":
        console.log("Estamos com escassez de kiwis");
        break;
    case "melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.log("Procure o administrador do sistema!");
        break;
}

//2

let salario = 700;
let reajuste;
let percentual;
let total;
if (salario <= 280) {
    percentual = 20;
    reajuste = (salario * percentual) / 100;
    total = salario + reajuste;
    console.log(`Salário anterior: R$${salario.toFixed(2)}\nPercentual de aumento: ${percentual}%\nValor de aumento: R$${reajuste.toFixed(2)}\nNovo salário: R$${total.toFixed(2)}`);
} else if (salario > 280 && salario <= 700) {
    percentual = 15;
    reajuste = (salario * percentual) / 100;
    total = salario + reajuste;
    console.log(`Salário anterior: R$${salario.toFixed(2)}\nPercentual de aumento: ${percentual}%\nValor de aumento: R$${reajuste.toFixed(2)}\nNovo salário: R$${total.toFixed(2)}`);
} else if (salario > 700 && salario <= 1500) {
    percentual = 10;
    reajuste = (salario * percentual) / 100;
    total = salario + reajuste;
    console.log(`Salário anterior: R$${salario.toFixed(2)}\nPercentual de aumento: ${percentual}%\nValor de aumento: R$${reajuste.toFixed(2)}\nNovo salário: R$${total.toFixed(2)}`);
} else if (salario > 1500) {
    percentual = 5;
    reajuste = (salario * percentual) / 100;
    total = salario + reajuste;
    console.log(`Salário anterior: R$${salario.toFixed(2)}\nPercentual de aumento: ${percentual}%\nValor de aumento: R$${reajuste.toFixed(2)}\nNovo salário: R$${total.toFixed(2)}`);
}