
const output1 = document.getElementById('output1');

const raccolto = [
  {
    varieta : 'tonde',
    peso : 700,
    lunghezza : '14',
  },

  {
    varieta : 'nera',
    peso : 400,
    lunghezza : '19',
  },

  {
    varieta : 'tonde',
    peso : 350,
    lunghezza : '11',
  },

  {
    varieta : 'verde',
    peso : 420,
    lunghezza : '21',
  },

  {
    varieta : 'tonde',
    peso : 365,
    lunghezza : '12',
  },

  {
    varieta : 'verde',
    peso : 290,
    lunghezza : '17',
  },

  {
    varieta : 'nera',
    peso : 475,
    lunghezza : '10',
  },

  {
    varieta : 'tonde',
    peso : 330,
    lunghezza : '18',
  },

  {
    varieta : 'nera',
    peso : 410,
    lunghezza : '16',
  },

  {
    varieta : 'tonde',
    peso : 335,
    lunghezza : '14',
  },

]

// const {peso, varieta} = raccolto;

// console.log(peso,varieta);

// SNACK 1
let pesoTotale = 0;

for ( const {peso} of raccolto){
  console.log(peso);
  pesoTotale += peso;
}
output1.innerHTML = `Il peso totale delle zucchine è di ${pesoTotale} gr `
console.log(pesoTotale);

// SNACK 2
const zucchineUnder15 = [];
const zucchineOver15 = [];

for ( const zucchina of raccolto){
  if (parseInt(zucchina.lunghezza)< 15) {
    zucchineUnder15.push(zucchina)
  } else {
    zucchineOver15.push(zucchina)
  }

  console.log(zucchineOver15, zucchineUnder15);
}

let pesoTotaleOver = 0;
let pesoTotaleUnder = 0;


for ( const {peso} of zucchineOver15){
  console.log(peso);
  pesoTotaleOver += peso;
}
for ( const {peso} of zucchineUnder15){
  console.log(peso);
  pesoTotaleUnder += peso;
}

const output2 = document.getElementById('output2');

output2.innerHTML = `Il peso totale delle zucchine over 15 cm è di ${pesoTotaleOver} gr invece Il peso totale delle zucchine under 15 cm è di ${pesoTotaleUnder} gr `


// SNACK3

const stringaIniziale = "Ciao";
const stringaGirata = reverseStringa(stringaIniziale);
console.log(stringaGirata);

// funzione
function reverseStringa(stringa) {
  return stringa.split('').reverse().join('');
}

// SNACK4

const arrayLettere = ['a', 'b', 'c'];
const arrayNumeri = [1, 2, 3];
const arrayFuso = fondaArray(arrayLettere, arrayNumeri);

// funzione
function fondaArray(arrayLettere, arrayNumeri) {
  const lunghezza = arrayLettere.length; 
  const risultato = [];

  for (let i = 0; i < lunghezza; i++) {
      risultato.push(arrayLettere[i], arrayNumeri[i]);
  }

  return risultato;
}

console.log(arrayFuso);

// SNACK5

const arrayOriginale = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = 2;
const b = 5;
const arrayFiltrato = filtraArrayPerPosizione(arrayOriginale, a, b);
console.log(arrayFiltrato); 

// funzione
function filtraArrayPerPosizione(array, a, b) {
  if (a < 0 || b >= array.length || a >= b) {
      // Se i parametri non sono validi, restituisci un array vuoto
      return [];
  }

  return array.slice(a, b + 1);
}
