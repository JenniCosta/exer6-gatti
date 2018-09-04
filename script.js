function funcao(){
var base = document.getElementById("base").value;
var altura = document.getElementById("altura").value;
var area = (base * altura)/ 2;
var total= Math.abs(area);

document.getElementById("resultado").innerHTML = "Área: "+ total;
}

