/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(elemento, array) {
    for (var i = 0; i< array.length; i++) {
        if (elemento == array[i]) {
            return true;
        }
    }
    return false
}

var numeri = [];

for (var i = 0; i < 5; i++) {
    numeri.push(randomNumber(0, 99));
}
console.log(numeri);
alert("Memorizza i seguenti numeri\n" + numeri);

var tentativiCorretti = [];

for (var i = 1; i <= 5; i++) {
    var tentativo = parseInt(prompt("Inserisci il " + i + "° numero"))
    if (isInArray(tentativo, numeri)) {
        tentativiCorretti.push(tentativo)
    }
}
console.log(tentativiCorretti);

if (tentativiCorretti.length > 0) {
    alert("Hai indovinato " + tentativiCorretti.length + " numeri:\n" + tentativiCorretti)
} else {
    alert("Non hai indovinato nessun numero")
}

