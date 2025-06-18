console.log("...");
/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
  Steps:
apri postman e crea una nuova collection black(vuota)
nella collection crea una nuova request cliccando sui tre pallini affianco al nome
copia il link del campo della request
clicca save e send per inviare la chiamata http tramite postman
Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch
Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati
Adesso PENSA: devo fare la stessa cosa per 10 volte:  che strumento mi permette di ripetere qualcosa usando un contatore ?
  Aggiorna la DOM inserendo gli indirizzi generati in una lista
Bonus(opzionale)
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail(sostituendo le altre)
*/

console.log("...");
document.getElementById("btnList").addEventListener("click", () => {
  generateEmail();
});


function generateEmail() {
  document.getElementsByClassName("list").innerHTML = ""
  //ciclo for
  for (let i = 0; i < 10; i++) {
    callRandomEmail();
  }
}
//genera email da chiamata APi

function callRandomEmail() {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
      console.log(callRandomEmail);

      return res.json();
      //   oJSON['response']
    })
    .then(function (email) {


      console.log(email);
      console.log(email.response);

      // scrivo email

      document.getElementsByClassName(
        "List"
      ).innerHTML += `<li>${email.response}</li>`;
    });
}







//stampa email

