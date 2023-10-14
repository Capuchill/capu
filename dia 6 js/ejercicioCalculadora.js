const inputDescuento = document.getElementById("descuento");
const botonCalcular = document.getElementById("calcular");
const resultados = document.getElementById("resultados");

const precios = [20, 30, 40, 50];

function calcularDescuento(){
    const descuento = parseFloat (inputDescuento.value);
    const preciosConDescuento = precios.map(function(precio){
        const preciosConDescuento = precio * (descuento / 100);
        return preciosConDescuento.toFixed(2);
    });

    resultados.innerHTML = "<h2>Precios con descuento:<h2>";
    preciosConDescuento.forEach((precio,index) => {
        resultados.innerHTML += `<p> Producto ${index + 1}: $${precio} </p>`;
    });
}

botonCalcular.addEventListener('click', calcularDescuento);