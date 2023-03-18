let input = document.getElementById('texto');
let resultado = document.getElementById('resultado');
let btn = document.getElementsByClassName("btn")[0];
let resultadomayusculas = document.getElementById("resultadoMayusculas");
console.log("resultado mayuscla", resultadomayusculas);

 input.addEventListener('input',function(){
    let mayus = getTexto();
    resultado.textContent = mayus;
});

btn.addEventListener('click', function(){
    let mayus = getTexto();
    resultadomayusculas.textContent = mayus;
});

let getTexto = function(){
return input.value.toUpperCase();
};