//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var numero1, numero2;

numero1 = prompt('Inserisci un numero');
numero2 = prompt('Inserisci un altro numero');

if (numero1 > numero2) {
  console.log(numero1);
}   else if (numero2 > numero1) {
    console.log(numero2);
}
