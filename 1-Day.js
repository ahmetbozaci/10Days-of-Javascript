//! Arithmetic Operators
function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}

//! Functions
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
//! Let and Cost
function main() {
  const PI = Math.PI;
  let input = readLine();
  console.log(PI * input * input);

  console.log(2 * PI * input);
  try {
    PI = 0;
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
