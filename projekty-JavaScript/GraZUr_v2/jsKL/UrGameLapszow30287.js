let nKL, ileKlikniecKL, ileTrafienKL;
let planszaTabKL;

function loadKL(){
    nKL = 10, ileKlikniecKL = 0, ileTrafienKL = 0;
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
                if(cellKL.innerHTML){
                    if(cellKL.style.background == "blue"){
                    // move blue
                        moveKL(cellKL.id, cellKL.style.background);
                        statsKL();
                    }
                    else if (cellKL.style.background == "red"){
                    // move red
                        moveKL(cellKL.innerHTML, cellKL.style.background);
                        statsKL();
                    }
                }
            };
        }
    }
}

function moveKL(numKL, kolorKL){
    ruchKL = parseInt(numKL) + parseInt(kostkaKL());
    if(kolorKL == "blue"){
        if(ruchKL>=nKL*4-4) ruchKL=0;
        let newMovedKL = document.getElementById(ruchKL);
        if(newMovedKL.style.background == "red"){
            document.getElementById("ileTrafienKL").innerHTML = ++ileTrafienKL;
            console.log("bonk|BLUE");
        }
        else if(newMovedKL.style.background == "blue")
            document.getElementById("ileTrafienKL").innerHTML = ++ileTrafienKL;
        newMovedKL.style.background = "blue";
        document.getElementById(numKL).style.background = "aquamarine";
    }
    else if(kolorKL == "red"){
        console.log("ID:"+numKL +" |Ruch:"+ ruchKL )
        ruchKL+18;
        if(ruchKL>=nKL*4-4) ruchKL=0;
        let newMovedKL = document.getElementById(ruchKL);
        if(newMovedKL.style.background == "blue"){
            document.getElementById("ileTrafienKL").innerHTML = ++ileTrafienKL;
            console.log("bonk|RED");
        }
        else if(newMovedKL.style.background == "red")
            document.getElementById("ileTrafienKL").innerHTML = ++ileTrafienKL;
        newMovedKL.style.background = "red";
        document.getElementById(numKL).style.background = "aquamarine";
    }
}

function polaGryKL(nKL){
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

function kostkaKL(){
    return Math.floor(Math.random()*6+1);
}

function statsKL(){
    document.getElementById("ileKlikKL").innerHTML =++ileKlikniecKL;
    document.getElementById("nietrafienKL").innerHTML = ileKlikniecKL-ileTrafienKL;
    document.getElementById("zostaloKL").innerHTML = 6-ileTrafienKL;
}

function graczAKL(){

}
function graczBKL(){
    
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
    nKL = document.getElementById("sizeKL").value;
    if (nKL>20) nKL=20; else if(nKL<3) nKL=3;
    document.getElementById("sizeKL").value =nKL;
    ileKlikniecKL = 0, ileTrafienKL = 0;
    document.getElementById("planszaKL").innerHTML ="";
    document.getElementById("ileTrafienKL").innerHTML = ileTrafienKL;
    document.getElementById("nietrafienKL").innerHTML = ileKlikniecKL;
    document.getElementById("zostaloKL").innerHTML ="6";
    zrobPlanszeKL();
    polaGryKL(nKL);
}