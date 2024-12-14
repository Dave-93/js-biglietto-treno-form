let inputKm = document.querySelector("#input-km");
let inputAge = document.querySelector("#input-age");
const submitButton = document.querySelector("#submit-button")
let outputPrice;

submitButton.addEventListener("click", function(event){
    event.preventDefault()

    
    //Vedo il contenuto ed il tipo degli input
    console.log(inputKm.value, typeof(inputKm))
    console.log(inputAge.value, typeof(inputAge))
    
    // Ottieni i valori degli input e li converte da stringa in numeri
    //const km = Number(inputKm.value);    meglio ParseInt o Number??
    //const age = Number(inputAge.value);  meglio ParseInt o Number??
    const km = parseInt(inputKm.value); 
    const age = parseInt(inputAge.value);
    
    //Controlla il contenuto ed il tipo degli input trasformati
    console.log(km, typeof(km))
    console.log(age, typeof(age))
   
    }
)
