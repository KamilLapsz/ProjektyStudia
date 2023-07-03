let nKL = 10; // wielkosc planszy
let ileKlikniecKL, wynikKL=0;
let planszaTabKL;
let planszaStatekKL = [];
let planszaSasiadKL = [];


function loadKL(){
    planszaTabKL = document.getElementById("plansza");
    initTabelaKL(planszaStatekKL);
    initTabelaKL(planszaSasiadKL);
    document.getElementById("gameKL").style.display = "none";
    document.getElementById("startKL").style.display = "initial";

}
function zrobPlanszeKL(){
    for(let iKL=0; iKL<nKL; iKL++){
        let rowKL = planszaTabKL.insertRow(iKL);
        for(let jKL=0; jKL<nKL; jKL++){
            let cellKL = rowKL.insertCell(jKL);
            cellKL.innerHTML = "*";
            cellKL.id = iKL+"."+jKL;
            cellKL.onclick = function(){
                // onclick
                if(zakres(iKL,jKL)){
                    cellKL.innerHTML = "click";
                    // TODO
                    if(planszaStatekKL[iKL][jKL] && (cellKL.innerHTML != 1)){
                        document.getElementById("ileTrafienKL").innerHTML= wynikKL++;
                        cellKL.innerHTML = 1;
                        //cellKL.style.backgroundColor="green";
                    }
                    else{
                        cellKL.innerHTML = "0";
                        //cellKL.style.backgroundColor="blue";
                    }
                    document.getElementById("ileKlikKL").innerHTML = ileKlikniecKL--;
                    
                }
                if(event.ctrlKey){
                    if(cellKL.innerHTML != "+")
                        cellKL.innerHTML = "+";
                    else if(cellKL.innerHTML == "+")
                        cellKL.innerHTML = "*";
                }
                if(event.altKey){
                    if(cellKL.innerHTML != "-")
                        cellKL.innerHTML = "-";
                    else if(cellKL.innerHTML == "-")
                        cellKL.innerHTML = "*";
                }
                if(event.shiftKey){
                    //todo
                }
            };
            cellKL.onmouseenter = function(){
                // mouse enter
                for(let ii=iKL-1; ii<=iKL+1; ii++){
                    for(let jj=jKL-1; jj<=jKL+1; jj++){
                        if(zakres(ii,jj)){
                            if(planszaSasiadKL[iKL][jKL]==1)
                                document.getElementById(ii+"."+jj).style.backgroundColor="red";
                            else
                                document.getElementById(ii+"."+jj).style.backgroundColor="yellow";
                        }
                    }
                }
            };
            cellKL.onmouseleave = function(){
                // mouse leave
                for(let ii=iKL-1; ii<=iKL+1; ii++){
                    for(let jj=jKL-1; jj<=jKL+1; jj++){
                        if(zakres(ii,jj)){
                            document.getElementById(ii+"."+jj).style.backgroundColor="aquamarine";
                        }
                    }
                }
                
            };
        }
    }
}
function zakres(iKL, jKL){
    return (0<=1)&&(iKL<nKL)&&(0<=jKL)&&(jKL<nKL)
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
function losujStatkiKL(){
    let statekLiczbaKL = nKL;
    let maxLosowanKL = 100;
    let losowaniaKL = 0;
    while(statekLiczbaKL>0 && losowaniaKL<maxLosowanKL){
        let iKL= Math.floor(Math.random()*nKL);
        let jKL= Math.floor(Math.random()*nKL);
        document.getElementById("ileKlikKL").innerHTML = ++losowaniaKL;
        if(planszaSasiadKL[iKL][jKL]==0){
            planszaStatekKL[iKL][jKL]= 1;

            statekLiczbaKL--;
            for(let iiKL=iKL-1; iiKL<=iKL+1; iiKL++){
                for(let jjKL=jKL-1; jjKL<=jKL+1; jjKL++){
                    if(zakres(iiKL, jjKL)) planszaSasiadKL[iiKL][jjKL]=1;
                }
            }
        }
    }
}

function nowaGraKL(){
    // nowa gra
    nKL = document.getElementById("sizeKL").value;
    ileKlikniecKL = nKL;
    document.getElementById("plansza").innerHTML ="";
    document.getElementById("ileTrafienKL").innerHTML="0";
    zrobPlanszeKL();
    document.getElementById("gameKL").style.display = "initial";
    document.getElementById("startKL").style.display = "none";
    losujStatkiKL();
}
