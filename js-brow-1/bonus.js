let input = document.getElementById('texto');
let btn = document.getElementsByClassName("btn")[0];
let resultado = document.getElementById('resultado');

btn.addEventListener('click', function () {
    let texto = input.value.toLowerCase();
    let esPalindromo = texto.split("").reverse().join("");
    resultado.textContent = texto === esPalindromo ?
        "Es Palíndromo" :
        "No es Palíndromo";

});