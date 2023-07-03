let operatory = ['+','-','*','/'];

function load(){
    workingOperators();
}

function workingOperators(){
    let selectOps = document.getElementById("selectOperator");
    for (item of operatory){
        let option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        selectOps.appendChild(option);
    }
}

function obliczWynik(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let d = parseInt(document.getElementById("d").value);
    let operator = document.getElementById("selectOperator").value;
    let g = h = 0;
    switch(operator){
        case "+": g = a+c; h = b+d; break;
        case "-": g = a-c; h = b-d; break;
        case "*": g = a*c-b*d; h = a*d + b*c; break;
        case "/": g = Math.round((a*c + b*d)/(c*c + d*d)*1000)/1000; h = Math.round((b*c - a*d)/(c*c + d*d)*1000)/1000; break;
        default: break;
    }
    document.getElementById("wynik").value = g+" "+operator+" "+h+"i";
    wstawWiersz((a+b+"i"), operator, (c+d+"i"), (g+h+"i"));
}

function wstawWiersz(n1, op, n2, result){
    let wiersz = document.createElement('tr');
    let N1 = document.createElement('td');
    N1.innerHTML = n1;
    wiersz.appendChild(N1);
    let OP = document.createElement('td');
    OP.innerHTML = op;
    wiersz.appendChild(OP);
    let N2 = document.createElement('td');
    N2.innerHTML = n2;
    wiersz.appendChild(N2);
    let equal = document.createElement('td');
    equal.innerHTML = "=";
    wiersz.appendChild(equal);
    let RESULT = document.createElement('td');
    RESULT.innerHTML = result;
    wiersz.appendChild(RESULT);
    let DELETE = document.createElement('td');
    DELETE.innerHTML = "delete";
    wiersz.appendChild(DELETE);
    let tablica = document.getElementById("memoryObliczenia");
    tablica.appendChild(wiersz);
    DELETE.onclick = function(){
        this.parentElement.remove();
    }

}