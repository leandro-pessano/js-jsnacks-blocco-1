//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1, parola2;

parola1 = prompt('Inserisci una parola');
parola2 = prompt('Inserisci un\'altra parola');

if (parola1.length > parola2.length) {
  console.log(parola1);
}   else if (parola2.length > parola1.length) {
    console.log(parola2);
}
