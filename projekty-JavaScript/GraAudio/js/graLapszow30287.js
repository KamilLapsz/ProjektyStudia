let imieKL = "";
let coLosujeKL = "";
let ilePytanKL = 0;
let zostaloPytanKL = 0;
let zwierzeKL ="";
let dzwiekKL ="";
let wynikKL = 0;

function przedStart(){
    document.getElementById("startS").style.display="initial";
    document.getElementById("imgS").style.display="none";
    document.getElementById("audioS").style.display="none";
    document.getElementById("statystykiS").style.display="none";
    document.getElementById("endS").style.display="none";

    wynikKL = 0;
    document.getElementById("zwierzeWybraneAudio").src="";
    document.getElementById("audioDzwiek").src="";
}

function start(){
    ilePytanKL = document.getElementById("ilePytan").value;
    zostaloPytanKL = ilePytanKL;
    coLosujeKL = document.getElementById("coLosuje").value;
    imieKL = document.getElementById("imie").value;

    if(coLosujeKL == "img"){
        document.getElementById("startS").style.display = "none";
        document.getElementById("imgS").style.display = "initial";
        document.getElementById("statystykiS").style.display="initial";
    }
    else if(coLosujeKL == "audio"){
        document.getElementById("startS").style.display = "none";
        document.getElementById("audioS").style.display = "initial";
        document.getElementById("statystykiS").style.display="initial";       
    }
    document.getElementById("zostaloPytan").innerHTML = "Zostało " + zostaloPytanKL + " z " + ilePytanKL + " pytań.";
    document.getElementById("wynikStat").innerHTML = "Masz teraz " + wynikKL + " punktów.";
    losujZwierze();

}

function losujZwierze(){
    let num = Math.floor(Math.random()*4);

    switch(num){
        case 0:
            zwierzeKL="cat";
            break;
        case 1:
            zwierzeKL="dog";
            break;
        case 2:
            zwierzeKL="horse";
            break;     
        case 3:
            zwierzeKL="cow";
            break;          
    }

    if (coLosujeKL == "img")
        document.getElementById("zwierzeWylosowaneIMG").src = "img/" + zwierzeKL + ".jpg";
    else
        document.getElementById("zwierzeWylosowaneAudio").src = "audio/" + zwierzeKL + ".mp3";
}

function grajImgDzwiek(){
    dzwiekKL = document.getElementById("wyborDzwieku").value;
    document.getElementById("zwierzeWybraneAudio").src = "audio/" + dzwiekKL + ".mp3" ;
    document.getElementById("zwierzeWybraneAudio").load;
}

function checkImgAudio(){
    document.getElementById("zwierzeWybraneAudio").pause();
    document.getElementById("zwierzeWylosowaneAudio").pause();
    let wyborImg = document.getElementById("wyborObrazu").value

    if (zwierzeKL == dzwiekKL || zwierzeKL == wyborImg){
        wynikKL++;
    }
    else{
        wynikKL--;
    }

    if (zostaloPytanKL > 1){
        document.getElementById("wynikStat").innerHTML = "Masz teraz " + wynikKL + " punktów.";
        zostaloPytanKL--;
        losujZwierze();
    }
    else {
        document.getElementById("endS").style.display="initial";
        document.getElementById("statystykiS").style.display="none";
        document.getElementById("imgS").style.display="none";
        document.getElementById("audioS").style.display="none";
        document.getElementById("pokazWynik").innerHTML = "Hej " + imieKL + ", Twój wynik to " + wynikKL + " punktów!";
    }

}

function getImg(){
    let img = document.getElementById("wyborObrazu").value;
    document.getElementById("zwierzeWybraneIMG").src = "img/" + img + ".jpg";
}