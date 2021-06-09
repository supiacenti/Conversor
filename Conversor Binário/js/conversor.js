var r = document.getElementById("resposta");
const valor = document.getElementById("valor");

document.querySelector("#db").addEventListener("click", function(){
    const value = valor.value;
    let dec = 0;
    dec = (value >>> 0).toString(2);
    
    r.innerHTML = '<p class="r">' + value + ' para binário é igual a: <b>' + dec + '</b></p>'
    
});
document.querySelector("#bd").addEventListener("click", function(){
    const value = valor.value;
    let dec = 0;
    dec = parseInt(value, 2);
    
    r.innerHTML = '<p class="r">' + value + ' para decimal é igual a: <b>' + dec + '</b></p>';
});

document.querySelector("#again").addEventListener("click", function(){
    valor.value = "";
    r.innerHTML = '<p class="r"></p>';
});