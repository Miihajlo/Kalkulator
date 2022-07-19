let Broj1;
let Broj2;
let ZnakInterpunkcije;
// korak 1: dodelimo vrednosti promenljivama za sve buttone
// korak 2: 
let display = document.getElementById("head1");
let brojKlikova = 0;
let dugme7 = document.getElementById("btn7");
dugme7.addEventListener("click", () => {
    if (brojKlikova === 0) {
        promenljiva1 = 7;
        display.innerHTML = "7";
        brojKlikova += 1;
    }
    else {
        promenljiva2 = 7;
        display.innerHTML += "7";
    }
});
let dugme8 = document.getElementById("btn8");
dugme8.addEventListener("click", () => { 
    if (brojKlikova === 0) {
        display.innerHTML = "8";
        brojKlikova += 1;
        promenljiva1 = 8;
    }
    else {
        promenljiva2 = 8;
        display.innerHTML += "8";
    }

});
let dugme9 = document.getElementById("btn9");
dugme9.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "9";
        brojKlikova += 1;
        promenljiva1 = 9;
    }
    else {
        promenljiva2 = 9;
        display.innerHTML += "9";
    }

});
let dugmeplus = document.getElementById("btnPlus");
dugmeplus.addEventListener("click", () => {
    ZnakInterpunkcije = "+";
    if (brojKlikova === 0) {
        display.innerHTML = "+";
        brojKlikova += 1;
    }
    else {
        display.innerHTML += "+";
    }

});
let dugme4 = document.getElementById("btn4");
dugme4.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "4";
        brojKlikova += 1;
        promenljiva1 = 4;
    }
    else {
        promenljiva2 = 4;
        display.innerHTML += "4";
    }

});
let dugme5 = document.getElementById("btn5");
dugme5.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "5";
        brojKlikova += 1;
        promenljiva1 = 5;
    }
    else {
        promenljiva2 = 5;
        display.innerHTML += "5";
    }

});
let dugme6 = document.getElementById("btn6");
dugme6.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "6";
        brojKlikova += 1;
        promenljiva1 = 6;
    }
    else {
        promenljiva2 = 6;
        display.innerHTML += "6";
    }

});
let dugmeminus = document.getElementById("btnMinus");
dugmeminus.addEventListener("click", () => {
    ZnakInterpunkcije = "-";
    if (brojKlikova === 0) {
        display.innerHTML = "-";
        brojKlikova += 1;
    }
    else {
        display.innerHTML += "-";
    }

});
let dugme1 = document.getElementById("btn1");
dugme1.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "1";
        brojKlikova += 1;
        promenljiva1 = 1;
    }
    else {
        promenljiva2 = 1;
        display.innerHTML += "1";
    }

});
let dugme2 = document.getElementById("btn2");
dugme2.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "2";
        brojKlikova += 1;
        promenljiva1 = 2;
    }
    else {
        promenljiva2 = 2;
        display.innerHTML += "2";
    }

});
let dugme3 = document.getElementById("btn3");
dugme3.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "3";
        brojKlikova += 1;
        promenljiva1 = 3;
    }
    else {
        promenljiva2 = 3;
        display.innerHTML += "3";
    }

});
let dugmeputa = document.getElementById("btnPuta");
dugmeputa.addEventListener("click", () => {
    ZnakInterpunkcije = "*";
    if (brojKlikova === 0) {
        display.innerHTML = "*";
        brojKlikova += 1;
    }
    else {
        display.innerHTML += "*";
    }

});
let dugme0 = document.getElementById("btn0");
dugme0.addEventListener("click", () => {
    if (brojKlikova === 0) {
        display.innerHTML = "0";
        brojKlikova += 1;
    }
    else {
        display.innerHTML += "0";
    }

});
let dugmepodeljeno = document.getElementById("btnPodeljeno");
dugmepodeljeno.addEventListener("click", () => {
    ZnakInterpunkcije = "/";
    if (brojKlikova === 0) {
        display.innerHTML = "/";
        brojKlikova += 1;
    }
    else {
        display.innerHTML += "/";
    }

});
let dugmeJednako = document.getElementById("btnJednako");
dugmeJednako.addEventListener("click", () => {
    debugger
    brojKlikova = 0;
    if (ZnakInterpunkcije === "+") {
        display.innerHTML = promenljiva1 + promenljiva2;
    }
    else if(ZnakInterpunkcije === "-"){
        display.innerHTML = promenljiva1 - promenljiva2;
    }
    else if(ZnakInterpunkcije === "*"){
        display.innerHTML = promenljiva1 * promenljiva2;
    }
    else{
        display.innerHTML = promenljiva1 / promenljiva2;
    }
});


