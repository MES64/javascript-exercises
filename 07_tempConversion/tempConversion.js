const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelsius = (temperatureInFahrenheit - 32) * (5 / 9);
  return roundToOneDecimalPlace(temperatureInCelsius);
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let temperatureInFahrenheit = temperatureInCelsius * (9 / 5) + 32;
  return roundToOneDecimalPlace(temperatureInFahrenheit);
};

function roundToOneDecimalPlace(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
