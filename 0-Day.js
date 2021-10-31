//! Hello World
function greeting(parameterVariable) {
  console.log('Hello, World!');
  console.log(parameterVariable);
}

//! Data Types
function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  console.log(firstInteger + Number(secondInteger));
  const firstDecimal = 4.0;
  console.log(firstDecimal + parseFloat(secondDecimal));
  const firstString = 'HackerRank ';
  console.log(firstString + secondString);
}
