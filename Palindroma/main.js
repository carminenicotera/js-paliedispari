//chiedere all'utente di inserire una parola
const word = prompt('Inserisci una parola: ');

//funzione che inverte la parola inserita
function reversedWord (word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    reversedWord += char;
  }
  return reversedWord;
}

//funzione che verifica se la parola inserita è palindroma e restituisce un booleano
function isPalindroma (word, wordReverted) {
  for (let i = 0; i < word.length ; i++) {
    if (word[i] !== wordReverted[i]) {
      return false;
    }
  }
  return true;
}

//assegno alla variabile il valore di ritorno della funzione reverseWord
const revWord = reversedWord(word);
console.log(revWord);

//assegno alla variabile il valore di ritorno della funzione isPalindroma e verifico se la parola inserita è palindroma
const verify = isPalindroma(word, revWord);
verify ? console.log('La parola inserita è palindroma!') : console.log('La parola inserita non è palindroma!');