/** @format */

//! Inheritance
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function area() {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

//! Template Literals
function sides(literals, ...expressions) {
  let a = expressions[0];
  let b = expressions[1];
  let s1 = (b + (b ** 2 - 16 * a) ** 0.5) / 4;
  let s2 = (b - (b ** 2 - 16 * a) ** 0.5) / 4;
  let arr = [s1, s2].sort();
  return arr;
}

//! Arrow Functions
function modifyArray(nums) {
  return nums.map((item) => (item % 2 === 0 ? item * 2 : item * 3));
}
