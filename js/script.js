console.log('JS OK')

/* 
Il programma dovrà chiedere all' utente il numero dei chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio secondo queste regole:
- il prezzo del biglietto è definito in base ai km ( 0.21 euro al km )
- va applicatop uno sconto del 20% per i minorenni 
- va applicatop uno sconto del 40% per gli over 65
- L' output del prezzo finale va messo fuori in forma umana, ossia con massimo due decimali, per indicare i centesimi sul prezzo. 
*/

// Mi preparo l' elemento del DOM in cui stampare il messaggio di base
const displayPrice = document.getElementById('display-price');
let priceMessage = 'Il prezzo del tuo biglietto è ';

// Raccolgo i dati dall' utente
const kms = parseInt(prompt('Inserire la lunghezza della tratta in KM', '30'));
const age = parseInt(prompt("Inserite l' età del passeggero", '17'));

console.log('kms', kms);
console.log('age', age);

// Calcolo il prezzo (di base)
let price = kms * 0.21;
console.log('prezzo base', price);

// Verificare età per eventuali sconti
if (age < 18) {
    price *= 0.8;
}
else if (age > 65) {
    price *= 0.6;
}

// Prepara il messaggio finale
priceMessage += price.toFixed(2) + ' Euro';
console.log(priceMessage);

// Stampa prezzo in pagina
displayPrice.innerText = priceMessage;
