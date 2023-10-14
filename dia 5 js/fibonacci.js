const input = document.getElementById("cantidad");
const btnGenerar = document.getElementById("generar");
const listaNumeros = document.getElementById("lista");

function generarFibonacci() {
    listaNumeros.innerHTML="";
    let n= parseInt(input.value);
    let a=0; b=1;
    while (n>0){
        const nuevoElemento=document.createElement("li");
        nuevoElemento.textContent=a;
        listaNumeros.appendChild(nuevoElemento);
        let temp = a;
        a = b;
        b = temp + b;
        n--
    }
}

btnGenerar.addEventListener("click", generarFibonacci)