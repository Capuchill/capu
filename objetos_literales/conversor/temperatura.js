const d=document;

function mostrarTemperatura()
{
    let valorT=d.getElementById('valorT').value;
    let seleccionT1=d.getElementById('seleccionT1').value;
    let seleccionT2=d.getElementById('seleccionT2').value;

    if(seleccionT1 == 'C' & seleccionT2 == 'F'){
        celsiusFaren(valorT)
    }
    if(seleccionT1 == 'F' & seleccionT2 == 'C'){
        farenCelsius(valorT)
    }
    if(seleccionT1 == 'F' & seleccionT2 == 'F'){
        alert("No sea bruto")
    }

}

function farenCelsius(valorT){
    let mostrar = document.getElementById("mostrarTemp");
    let celsius = (valorT - 32) / 1.8;
    console.log(celsius);
    mostrar.innerHTML = Math.round(celsius);
}


function celsiusFaren(valorT){
    let mostrar = document.getElementById("mostrarTemp")
    let faren = (valorT * 1.8) + 32
    console.log(faren);
    mostrar.innerText = Math.round(faren);
}