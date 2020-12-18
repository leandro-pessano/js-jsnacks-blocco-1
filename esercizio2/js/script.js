// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numeri = [];

for (var i = 0; i < 6; i++) {
  numeroInput = parseInt(prompt('Inserisci un numero'));
  if (numeroInput % 2 != 0) {
    numeri.push(numeroInput);
  }
}

console.log(numeri);
