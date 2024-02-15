document.getElementById("celsiusForm").onsubmit = function(e) {
    e.preventDefault(); // Prevent form submission
    convertCelsiusToFahrenheit();
};

document.getElementById("fahrenheitForm").onsubmit = function(e) {
    e.preventDefault(); // Prevent form submission
    convertFahrenheitToCelsius();
};

function convertCelsiusToFahrenheit() {
    var celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    if (isNaN(celsiusInput)) {
        alert("Input temperature is not valid.");
        return;
    }
    var fahrenheitTemp = (celsiusInput * 9/5) + 32;
    document.getElementById("celsiusResult").innerText = "Result: " + fahrenheitTemp.toFixed(2) + " Fahrenheit";
}

function convertFahrenheitToCelsius() {
    var fahrenheitInput = parseFloat(document.getElementById("fahrenheitInput").value);
    if (isNaN(fahrenheitInput)) {
        alert("Input temperature is not valid.");
        return;
    }
    var celsiusTemp = (fahrenheitInput - 32) * 5/9;
    document.getElementById("fahrenheitResult").innerText = "Result: " + celsiusTemp.toFixed(2) + " Celsius";
}
