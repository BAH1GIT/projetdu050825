let a = parseFloat(prompt("saisissez la valeur de a:"));
let b = parseFloat(prompt("saisissez la valeur de b:"));
let op = prompt("saisissez l'operateur de calcul (+,-,*,/,%):");

function calcul(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Erreur la division par 0 est impossible";
        case "%": return b !== 0 ? a % b : "Erreur la division par 0 est impossible";
        default:
            return " op inconnu";
    }
}



alert(calcul(a, b, op));