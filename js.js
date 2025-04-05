// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/*



-verificare se l'utente è ambassador
    -SE SI (sconto del 30%)
    -SE NO (nessuno sconto)
    _se carrello costo maggiore uguale a 100
        - spedizione gratuita
        -altrimenti aggiungi (shoppingCost) per coprire il costo di spedizione

- determinare il costo totale del carrello
*/



// NOTA: il totale è nella varibaile checkout, essendo statica seguiranno due esempi in cui la stessa variabile avrà un valore differrente( i dati saranno uguali, per renderne eseguibile uno è necessario commentare l'altro)

// definire variabili,

//ESEMPIO NUMERO UNO (checkout minore <100)

const shippingCost = 50
let sconto = 0


let utenti = [
    {nome: "Pietro", cognome: "Verdi", isAmbassador: true}
]
utenti.push({nome: "Giovanni", cognome: "Querce", isAmbassador: false})
utenti.push({nome: "Lino", cognome: "Banfi", isAmbassador: false})
utenti.push({nome: "Peppe", cognome: "Pavia", isAmbassador: true})
utenti.push({nome: "Fausto", cognome: "Milano", isAmbassador: true})

let onlyAmbassador = [
    {nome: "Pietro", cognome: "Verdi", isAmbassador: true,
    nome: "Peppe", cognome: "Pavia", isAmbassador: true,
    nome: "Fausto", cognome: "Milano", isAmbassador: true}
    ]

for(let i = 0; i<utenti.length; i++) {
    if (utenti[i].isAmbassador) {
        console.log(`${utenti[i].nome} ${utenti[i].cognome} è un Ambassador`)
    } else if (utenti[i].isAmbassador == false) {
        console.log(`${utenti[i].nome} ${utenti[i].cognome} non è un Ambassador`)
    }
    checkout = 90
    if (utenti[i].isAmbassador) {
        sconto = (checkout * 30) / 100
        checkout -= sconto 
        console.log(`Sei un Ambassador quindi viene applicato lo sconto del 30%, quindi il totale è ${checkout}`)
    } else if(checkout > 100) {
        sconto = (checkout * 30) / 100
        checkout -= sconto 
        console.log(`Hai acquistato per piu di euro 100 quindi viene applicato lo sconto del 30%, quindi il totale è ${checkout}`)
    } else if (utenti[i].isAmbassador == false && checkout > 100) {
        sconto = (checkout * 30) / 100
        checkout -= sconto 
        console.log(`Hai acquistato per piu di euro 100 quindi viene applicato lo sconto del 30%, quindi il totale è ${checkout}`)
    } else {
        checkout += shippingCost
        console.log(`Non sei ambassador quindi il totale è ${checkout}`)
    }
}


//ESEMPIO NUMERO DUE (checkout minore <100)


/*const shippingCost = 50
let sconto = 0


let utenti = [
    {nome: "Pietro", cognome: "Verdi", isAmbassador: true}
]
utenti.push({nome: "Giovanni", cognome: "Querce", isAmbassador: false})
utenti.push({nome: "Lino", cognome: "Banfi", isAmbassador: false})
utenti.push({nome: "Peppe", cognome: "Pavia", isAmbassador: true})
utenti.push({nome: "Fausto", cognome: "Milano", isAmbassador: true})

let onlyAmbassador = [
    {nome: "Pietro", cognome: "Verdi", isAmbassador: true,
    nome: "Peppe", cognome: "Pavia", isAmbassador: true,
    nome: "Fausto", cognome: "Milano", isAmbassador: true}
    ]

for(let i = 0; i<utenti.length; i++) {
    if (utenti[i].isAmbassador) {
        console.log(`${utenti[i].nome} ${utenti[i].cognome} è un Ambassador`)
    } else if (utenti[i].isAmbassador == false) {
        console.log(`${utenti[i].nome} ${utenti[i].cognome} non è un Ambassador`)
    }
    checkout = 140
    if (utenti[i].isAmbassador) {
        sconto = (checkout * 30) / 100
        checkout -= sconto 
        console.log(`Sei un Ambassador quindi viene applicato lo sconto del 30%, quindi il totale è ${checkout}`)
    } else if(checkout > 100) {
        sconto = (checkout * 30) / 100
        checkout -= sconto 
        console.log(`Hai acquistato per piu di euro 100 quindi viene applicato lo sconto del 30%, quindi il totale è ${checkout}`)
    } else if (utenti[i].isAmbassador == false && checkout > 100) {
        sconto = (checkout * 30) / 100
        checkout -= sconto 
        console.log(`Hai acquistato per piu di euro 100 quindi viene applicato lo sconto del 30%, quindi il totale è ${checkout}`)
    } else {
        checkout += shippingCost
        console.log(`Non sei ambassador quindi il totale è ${checkout}`)
    }
}*/
       





    










 









