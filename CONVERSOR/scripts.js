const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const conversionSelect = document.querySelector(".conversion-select")
function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const dolarToday = 4.9
    const euroToday = 5.2
    const realToday = 0.5




    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)


    }

    if (currencySelect.value == "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue / realToday)


    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)




}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    convertValues()
}


function changeConversion() {
    const conversionName = document.getElementById("conversion-name")
    const conversionImage = document.querySelector(".conversion-img")
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const dolarToday = 4.9
    const euroToday = 5.2
    const realToday = 0.5

    if (conversionSelect.value == "dolar") {
        conversionName.innerHTML = "Dólar americano"
        conversionImage.src = "./assets/dolar.png"


    }

    if (conversionSelect.value == "euro") {
        conversionName.innerHTML = "Euro"
        conversionImage.src = "./assets/euro.png"


   
    }
    
    if (conversionSelect.value == "real") {
        conversionName.innerHTML = "Real"
        conversionImage.src = "./assets/real.png"
     
        
    
    }




    
}
conversionSelect.addEventListener("change", changeConversion)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
