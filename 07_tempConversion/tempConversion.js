const ftoc = function(convertToCelsius) {

  let tempInCelsius = (convertToCelsius-32)*(5/9);
      tempInCelsius = Math.round(tempInCelsius*10)/10;    
      tempInCelsius = parseFloat(tempInCelsius.toFixed(1));

      return tempInCelsius;
};

const ctof = function(convertToFahrenheit) {
  let tempInFahrenheit = (convertToFahrenheit*9/5) + 32;
  tempInFahrenheit = Math.round(tempInFahrenheit*10)/10;    
  tempInFahrenheit = parseFloat(tempInFahrenheit.toFixed(1));

  return tempInFahrenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
