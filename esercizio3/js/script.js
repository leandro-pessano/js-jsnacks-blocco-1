// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati, nomeInput, messaggio;

invitati = ['Nick', 'Daisy', 'Jordan', 'Jay', 'Myrtle'];
nomeInput = prompt('Inserisci un nome');
nomeInput = nomeInput.charAt(0).toUpperCase() + nomeInput.substring(1).toLowerCase();
messsaggio = false;

for (var i = 0; i < invitati.length; i++) {
  if (nomeInput == invitati[i]) {
    messaggio = true;
  }
}

if (messaggio) {
  console.log('Puoi partecipare');
} else {
  console.log('Non puoi partecipare');
}

console.log(nomeInput);
