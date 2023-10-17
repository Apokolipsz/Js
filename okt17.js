console.log("\u001B[41m") //<-- consol színezése szín kódok 73-83 sorok ban
/*
for(let i = 0; i < 5; i++){ //<-- ciklus kezdése
    const temp = 4 - i
    console.log(temp, i)  //<-- ki írás
} 

for(let i = 0; i < 5; i++){
    const temp = 4 - i
    console.log(`Első szám: ${temp}, második szám: ${i} `) //${} parancs használata consolbans
}
*/

// háromszög területe



const prompt = require("prompt-sync")(); //<-- prompt-sync letöltöt adat lekérése
/*

let a = prompt("oldal hosszúsága?: ") //<-- adat be kérés
a = parseInt(a) //<-- szöveg átalakítása számá
let ma = prompt("magasága mekkora?: ")
ma = parseInt(ma)
mo = a*ma/2 //<-- kiszámolsá
console.log(mo,"cm\u00b2")

// rövidités

/*
let a = parseInt(prompt("oldal hosszúsága?: "))
let ma = parseInt(prompt("magasága mekkora?: "))
console.log(a*ma/2,"cm\u00b2")
*/
/*
const text = "szia"

if (text === "szia") { //<-- mi legyen
    console.log("hello")
} else if (text === "hello") { //<-- ha nem történik meg
    console.log("szia")
} else {
    console.log("cső")
}

switch(text){ //<-- másabb if
    case "szia": //<--elenőrzés
        console.log("hello")
        break;
    case "hello": //<-- második elenőrzési pont
        console.log("szia")
        break;
    default: //<-- ha nem érzékeli egyiket se
        console.log("cső")
        break; //<-- ne folytasa a codot
}
*/

//tömbök

/*
const array = [1,2,3,4,5] //<-- tömb
const array1 = [6,7,8]
const array2 = array.concat(array1) //<-- rakja össze a tömböket
console.log(array2[6])

const arrow = parseInt(prompt("melyik kell 0-4?: "))
console.log(array[arrow] ) //melyiket szeretnéds
console.log(array.slice(1,3)) //menyitől mennyit szeretnél

// közép pont megkeresése / behejetesítés

const tomb = [] //<-- tömb
    for(let i = 0; i < 10; i++) {
        tomb.push(i) //<-- számok tömbe berakása
    }
console.log(tomb)
const tom = tomb.length / 2
if(tomb.length % 2 == 0) { //<-- elenőrizük hogy egész vagy sem (páros, páratlanhoz)
    console.log(tomb.slice(tom-1, tom+1)) //<-- középső karakterek ki írása
} else {
    const index1 = Math.floor(tomb)//<-- a tömbfelének egész lefelekerekítése
    console.log(tomb[index1])
}
*/


//fogalmak

//for
//push
//let
//if
//else
//const
//parseInt
//prompt-sync
//prompt
//require
//npm
//switch if nehezebe
// /* */, //
//slice
//index
//concat
//lenght
//math
//floor



/*
színeznim a terminált:
Fekete_Háttér = "\u001B[40m";
Piros_Háttér = "\u001B[41m";
Zöld_Háttér = "\u001B[42m";
Sárga_Háttér = "\u001B[43m";
Kék_Háttér = "\u001B[44m";
Lila_Háttér = "\u001B[45m";
Cián_Háttér = "\u001B[46m";
Fehér_Háttér = "\u001B[47m";

többért néz fel: https://gist.github.com/enten/cef219142ca6350cdd07ef6b58eb7636
*/