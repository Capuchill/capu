let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");


function calcularX1(){
    
    let num1 = parseFloat(a.value);
    let num2 = parseFloat(b.value);
    let num3 = parseFloat(c.value);

    let det = Math.pow(num2,2) - (4 * num1 * num3);
    
    if (det>=0){
        let resX1 = (-num2 + Math.sqrt(det)) / 2*num1;
    }
    else{
        alert("aaa")
    }
    
    console.log(resX1);
}

const generar = document.getElementById ("generar");
generar.addEventListener("click",calcularX1);


