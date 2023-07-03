let sizeKL, currentKL, wynikKL;
let planszaTabKL;
let liczbyKL = [];

function loadKL(){
    //document.getElementById("gameKL").style.display = "none";
    planszaTabKL = document.getElementById("planszaKL");
    sizeKL = document.getElementById("userSizeKL").value;
    if (sizeKL > 15){
        sizeKL = 15;
        document.getElementById("userSizeKL").value = 15;
    }
    currentKL = 0;
    inicjujLiczbyKL(sizeKL);
}

function zrobPlanszeKL(){
    document.getElementById("planszaKL").innerHTML = "";
    for(let iKL=0; iKL<sizeKL; iKL++){
        let rowKL = planszaTabKL.insertRow(iKL);
        for(let jKL=0; jKL<sizeKL; jKL++){
            let cellKL = rowKL.insertCell(jKL);
            cellKL.id = iKL+"."+jKL;
            cellKL.innerHTML = liczbyKL[iKL*sizeKL+jKL];
            if(cellKL.innerHTML == 0){
                document.getElementById(iKL+"."+jKL).style.background = "black";
            }
                
            cellKL.onclick = function(){
                if(cellKL.innerHTML >0){
                    nearZeroKL(iKL, jKL);
                }
            }
        }
    }
}


function nearZeroKL(iKL, jKL){
    let aKL = document.getElementById((iKL-1) +"."+ jKL);
    let bKL = document.getElementById((iKL+1) +"."+ jKL);
    let cKL = document.getElementById(iKL +"."+ (jKL-1));
    let dKL = document.getElementById(iKL +"."+ (jKL+1));

    if(aKL)
        if(aKL.innerHTML == "0" )
            moveZeroKL(iKL,jKL, aKL);
    if(bKL)
        if(bKL.innerHTML == "0" )
            moveZeroKL(iKL,jKL, bKL);
    if(cKL)
        if(cKL.innerHTML == "0" )
            moveZeroKL(iKL,jKL, cKL);
    if(dKL)
        if(dKL.innerHTML == "0" )
            moveZeroKL(iKL,jKL, dKL);

}

function moveZeroKL(iKL, jKL, nKL){
    nKL.innerHTML = document.getElementById(iKL+"."+jKL).innerHTML;
    document.getElementById(iKL+"."+jKL).innerHTML = "0";
    document.getElementById(iKL+"."+jKL).style.background = "black";
    nKL.style.background = "aquamarine";
    currentKL++;
    document.getElementById("currentKL").innerHTML = currentKL;
}


function inicjujLiczbyKL(nKL){
    for(let iKL=0; iKL<nKL*nKL; iKL++){
        liczbyKL[iKL] = iKL;
    }
    shuffleKL(liczbyKL);
}

function shuffleKL(arrayKL) {
    for (let iKL = arrayKL.length - 1; iKL > 0; iKL--) {
        const cKL = Math.floor(Math.random() * (iKL + 1));
        [arrayKL[iKL], arrayKL[cKL]] = [arrayKL[cKL], arrayKL[iKL]];
    }
}


function startGameKL(){
    loadKL();
    zrobPlanszeKL();
    currentKL=0;
    document.getElementById("wynikKL").innerHTML = 0;
    document.getElementById("currentKL").innerHTML = currentKL;
}