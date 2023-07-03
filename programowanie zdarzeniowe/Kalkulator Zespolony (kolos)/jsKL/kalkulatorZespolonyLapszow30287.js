let punktyKL = 0;
let czySprawdzKL = false;

function loadKL(){
    document.getElementById("kalkulatorKL").style.display="initial";
    document.getElementById("historiaKL").style.display=("none");
}
function doHistoriiKL(){
    document.getElementById("kalkulatorKL").style.display=("none");
    document.getElementById("historiaKL").style.display=("initial");
}
function doKalkulatorKL(){
    document.getElementById("kalkulatorKL").style.display=("initial");
    document.getElementById("historiaKL").style.display=("none");
}

function generujKL(){
    czySprawdzKL = true;
    let minKL = 3;
    let maxKL = 7;
    let tempKL = ['a','b','c','d'];
    for(let itemKL of tempKL){
        let randKL = Math.floor(Math.random() * (maxKL + minKL)) - minKL;
        document.getElementById(itemKL + "KL").value = randKL;
    }
    document.getElementById("wynik_gKL").value = "";
    document.getElementById("wynik_hKL").value = "";
    document.getElementById("eKL").value = "";
    document.getElementById("fKL").value = "";
}

function obliczWynikKL(){
    let aKL = parseInt(document.getElementById("aKL").value);
    let bKL = parseInt(document.getElementById("bKL").value);
    let cKL = parseInt(document.getElementById("cKL").value);
    let dKL = parseInt(document.getElementById("dKL").value);
    let eKL = parseInt(document.getElementById("eKL").value);
    let fKL = parseInt(document.getElementById("fKL").value);
    let operatorKL = document.getElementById("selectOperatorKL").value;
    let gKL = hKL = 0;
    switch(operatorKL){
        case "+": gKL = aKL+cKL; hKL = bKL+dKL; break;
        case "-": gKL = aKL-cKL; hKL = bKL-dKL; break;
        case "*": gKL = aKL*cKL-bKL*dKL; hKL = aKL*dKL + bKL*cKL; break;
        default: break;
    }

    if(czySprawdzKL){
        if(eKL==gKL && fKL==hKL){
            punktyKL++;
        }
        czySprawdzKL = false;
        document.getElementById("punktyKL").innerHTML = punktyKL;
        document.getElementById("wynik_gKL").value = gKL;
        document.getElementById("wynik_hKL").value = hKL;
        wstawWierszKL((aKL+ "+" +bKL+"i"), operatorKL, (cKL+ "+" +dKL+"i"), (gKL+"+"+hKL+"i"), (eKL+"+"+fKL+"i"));
    }
}

function zerujWynikKL(){
    document.getElementById("punktyKL").innerHTML = 0;
    punktyKL = 0;
    czySprawdzKL = false;
    let tempKL = ['a','b','c','d','e','f','wynik_g','wynik_h'];
    for(let itemKL of tempKL){
        document.getElementById(itemKL + "KL").value = "";
    }

    // usun wiersze - usuwa tabele, tworzy pierwszy wiersz
    document.getElementById("memoryObliczeniaKL").innerHTML = "";
    let tableKL = document.getElementById("memoryObliczeniaKL");

    let rowKL = tableKL.insertRow(tableKL.rows.lenght);
    rowKL.style.fontWeight = "bold";
    rowKL.insertCell(0).innerHTML = "z1";
    rowKL.insertCell(1).innerHTML = "operator";
    rowKL.insertCell(2).innerHTML = "z2";
    rowKL.insertCell(3).innerHTML = "=";
    rowKL.insertCell(4).innerHTML = "z1 +z2";
    rowKL.insertCell(5).innerHTML = "wpis";
    rowKL.insertCell(6).innerHTML = "punkty"; 
    rowKL.insertCell(6).innerHTML = ""; 
}

function wstawWierszKL(n1KL, opKL, n2KL, resultKL, wpisKL){

    let tableKL = document.getElementById("memoryObliczeniaKL");
    let rowKL = tableKL.insertRow(tableKL.rows.lenght);

    rowKL.insertCell(0).innerHTML = n1KL;
    rowKL.insertCell(1).innerHTML = opKL;
    rowKL.insertCell(2).innerHTML = n2KL;
    rowKL.insertCell(3).innerHTML = "=";
    rowKL.insertCell(4).innerHTML = resultKL;
    rowKL.insertCell(5).innerHTML = wpisKL;
    rowKL.insertCell(6).innerHTML = punktyKL; 
    rowKL.insertCell(7).innerHTML = '<input type="button" onclick="usunWierszKL()" value="usuń"></input>';

}
function usunWierszKL(){
    var tdKL = event.target.parentNode; 
    var trKL = tdKL.parentNode; 
    let wynikKL = trKL.cells[4].innerHTML;
    let wpisKL = trKL.cells[5].innerHTML;

    //usun punkt jesli bylo dobrze
    if (wynikKL == wpisKL){
        punktyKL--; 
        document.getElementById("punktyKL").innerHTML = punktyKL;
    }
    
    trKL.parentNode.removeChild(trKL);
}

