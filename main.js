let email = prompt('inserisci la tua email.')
console.log(email);

alert("Verifica Email");

let listaEmail = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];
console.log(listaEmail);

let emailTrovata = false

for (let i = 0; i < listaEmail.length; i= i+1){
    console.log(listaEmail[i]);
    if (listaEmail[i] == email){
    emailTrovata = true
    }
}

if (emailTrovata == true){
    alert("indirizzo email corretto")
    
}
else {
    alert("indirizzo email sbagliato")
}

// Gioco del dado

let max = 6
let min = 1

let giocatore1 = math.floor(math.random() * (max - min +1) + min);
let giocatore2 = math.floor(math.random() * (max - min +1) + min);

math.floor(math.random() * (max - min +1) + min);

if(giocatore1 > giocatore2){
    alert.giocatore1("Hai vinto")
}else{
    ()
}


