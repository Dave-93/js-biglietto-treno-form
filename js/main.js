let inputKm = document.querySelector("#input-km");
let inputAge = document.querySelector("#input-age");
const submitButton = document.querySelector("#submit-button")
let outputPrice;

submitButton.addEventListener("click", function(event){
    event.preventDefault()

    /* 
    //Vedo il contenuto ed il tipo degli input
    console.log(inputKm.value, typeof(inputKm))
    console.log(inputAge.value, typeof(inputAge))
     */

    // Ottieni i valori degli input e li converte da stringa in numeri
    //const km = Number(inputKm.value);    meglio ParseInt o Number??
    //const age = Number(inputAge.value);  meglio ParseInt o Number??
    const km = parseInt(inputKm.value); 
    const age = parseInt(inputAge.value);
    /* 
    //Controlla il contenuto ed il tipo degli input trasformati
    console.log(km, typeof(km))
    console.log(age, typeof(age))
    */

    // Calcola gli sconti
    const scontoUnder18 = (km * 0.21) * 20 / 100;
    const scontoOver65 = (km * 0.21) * 40 / 100;

    // Verifica che i valori sono numerici e che i km e l'età siano superiori a zero, altrimenti ricarica la pag per inserirli nuovamente
    if(isNaN(km) || isNaN(age) || km <= 0 || age <= 0){
        alert("Inserisci i dati correttamente. Per favore ricarica la pagina!");
        location.reload();
    } else if(age < 18){  //Determina il prezzo finale con lo sconto Under18
        outputPrice = (km * 0.21) - scontoUnder18;
    }else if(age > 65){ //Determina il prezzo finale con lo sconto Over65
        outputPrice = (km * 0.21) - scontoOver65;
    } else{ //Determina il prezzo finale senza sconto
        outputPrice = (km * 0.21)
    }
    console.log(`Il costo del suo biglietto è ${outputPrice.toFixed(2).replace(".",",")} €`);
    }
)
