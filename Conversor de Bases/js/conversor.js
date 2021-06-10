const vb = document.getElementById("valorb");
const vo = document.getElementById("valoro");
const vh = document.getElementById("valorh");
const vd = document.getElementById("valord");
var b = document.getElementById("bin");
b.style.backgroundColor = "#022859";
var r = document.getElementById("resposta");

$("#bina").show();
$("#octa").hide();
$("#hexa").hide();
$("#deci").hide();

//conversões binárias
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
document.querySelector("#bo").addEventListener("click", function(){
    const value = vb.value;
    let d = 0;
    d = parseInt(value, 2);
    var oc = d.toString(8);
    
    r.innerHTML = '<p class="r">' + value + ' para octal é igual a: <b>' + oc + '</b></p>';
});
document.querySelector("#bh").addEventListener("click", function(){
    const value = vb.value;
    let d = 0;
    d = parseInt(value, 2);
    var he = d.toString(16);
    
    r.innerHTML = '<p class="r">' + value + ' para hexadecimal é igual a: <b>' + he + '</b></p>';
});

//conversões octais
$("#oct").click(function(){
    $("#bina").hide();
    $("#octa").show();
    $("#hexa").hide();
    $("#deci").hide();
})
document.querySelector("#od").addEventListener("click", function(){
    const value = vo.value;
    let dec = 0;
    let v = parseInt(value);
    dec = parseInt(v, 8);
    
    r.innerHTML = '<p class="r">' + value + ' para decimal é igual a: <b>' + dec + '</b></p>';
});
document.querySelector("#ob").addEventListener("click", function(){
    const value = vo.value;
    let dec = 0;
    let v = parseInt(value);
    dec = parseInt(v, 8);
    bi = (dec >>> 0).toString(2);
    
    r.innerHTML = '<p class="r">' + value + ' para binário é igual a: <b>' + bi + '</b></p>';
});
document.querySelector("#oh").addEventListener("click", function(){
    const value = vo.value;
    let dec = 0;
    let v = parseInt(value);
    dec = parseInt(v, 8);
    let he = dec.toString(16);
    let h = he.toString().toUpperCase();
    
    r.innerHTML = '<p class="r">' + value + ' para hexadecimal é igual a: <b>' + h + '</b></p>';
});

//conversões hexadecimais
$("#hex").click(function(){
    $("#bina").hide();
    $("#octa").hide();
    $("#hexa").show();
    $("#deci").hide();
})
document.querySelector("#hd").addEventListener("click", function(){
    const value = vh.value;
    let dec = 0;
    dec = parseInt(value, 16);
    
    r.innerHTML = '<p class="r">' + value + ' para decimal é igual a: <b>' + dec + '</b></p>';
});
document.querySelector("#hb").addEventListener("click", function(){
    const value = vh.value;
    let dec = 0;
    dec = parseInt(value, 16);
    bi = (dec >>> 0).toString(2);
    
    r.innerHTML = '<p class="r">' + value + ' para binário é igual a: <b>' + bi + '</b></p>';
});
document.querySelector("#ho").addEventListener("click", function(){
    const value = vh.value;
    let dec = 0;
    dec = parseInt(value, 16);
    oc = dec.toString(8);
    
    r.innerHTML = '<p class="r">' + value + ' para octal é igual a: <b>' + oc + '</b></p>';
});

//conversões decimais
$("#dec").click(function(){
    $("#bina").hide();
    $("#octa").hide();
    $("#hexa").hide();
    $("#deci").show();
})
document.querySelector("#db").addEventListener("click", function(){
    const value = vd.value;
    let bi = 0;
    bi = (value >>> 0).toString(2);
    
    r.innerHTML = '<p class="r">' + value + ' para binário é igual a: <b>' + bi + '</b></p>';
});
document.querySelector("#do").addEventListener("click", function(){
    const value = vd.value;
    let oc = 0;
    let v = parseInt(value);
    oc = v.toString(8);
    
    r.innerHTML = '<p class="r">' + value + ' para octal é igual a: <b>' + oc + '</b></p>';
});
document.querySelector("#dh").addEventListener("click", function(){
    const value = vd.value;
    let he = 0;
    let v = parseInt(value);
    he = v.toString(16);
    let h = he.toString().toUpperCase();
    
    r.innerHTML = '<p class="r">' + value + ' para hexadecimal é igual a: <b>' + h + '</b></p>';
});

//botão de reiniciar
document.querySelector("#again").addEventListener("click", function(){
    vb.value = "";
    vo.value = "";
    vh.value = "";
    vd.value = "";
    r.innerHTML = '<p class="r"></p>';
});

//mudança de cor dos botões do menu
function mudaCor(a, b, c, d){
    a.style.backgroundColor = "#022859";
    b.style.backgroundColor = "#6C778C";
    c.style.backgroundColor = "#6C778C";
    d.style.backgroundColor = "#6C778C";
}