// Mail
// Chiedi all’utente la sua email, X
// controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati), X
// stampa un messaggio appropriato sull’esito del controllo.


// array email
const email = ["mihai@gmail.com", "domenico@gmail.com", "francesco@gmail.com", "ivan@gmail.com"];

// mail inserita

const loginBtn = document.querySelector('#mb_login')
const diceStart = document.querySelector("#button_dice");

loginBtn.addEventListener('click', function(){
  const userMail = document.getElementById('useremail').value;
  let convalidEmail = false;
  
  
  for (let i=0; i < email.length; i++) {
    console.log(i,email[i],userMail);
    if (email[i] === userMail){
      convalidEmail = true;
    }
  } 

  if (convalidEmail){
    const output= document.getElementById("output_text")
    document.getElementById("output_text").innerHTML ="Loggato correttamente";
  } else {
    document.getElementById("output_text").innerHTML ="Registrati per poter accedere";
  }
});


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

console.log(diceStart)
diceStart.addEventListener('click', function(){
  const player = Math.ceil(Math.random()*6)
  console.log('Player ',player)

  const comp =Math.ceil(Math.random()*6)
  console.log('Computer',comp)

  if(player > comp){
    document.querySelector("#winner").innerHTML ="HAI VINTO!"
  } else if (player == comp){
    document.querySelector("#winner").innerHTML ="HAI PAREGGIATO!"
  } else {
    document.querySelector("#winner").innerHTML ="HAI PERSO!"
  };

});
