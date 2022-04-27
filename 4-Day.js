//! Create a Rectangle Object
function Rectangle(a, b) {
  let obj = { length: a, width: b, perimeter: (a + b) * 2, area: a * b };
  return obj;
}

//! Count Object
function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i += 1) {
    if (objects[i].x == objects[i].y) {
      count += 1;
    }
  }
  return count;
}

//! Classes
class Polygon {
  constructor(length) {
    this.length = length;
  }

  perimeter() {
    let result = 0;
    for (let i = 0; i < this.length.length; i += 1) {
      result += this.length[i];
    }
    return result;
  }
}
