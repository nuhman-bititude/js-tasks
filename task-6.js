// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit

function convertCelsius(fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9);
  console.log(celsius);
}

function convertFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
}
convertCelsius(60);
convertFahrenheit(45);
