function notas() {
    let nota = "nota";
    nota = prompt("Digite a nota recebida")
    switch (nota) {
        case "A":
            alert("Excelente!");
            break;
        case "B":
            alert("Ótimo!");
            break;
        case "C":
            alert("Bom!");
            break;
            case "D":
            alert("Regular!");
            break;
            case "E":
            alert("Ruim!");
            break;
            case "F":
            alert("Nos vemos de novo ano que vem...!");
            break;
        default:
            alert("Nota inexistente!");
    }
}

notas();

function clickReiniciar() {
    notas();
} 