var  elementos = document.querySelectorAll('.player-options div');
var playerOpt ="";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector(".vencedor");

    if(playerOpt == "Papel"){
        if(inimigoOpt == "Papel"){
            //Empate
            vencedor.innerHTML = "<span style='color: yellow'>O jogo foi empatado</span>";
        }else if(inimigoOpt == "Tesoura"){
            //Inimigo Ganhou
            vencedor.innerHTML = "<span style='color: red'>O bot Ganhou</span>";
        }else if(inimigoOpt == "Pedra"){
            //O player Ganhou
            vencedor.innerHTML = "<span style='color: green'>O player Ganhou</span>";
        }
    }

    if(playerOpt == "Pedra"){
        if(inimigoOpt == "Pedra"){
            //Empate
            vencedor.innerHTML = "<span style='color: yellow'>O jogo foi empatado</span>";
        }else if(inimigoOpt == "Papel"){
            //Inimigo Ganhou
            vencedor.innerHTML = "<span style='color: red'>O bot Ganhou</span>";
        }else if(inimigoOpt == "Tesoura"){
            //O player Ganhou
            vencedor.innerHTML = "<span style='color: green'>O player Ganhou</span>";
        }
    }

    if(playerOpt == "Tesoura"){
        if(inimigoOpt == "Tesoura"){
            //Empate
            vencedor.innerHTML = "<span style='color: yellow'>O jogo foi empatado</span>";
        }else if(inimigoOpt == "Pedra"){
            //Inimigo Ganhou
            vencedor.innerHTML = "<span style='color: red'>O bot Ganhou</span>";
        }else if(inimigoOpt == "Papel"){
            //O player Ganhou
            vencedor.innerHTML = "<span style='color: green'>O player Ganhou</span>";
        }
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i=0; i< enemyOptions.length; i++){
            enemyOptions[i].childNodes[0].style.opacity = 0.3;
      
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i=0; i< enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();

   // alert(playerOpt);
   // alert(inimigoOpt);
}


function resetOpacitityPlayer(){
    for(var i=0;i<elementos.length;i++){
        elementos[i].style.opacity = 0.3;
    }
}



for(var i=0;i<elementos.length;i++){
    elementos[i].addEventListener("click", function(t){
        resetOpacitityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();

        //alert(playerOpt);
    });
}