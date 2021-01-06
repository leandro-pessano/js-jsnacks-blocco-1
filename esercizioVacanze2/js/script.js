// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti. //
var sceltaUtente, numeroRandom, sceltaComputer, punti;

punteggioUtente = [];
punteggioComputer = [];

while (punteggioUtente.length < 4 && punteggioComputer.length < 4) {
  sceltaUtente = prompt('Scegli sasso, carta o forbice');
  numeroRandom = Math.floor(Math.random()*3) +1;

  if (numeroRandom == 1) {
    sceltaComputer = 'sasso';
  } else if (numeroRandom == 2) {
    sceltaComputer = 'carta';
  } else if (numeroRandom == 3){
    sceltaComputer = 'forbice';
  }

  if (sceltaUtente == 'sasso' && sceltaComputer == 'forbice' || sceltaUtente == 'forbice' && sceltaComputer == 'carta' || sceltaUtente == 'carta' && sceltaComputer == 'sasso') {
    punteggioUtente.push(1);
    alert('Hai vinto! Hai scelto: ' + sceltaUtente + '. Il computer ha scelto: ' + sceltaComputer);
  } else if (sceltaComputer == 'sasso' && sceltaUtente == 'forbice' || sceltaComputer == 'forbice' && sceltaUtente == 'carta' || sceltaComputer == 'carta' && sceltaUtente == 'sasso') {
    punteggioComputer.push(1);
    alert('Hai perso! Hai scelto: ' + sceltaUtente + '. Il computer ha scelto: ' + sceltaComputer);
  } else {
    alert('Pareggio! Hai scelto: ' + sceltaUtente + '. Il computer ha scelto: ' + sceltaComputer)
  }

}

console.log('Punteggio Utente: ' + punteggioUtente.length);
console.log('Punteggio Computer: ' + punteggioComputer.length);
