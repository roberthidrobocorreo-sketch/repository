const prompt = require("prompt-sync")();
const dibujar = require('./modulo.js');

const a=("Temes");
const b=("sentir mas de la cuenta");
const c=("el corazon es un musculo si no late, revienta");
const d=("Extraño");
const e=("mirarte de lejos");
const f=("de hacernos los tontos, parecemos tan viejos");
const g=("Tiempo, humm");
const h=("quieres mas tiempo");
const j=("mirame la piel no ves");
const k=("no ves acaso lo que siento");
const l=("tu eres para mi");
const m=("yo soy para ti");
const n=("El viento me lo dijo con un soplo suavesillo");

console.clear();

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<a.length;i++)
{
    dibujar( i,2, a[i]);
    sleep(100);
}
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<b.length;i++)
{
    dibujar( i,2, b[i]);
    sleep(90);
}    
  console.clear();  
   function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<c.length;i++)
{
    dibujar( i,2, c[i]);
    sleep(60);
}  
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<d.length;i++)
{
    dibujar( i,2, d[i]);
    sleep(85);
}   
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<e.length;i++)
{
    dibujar( i,2, e[i]);
    sleep(55);
}
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<f.length;i++)
{
    dibujar( i,2, f[i]);
    sleep(70);
} 
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<g.length;i++)
{
    dibujar( i,2, g[i]);
    sleep(90);
    
}
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<h.length;i++)
{
   dibujar( i,2, h[i]);
    sleep(70);
}
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<j.length;i++)
{
    dibujar( i,2, j[i]);
    sleep(50);
} 
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<k.length;i++)
{
    dibujar( i,2, k[i]);
    sleep(45);
}   
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<l.length;i++)
{
    dibujar( i,2, l[i]);
    sleep(90);
} 
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
for(let i=0;i<m.length;i++)
{
    dibujar( i,2, m[i]);
    sleep(90);
}  
console.clear();
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

for(let i=0;i<n.length;i++)
{
    dibujar( i,2, n[i]);
    sleep(55);
}    
console.log("\n\nEres para mi")