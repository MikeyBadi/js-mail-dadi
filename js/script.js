// Mail
// Chiedi all’utente la sua email, X
// controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati), X
// stampa un messaggio appropriato sull’esito del controllo.


// array email
const email = ["mihai@gmail.com", "domenico@gmail.com", "francesco@gmail.com", "ivan@gmail.com"]

// mail inserita
const userMail = prompt('Inserisci di seguito la tua mail')

let convalidEmail = false

for (let i=0; i < email.length; i++) {
  console.log(i)
  if (email[i] === userMail){
    convalidEmail = true;
    const output= document.getElementById("output_text")
    document.getElementById("output_text").innerHTML ="Loggato correttamente"
  } else {
    document.getElementById("output_text").innerHTML ="Registrati per poter accedere"
  }
}

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const diceStart = document.querySelector("#button_dice")
