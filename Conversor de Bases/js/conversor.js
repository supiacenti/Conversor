const vb = document.getElementById("valorb");
const vo = document.getElementById("valoro");
const vh = document.getElementById("valorh");
const vd = document.getElementById("valord");
var r = document.getElementById("resposta");

$("#bina").show();
$("#octa").hide();
$("#hexa").hide();
$("#deci").hide();
$("#bin").click(function(){
    $("#bina").show();
    $("#octa").hide();
    $("#hexa").hide();
    $("#deci").hide();
})
document.querySelector("#bd").addEventListener("click", function(){
    const value = vb.value;
    let dec = 0;
    dec = parseInt(value, 2);
    
    r.innerHTML = '<p class="r">' + value + ' para decimal é igual a: <b>' + dec + '</b></p>';
});

$("#oct").click(function(){
    $("#bina").hide();
    $("#octa").show();
    $("#hexa").hide();
    $("#deci").hide();
})

$("#hex").click(function(){
    $("#bina").hide();
    $("#octa").hide();
    $("#hexa").show();
    $("#deci").hide();
})

$("#dec").click(function(){
    $("#bina").hide();
    $("#octa").hide();
    $("#hexa").hide();
    $("#deci").show();
})
document.querySelector("#db").addEventListener("click", function(){
    const value = vd.value;
    let dec = 0;
    dec = (value >>> 0).toString(2);
    
    r.innerHTML = '<p class="r">' + value + ' para binário é igual a: <b>' + dec + '</b></p>';
});

document.querySelector("#again").addEventListener("click", function(){
    valor.value = "";
    r.innerHTML = '<p class="r"></p>';
});