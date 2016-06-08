function Calculator () {};

Calculator.sum = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

Calculator.sumWithSomeHelp = function(numberOne, numberTwo) {
  return Calculator.sum(numberOne, numberTwo);
};

Calculator.subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
};

Calculator.makeAnIntegration = function() {
  console.log("Doing the heavy integration");
  return false;
}

Calculator.invokeAnIntegration = function() {
  return Calculator.makeAnIntegration();
}
