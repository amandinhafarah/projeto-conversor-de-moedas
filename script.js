const convertButton = document.getElementById("convert-button");
const currencySelect = document.getElementById("currency-select");

convertButton.addEventListener("click", convertValues);


function convertValues() {

    const inputCurrencyValue = document.querySelector("#input-currency").value;
    const currencyValueToConvert = document.getElementById("currency-value-to-convert");
    const currencyConvertedValue = document.getElementById("currency-value");

    const dolarToday = 5.44;
    const euroToday = 6.09;
    const libraToday = 7.29;
    const bitcoinToday = 417.238;


    if (currencySelect.value == "euro") {

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday); //Transforma o valor convertido em texto e coloca no elemento HTM
    }

    if (currencySelect.value == "dolar") {

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday); //Transforma o valor convertido em texto e coloca no elemento HTML
    }
    
    if (currencySelect.value == "libra") {

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday); //Transforma o valor convertido em texto e coloca no elemento HTML
    }

    if (currencySelect.value == "bitcoin") {

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday); //Transforma o valor convertido em texto e coloca no elemento HTML
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue); //Transforma o valor digitado em texto e coloca no elemento HTML
    
}

currencySelect.addEventListener("change", changeCurrency);

function changeCurrency() {
    const currencyNameConverter = document.getElementById("currency-name-converter");
    const currencyImage = document.getElementById("currency-image-converter");

    if (currencySelect.value == "euro") {
        currencyNameConverter.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencySelect.value == "dolar") {
        currencyNameConverter.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencySelect.value == "libra") {
        currencyNameConverter.innerHTML = "Libra Esterlina";
        currencyImage.src = "./assets/libra.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyNameConverter.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertValues()
}
