let ileWierszyKL, ilePytanKL, sumaKL, SumaKL, nowaOdp;

function start(){
    ilePytanKL = document.getElementById("ilePytan").value;
    nowaOdp = false;

    clearAll();
    document.getElementById("liczenie").innerHTML = "Szybkie liczenie";
    document.getElementById("wynik").innerHTML = "0";
    document.getElementById("pozostalo").innerHTML = "Pozostało pytań: " + ilePytanKL;
}

function czysc(){
    for(let i=1; i<7; i++){
        document.getElementById("n" + i).innerHTML = '';
    }  
    document.getElementById("suma").innerHTML = 0;
}

function clearAll(){
    czysc();
    document.getElementById("wynik").innerHTML = '0';
}

function zadanie(){
    if(ilePytanKL>0){
        nowaOdp = true
        ileWierszyKL = document.getElementById("ileWierszy").value;
        czysc();
        SumaKL = noweLiczby(ileWierszyKL*2+1);
    }
    ilePytanKL--;
    if(ilePytanKL<=0) document.getElementById("liczenie").innerHTML = "Ostatnie pytanie";
    if(ilePytanKL>=0) document.getElementById("pozostalo").innerHTML = "Pozostało pytań: " + ilePytanKL;
}

function noweLiczby(N){
    let sumaKL = 0;
    let liczbaKL;
    for(let i=1; i<N; i++){
        liczbaKL = Math.ceil(Math.random() * 9)
        sumaKL += liczbaKL;
        document.getElementById("n" + i).innerHTML = liczbaKL;
    }
    return sumaKL;
}

function sprawdz(){
    if(nowaOdp){
        wynikGraczaKL = parseInt(document.getElementById("wynik").innerHTML);
        let sumaKL = document.getElementById("suma").value;
        wynikGraczaKL += (SumaKL == sumaKL)*2-1;
        document.getElementById("wynik").innerHTML = wynikGraczaKL;
    }
    nowaOdp = false;
    if(ilePytanKL<=0) document.getElementById("liczenie").innerHTML = "Koniec gry";
}