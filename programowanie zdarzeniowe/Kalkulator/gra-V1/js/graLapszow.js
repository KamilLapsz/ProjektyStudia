let ileWierszyKL, ilePytanKL, n, suma, nowaOdp;

function start(){
    ileWierszyKL = document.getElementById("wiersze").value;
    ilePytanKL = document.getElementById("pytania").value;

    czysc();
}

function czysc(){
    for(i=0; i<6; i++){
        // TODO
    }  
    document.getElementById("name").innerHTML = "Szybkie liczenie";
    document.getElementById("wynik").innerHTML = "0";
}

function zadanie(){
    if(ilePytanKL>0){
        nowaOdp = true
        ileWierszyKL = document.getElementById("wiersze").value;
        n="n";
        czysc();
        suma = noweLiczby(ileWierszyKL*2+1);
    }
    ilePytanKL--;
    if(ilePytanKL<=0) document.getElementById("name").innerHTML = "Koniec gry";
}

function noweLiczby(){
    // TODO
}

function sprawdz(){
    if(nowaOdp){
        wynik = parseInt(document.getElementById("wynik").innerHTML);
    }
}