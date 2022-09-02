window.onload = function(){
    document.getElementById("escolhadc").setAttribute('hidden',true);
    document.getElementById("escolhamarvel").setAttribute('hidden',true);
}

function opcaopersonagem(){

    if(document.querySelector("input[name=universo]:checked").value == "dc"){
        document.getElementById("escolhadc").removeAttribute("hidden");
        document.getElementById("escolhamarvel").setAttribute('hidden',true);
    }
    if(document.querySelector("input[name=universo]:checked").value == "marvel"){
        document.getElementById("escolhamarvel").removeAttribute("hidden");
        document.getElementById("escolhadc").setAttribute('hidden',true);
    }
}

function resultado(){

    universo = document.querySelector("input[name=universo]:checked").value;
    heroiDC = document.getElementById("heroi1").value;
    vilaoDC = document.getElementById("vilao1").value;
    heroiMarvel = document.getElementById("heroi2").value;
    vilaoMarvel = document.getElementById("vilao2").value;
        
    if (universo=='dc') { 
        if(heroiDC=='batman'){
            document.getElementById("mostrarHeroi").innerHTML= " <p class=frase1>Você escolheu o herói: <br> <img src='img/batman.jpg' class=heroi><br>";
        }
        else if(heroiDC=='super-men'){
            document.getElementById("mostrarHeroi").innerHTML= "<p class=frase1> Você escolheu o herói: <br> <img src='img/superman.jpg' class=heroi><br>";
        }
        else if(heroiDC=='aqua-men'){
            document.getElementById("mostrarHeroi").innerHTML= " <p class=frase1>Você escolheu o herói: <br> <img src='img/aquamen.webp' class=heroi> <br>";
        }
        else if(heroiDC=='mulher-maravilha'){
            document.getElementById("mostrarHeroi").innerHTML= " <p class=frase1>Você escolheu o herói: <br> <img src='img/mulher-maravilha.webp' class=heroi> <br>";
        }
        else if(heroiDC=='lanterna-verde'){
            document.getElementById("mostrarHeroi").innerHTML= "<p class=frase1> Você escolheu o herói: <br> <img src='img/lanterna-verde.jpg'class=heroi> <br>";
        } 
        else {
            document.getElementById("mostrarHeroi").innerHTML= "<p class=frase1> Escolha um comando válido";
        }
        if(vilaoDC=='arlequina'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/arlequina.webp' class=vilao> <br>";
        }
        else if(vilaoDC=='adão negro'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/adao-negro.wepb'  class=vilao> <br>";
        }
        else if(vilaoDC=='exterminador'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/exterminador.jpg'  class=vilao> <br>";
        }
        else if(vilaoDC=='coringa'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/coringa.png'  class=vilao> <br>";
        }
        else if(vilaoDC=='lex luthor'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/lex-lutor.jpg' class=vilao> <br>";
        }
    
    }
    
    if (universo=='marvel') {
        heroi2=document.getElementById("heroi2").value;
        if(heroiMarvel=='capitão-américa'){
            document.getElementById("mostrarHeroi").innerHTML= "<p class=frase1> Você escolheu o herói <br> <img src='img/capitao.jpg' class=heroi> <br>";
        }
        else if(heroiMarvel=='homem-de-ferro'){
            document.getElementById("mostrarHeroi").innerHTML="<p class=frase1> Você escolheu o herói <br> <img src='img/homem-de-ferro.jpg' class=heroi> <br>";
        }
        else if(heroiMarvel=='viuva-negra'){
            document.getElementById("mostrarHeroi").innerHTML="<p class=frase1> Você escolheu o herói <br>  <img src='img/viuva.webp' class=heroi> <br>";
        }
        else if(heroiMarvel=='thor'){
            document.getElementById("mostrarHeroi").innerHTML="<p class=frase1> Você escolheu o herói <br> <img src='img/thor.jpeg' class=heroi> <br>";
        }
        else if(heroiMarvel=='feiticeira-escarlate'){
            document.getElementById("mostrarHeroi").innerHTML="<p class=frase1> Você escolheu o herói <br>  <img src='img/feiticeira.jpg' class=heroi> <br>";
        }
    
        else{
            document.getElementById("mostrarHeroi").innerHTML="<p class=frase1> Escolha um comando válido";
        }
    
         vilao2=document.getElementById("vilao2").value;
        if(vilaoMarvel=='thanos'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2>Você escolheu este vilão <br> <img src='img/thanos.webp'  class=vilao> <br>";
        }
        else if(vilaoMarvel=='gorr'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/gorr.jpg'  class=vilao> <br>";
        }
        else if(vilaoMarvel=='ronan'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/ronan.jpg'  class=vilao> <br>";
        }
        else if(vilaoMarvel=='ikaris'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/ikaris.jpg'  class=vilao> <br>";
        }
        else if(vilaoMarvel=='aquele-que-permanece'){
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Você escolheu este vilão <br> <img src='img/aquele.jpg'  class=vilao> <br>";
        }
    
        else{
            document.getElementById("mostrarVilao").innerHTML="<p class=frase2> Escolha um comando válido";
        }

    }
}