let nKL;
let ruchGracz1KL, ruchGracz2KL;
let planszaTabKL;

function loadKL(){
    nKL = 10;
    ruchGracz1KL=true, ruchGracz2KL=false;
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
            if(iKL%2 && jKL%2){
                cellKL.style.background = "white";
            }

            cellKL.onclick = function(){
                // opcja 1 (ruch 1)
                if(cellKL.style.background == "white"){
                    if(ruchGracz1KL){
                        if(document.getElementById("czyLewaGoraKL").checked){
                            cellKL.className = "lewa"; 
                            document.getElementById((iKL-1)+"."+jKL).className = "lewa";
                        }
                        else{
                            cellKL.className = "dol";
                            document.getElementById(iKL+"."+(jKL+1)).className = "dol";
                        }
                        
                        cellKL.style.background = "yellow";
                    }
                    else{
                        if(document.getElementById("czyLewaGoraKL").checked){
                            cellKL.className = "gora"; 
                            document.getElementById(iKL+"."+(jKL-1)).className = "gora";
                        }
                        else{
                            cellKL.className = "prawa";
                            document.getElementById((iKL+1)+"."+jKL).className = "prawa";
                        }

                        cellKL.style.background = "red";
                    }
                    nastepnyGraczKL();
                }
                // opcja 2 (ruch 2)
                else if(ruchGracz1KL && cellKL.style.background == "yellow" && (cellKL.className != "lewadol")){
                    if(cellKL.className == "lewa"){
                        cellKL.className = "lewadol";
                        document.getElementById(iKL+"."+(jKL+1)).className = "dol";
                    }
                    else{
                        cellKL.className = "lewadol"; 
                        document.getElementById((iKL-1)+"."+jKL).className = "lewa";
                    }
                    nastepnyGraczKL();
                }
                else if(ruchGracz2KL && cellKL.style.background == "red" && (cellKL.className != "prawagora")){
                    if(cellKL.className == "gora"){
                        cellKL.className = "prawagora";
                        document.getElementById((iKL+1)+"."+jKL).className = "prawa";
                    }
                    else{
                        cellKL.className = "prawagora"; 
                        document.getElementById(iKL+"."+(jKL-1)).className = "gora";
                    }
                    nastepnyGraczKL();
                }
            };
        }
    }
}

function nastepnyGraczKL(){
    if(ruchGracz1KL){
        document.getElementById("ruchKoloruKL").innerHTML = "Czerwony";
        ruchGracz1KL=false; ruchGracz2KL=true;
    }
    else{
        document.getElementById("ruchKoloruKL").innerHTML = "Żółty";
        ruchGracz1KL=true; ruchGracz2KL=false;
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
    nKL = 10;
    document.getElementById("planszaKL").innerHTML ="";
    document.getElementById("ruchKoloruKL").innerHTML ="Żółty";
    zrobPlanszeKL();
}