let sizeKL, currentKL, timeKL, time2KL;
let wynikKL;
let planszaTabKL;
let liczbyKL = [];

function loadKL(){
    //document.getElementById("gameKL").style.display = "none";
    planszaTabKL = document.getElementById("planszaKL");
    sizeKL = 3, currentKL = 0;
    inicjujLiczbyKL(sizeKL);
    //zrobPlanszeKL();
}
function zrobPlanszeKL(){
    document.getElementById("planszaKL").innerHTML = "";
    for(let iKL=0; iKL<sizeKL; iKL++){
        let rowKL = planszaTabKL.insertRow(iKL);
        for(let jKL=0; jKL<sizeKL; jKL++){
            let cellKL = rowKL.insertCell(jKL);
            cellKL.id = iKL+"."+jKL;
            cellKL.innerHTML = liczbyKL[iKL*sizeKL+jKL];
            cellKL.onclick = function(){
                if(currentKL == sizeKL*sizeKL-1)
                    document.getElementById("currentKL").innerHTML = "Koniec gry";
                else if(cellKL.innerHTML == currentKL){
                    time2KL = Date.now();
                    wynikKL += time2KL-timeKL;
                    currentKL++;
                    document.getElementById("wynikKL").innerHTML = Math.floor(wynikKL);
                    document.getElementById("currentKL").innerHTML = currentKL;
                }
            }
        }
    }
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
    zrobPlanszeKL();
    inicjujLiczbyKL(sizeKL);
    timeKL = Date.now();
    currentKL=0, wynikKL=0;
    document.getElementById("wynikKL").innerHTML = 0;
    document.getElementById("currentKL").innerHTML = 0;
}