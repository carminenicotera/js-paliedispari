//chiedo all'utente i vari input
const num = prompt('Inserisci un numero da 1 a 5: ');
const pariDispari = prompt('Digita pari o dispari!');

//funzione che genera un numero da 1 a 5 per il computer
function randomNumber () {
  const randomNumb = Math.floor(Math.random() * 5) + 1;
  return randomNumb;
}

//funzione che somma i due numeri
function sum(num1, num2) {
  return num1 + num2;
}

//funzione che verifica se la somma dei due numeri è pari o dispari
function pariDispari(somma) {
  if (somma % 2 == 0)
    return true;
  return false;
}

