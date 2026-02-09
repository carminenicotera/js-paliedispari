//chiedo all'utente i vari input
const num = Number(prompt('Inserisci un numero da 1 a 5: '));
const pariDispari = prompt('Digita pari o dispari');
console.log('Hai scelto:', num, pariDispari);


//funzione che genera un numero da 1 a 5 per il computer
function randomNumber() {
  const randomNumb = Math.floor(Math.random() * 5) + 1;
  return randomNumb;
}

//funzione che somma i due numeri
function sum(num1, num2) {
  return num1 + num2;
}

//funzione che verifica se la somma dei due numeri è pari o dispari
function isPariDispari(somma) {
  let message = '';
  if (somma % 2 == 0) {
    return message = 'pari';
  }
  return message = 'dispari';
}

//assegno alla variabile il numero randomico per il computer
const numComputer = randomNumber();
console.log('Il numero scelto dal computer è:', numComputer);

//eseguo la somma dei due numeri tramite la funzione sum
const somma = sum(num, numComputer);
console.log('La somma dei due numeri è:', somma);

//assegno alla variabile il valore di ritorno della funzione pariDispari e verifico chi ha vinto
const result = isPariDispari(somma);
if (result === pariDispari) {
  console.log('Hai vinto!');
} else {
  console.log('Hai perso!');
}