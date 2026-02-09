//chiedere all'utente di inserire una parola
const word = prompt('Inserisci una parola: ');

//funzione che inverte la parola inserita
function reversedWord (word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    reversedWord += char;
  }
  console.log(reversedWord);
}