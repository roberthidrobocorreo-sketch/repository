//crear un programa que muestre la letra de una cancion siguiendo el ritmo - wilver
const prompt = require("prompt-sync")();
const dibujar = require('./modulo.js');

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

console.clear();

//beggin' segundo 0:25
let letra_1 = "i'm beggin', beggin' you";
let letra_2 = "so put your loving hands out, baby";

let letra_4 = "so put your loving hands out, darlin'";

//frase 1
for(let i=0;i<letra_1.length;i++)
{
    if(i >= 21)
    {
        dibujar( i,2, letra_1[i]);
        sleep(350);
    }
    else{
    dibujar( i,2, letra_1[i]);
    sleep(100);
    }
}
console.clear();

//frase 2
for(let i=0;i<letra_2.length;i++)
{
    if(i >= 33)
    {
        dibujar( i,2, letra_2[i]);
        sleep(350);
    }
    else{
    dibujar( i,2, letra_2[i]);
    sleep(70);
    }
}

//frase 3
sleep(330)
console.clear();
for(let i=0;i<letra_1.length;i++)
{
    if(i >= 21)
    {
        dibujar( i,2, letra_1[i]);
        sleep(350);
    }
    else{
    dibujar( i,2, letra_1[i]);
    sleep(100);
    }
}
console.clear();

//frase 4
for(let i=0;i<letra_4.length;i++)
{
    dibujar( i,2, letra_4[i]);
    sleep(70);
}
console.clear();


