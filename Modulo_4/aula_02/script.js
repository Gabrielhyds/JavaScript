//retornando todos os elementos p na pagina.
var p = document.getElementsByTagName('p');

//exibindo a quantidade de elementos
// alert(p.length);

p[0].innerHTML = "HACKEDO";

for (var i = 0; i < p.length; i++) {
    p[i].innerHTML = "HACKEDO " + i;
}

/**
    for(var i=0;i<10;i++){
        p[0].innerHTML = p[0].innerHTML + i;
    }
 */