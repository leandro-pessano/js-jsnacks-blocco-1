// Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità

var sentinella = false;
var numeroRandom = Math.floor(Math.random()*100) +1;
console.log(numeroRandom);

alert('Indovina un numero da 1 a 100. Hai 4 tentativi.')

i=0;
while (i < 4 && sentinella == false) {
  var numeroUtente = prompt('Indovina il numero');

  if (i == 2) {
    var num = 1;
  } else if (i == 1) {
    var num = 2;
  } else if (i == 0) {
    var num = 3;
  }

  if (numeroUtente == numeroRandom){
    sentinella = true;
    alert('Hai vinto');
  } else if (i == 3) {
    alert('Hai perso')
  } else if (numeroUtente < numeroRandom) {
    alert('Il numero da indovinare è più alto. Hai ' + num + ' tentativi')
  } else if (numeroUtente > numeroRandom) {
    alert('Il numero da indovinare è più basso. Hai ' + num + ' tentativi')
  }
  i++;
}
