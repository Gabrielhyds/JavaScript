var elementos = document.querySelectorAll('[type=radio]');

for(var i=0;i<elementos.length;i++){
    elementos[i].addEventListener('change', function(e){
        let marcado = e.target.value;
        if(marcado == 'correta'){
           let parentNode = e.target.parentNode;
           parentNode.style.backgroundColor= "green";

           let els = parentNode.parentNode.querySelectorAll('[type=radio]');

           for(var n = 0; n < els.length; n++){
               els[n].disable = true;
           }
        }else if(marcado == 'incorreta'){
           let parentNode = e.target.parentNode;
           parentNode.style.backgroundColor= "red";

           let els = parentNode.parentNode.querySelectorAll('[type=radio]');

           for(var n=0; n<els.length; n++){
               els[n].disabled = true;
           }

           let correta = parentNode.parentNode.querySelector('[value=correta]');
           correta.parentNode.style.backgroundColor = "green";



        }

    })
}


//colocar o span e o input type radio dentro de uma div para preencher toda a linha;
// recuperar o elemento pai da opção correta ou incorreta e aplicar a devida cor;
// depois de selecionado a resposta deixar o botão desabilitado;