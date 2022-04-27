//! Arrays
function getSecondLargest(nums) {
  let delDublicate = [...new Set(nums)];
  console.log(delDublicate);
  let newArray = delDublicate.sort((a, b) => b - a);
  return newArray[1];
}

//! Try, Catch and Finally
function reverseString(s) {
  try {
    let array = s.split('');
    let reverseString = array.reverse().join('');
    console.log(reverseString);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

//! Throw
function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else if (a < 0) {
    throw new Error('Negative Error');
  } else {
    throw new Error('Zero Error');
  }
}
