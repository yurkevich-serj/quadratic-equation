'use strict'
module.exports = function solveEquation(equation) {
  let array = equation.split(' ');
  let a = array[0];
  let b = array.slice(3,5).join('');
  let c = array.slice(7,10).join('');
  let discriminant= b*b - 4*a*c;
  let x1 = (-b + Math.sqrt(discriminant))/2/a;
  let x2 = (-b - Math.sqrt(discriminant))/2/a;
  
  return [Math.round(Math.min(x1,x2)),Math.round(Math.max(x1,x2))];



}
