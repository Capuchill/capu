let numero = document.getElementById("numero");
const btnDuplicado = document.getElementById("botonDuplicado");

function duplicarNumero() {
    let n = parseFloat(numero.value);
    let numeroDuplicado = n * 2;
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Resultado= " + numeroDuplicado;
}

btnDuplicado.addEventListener("click",duplicarNumero);
