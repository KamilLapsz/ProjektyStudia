let nKL, kostkaKL, pionkiGracz1KL, pionkiGracz2KL;
let ruchGracz1KL, ruchGracz2KL, canMoveKL;
let planszaTabKL;

function loadKL(){
    nKL = 10, kostkaKL=0;
    ruchGracz1KL=true, ruchGracz2KL=false, canMoveKL=false;
    planszaTabKL = document.getElementById("planszaKL");
    document.getElementById("gameKL").style.display="none";
}

function zrobPlanszeKL(){
    for(let iKL=0; iKL<nKL; iKL++){
        let rowKL = planszaTabKL.insertRow(iKL);
        for(let jKL=0; jKL<nKL; jKL++){
            let cellKL = rowKL.insertCell(jKL);
            cellKL.id = iKL+"."+jKL;
            cellKL.innerHTML = cellKL.id;
            if(iKL==0 &&(jKL==0 || jKL==1 || jKL==2)) cellKL.style.background = "blue";
            if(iKL==nKL-1 &&(jKL==nKL-1 || jKL==nKL-2 || jKL==nKL-3)) cellKL.style.background = "red";
            if(((iKL>0 && iKL<nKL-1) && (jKL>0 && jKL<nKL-1))) {
                cellKL.style.background = "rgb(162, 222, 252)";
                cellKL.innerHTML = "";
            }
            else cellKL.className = "border";

            cellKL.onclick = function(){
                if(cellKL.innerHTML && canMoveKL){
                    if(ruchGracz1KL && cellKL.style.background == "blue"){
                    // move blue
                        moveKL(cellKL.id, cellKL.style.background);
                    }
                    else if (ruchGracz2KL && cellKL.style.background == "red"){
                    // move red
                        moveKL(cellKL.innerHTML, cellKL.style.background);
                    }
                }
            };
        }
    }
}

function moveKL(numKL, kolorKL){
    ruchKL = parseInt(numKL) + parseInt(kostkaKL);
    canMoveKL = false;
    if(kolorKL == "blue"){
        if(ruchKL>=nKL*4-4) ruchKL-= nKL*4-4;
        let newMovedKL = document.getElementById(ruchKL);
        
        if(newMovedKL.style.background == "red"){
        // Zbij gracza 2
            document.getElementById("statPionkiGracz2KL").innerHTML = --pionkiGracz2KL;
            if(pionkiGracz2KL == 0) document.getElementById("statPionkiGracz1KL").innerHTML = "Wygraleś!";
        }
        else if(newMovedKL.style.background == "blue"){
        // Jesli pole jest tego samego koloru - przejdz na nastepne
            while(newMovedKL.style.background == "blue") {
                ruchKL++;
                if(ruchKL>=nKL*4-4) ruchKL-= nKL*4-4;
                newMovedKL=document.getElementById(++ruchKL);
            }
        }
        newMovedKL.style.background = "blue";
        document.getElementById("wynikKostkaKL").innerHTML = "Rzuć kostką (Gracz 2)";
    }
    else if(kolorKL == "red"){
        ruchKL+nKL*nKL-1;
        if(ruchKL>=nKL*4-4) ruchKL-= nKL*4-4;
        let newMovedKL = document.getElementById(ruchKL);

        if(newMovedKL.style.background == "blue"){
        // Zbij gracza 1
            document.getElementById("statPionkiGracz1KL").innerHTML = --pionkiGracz1KL;
            if(pionkiGracz1KL == 0) document.getElementById("statPionkiGracz2KL").innerHTML = "Wygraleś!";
        }
        else if(newMovedKL.style.background == "red")
        // Jesli pole jest tego samego koloru - przejdz na nastepne
            while(newMovedKL.style.background == "red") {
                ruchKL++;
                if(ruchKL>=nKL*4-4) ruchKL-= nKL*4-4;
                newMovedKL=document.getElementById(ruchKL);
            }
        newMovedKL.style.background = "red";
        document.getElementById("wynikKostkaKL").innerHTML = "Rzuć kostką (Gracz 1)";
    }
    if(ruchGracz1KL) { ruchGracz1KL=false; ruchGracz2KL=true; }
    else { ruchGracz1KL=true; ruchGracz2KL=false; }
    document.getElementById(numKL).style.background = "aquamarine";
    kostkaKL = 0;
}

function polaGryKL(nKL){
/*
    Wypisz numery pól na planszy
*/
    let numKL = 0;
    // up
    for(let iiKL=0; numKL<nKL-1; numKL++, ++iiKL){
        document.getElementById("0."+iiKL).innerHTML = numKL; 
        document.getElementById("0."+iiKL).id = numKL; 
    }
    // right
    for(let iiKL=0; iiKL<nKL-1; numKL++, iiKL++){
        document.getElementById(iiKL+"."+(nKL-1)).innerHTML = numKL; 
        document.getElementById(iiKL+"."+(nKL-1)).id = numKL; 
    }
    // down
    for(let iiKL=nKL-1; iiKL>0; numKL++, iiKL--){
        document.getElementById((nKL-1)+"."+iiKL).innerHTML = numKL; 
        document.getElementById((nKL-1)+"."+iiKL).id = numKL; 
    }
    // left
    for(let iiKL=nKL-1; iiKL>0; numKL++, iiKL--){
        document.getElementById(iiKL+".0").innerHTML = numKL; 
        document.getElementById(iiKL+".0").id = numKL; 
    }
}

function rzutKostkaKL(){
    return Math.floor(Math.random()*6+1);
}

function rzutKL(){
    if(isNaN(document.getElementById("wynikKostkaKL").innerHTML)){
        kostkaKL = rzutKostkaKL();
        document.getElementById("wynikKostkaKL").innerHTML = kostkaKL;
        canMoveKL = true;
    }
}


function initTabelaKL(tabelaKL){
    // generuj plansze
    for(let k=0; k<nKL; k++)
        tabelaKL[k] = [];
    
    for(let i=0; i<nKL; i++){
        for(let j=0; j<nKL; j++)
            tabelaKL[i][j]=0;
    }
}

function nowaGraKL(){
    // nowa gra
    document.getElementById("gameKL").style.display="initial";
    ruchGracz1KL=true, ruchGracz2KL=false;
    kostkaKL = 0, pionkiGracz1KL=3, pionkiGracz2KL=3;
    nKL = document.getElementById("sizeKL").value;
    if (nKL>20) nKL=20; else if(nKL<3) nKL=3;
    document.getElementById("sizeKL").value =nKL;
    document.getElementById("planszaKL").innerHTML ="";
    document.getElementById("wynikKostkaKL").innerHTML = "Rzuć kostką";
    document.getElementById("statPionkiGracz1KL").innerHTML = pionkiGracz1KL;
    document.getElementById("statPionkiGracz2KL").innerHTML = pionkiGracz2KL;
    zrobPlanszeKL();
    polaGryKL(nKL);
}