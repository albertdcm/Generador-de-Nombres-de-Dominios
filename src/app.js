import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

// Generador de dominios básicos y domain hacks
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      let domain = p + a + n;

      // Imprime con todas las extensiones normales
      for (let ext of extensions) {
        console.log(domain + ext);
      }

      // Implementación de un "domain hack"
      // Si el final del sustantivo coincide con una extensión, aplica el hack
      for (let ext of extensions) {
        if (domain.endsWith(ext.slice(1))) {
          let hack = domain.slice(0, -ext.length + 1) + '.' + ext.slice(1);
          console.log('(Hack) ' + hack);
        }
      }
    }
  }
}
