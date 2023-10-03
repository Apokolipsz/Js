/* forciklus  */

console.log("# forciklus")

for (let i = 0/* kezdés */; i < 4/* vége */; i++) {
    console.log(i/* a kettő közti számok */)
}

/* páros páratlan */

console.log("# páros páratlan")

const num = 5345435345543 /* végleges nem meg változtatható érték */

console.log("maradék: ", num % 2)

if (num % 2 == 0) {
    console.log("páros")
} else {
    console.log("páratlan")
}

/* egybe */

console.log("#egybe")

for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("páros")
    } else {
        console.log("páratlan")
    }
}

/* sorolás */

const character = "x"/* tag */ 
const space = " " /* közök */

for (let u = 1; u < 5; u++) {
    let temp = ""

    let spaces = 5 - u
    let chars = u /* character számolások */

    for (let z = 0; z < spaces; z++) {
        temp += space /* space elhelyezése */
        
    }

    for (let z = 0; z < chars; z++) {
        temp += character + character
    }
    
    console.log(temp)
}

for (let u = 5; u >= 1; u--) {
    let temp = ""

    let spaces = 5 - u
    let chars = u

    for (let z = 0; z < spaces; z++) {
        temp += space 
        
    }

    for (let z = 0; z < chars; z++) {
        temp += character + character
    }

    console.log(temp)
}

/* név lekérés */

const prompt = require("prompt-sync"/* letöltöt pack */)();

const name1 = prompt("add meg a neved: "/* érték megadás */)
if (name1 === "Apokolipsz"/* engedélyezet tagok */) {
    console.log("Üdvözölek")
} else {
    console.log("ismeretlen név")
}