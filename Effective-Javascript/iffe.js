"use strict"
/*
function wrapElements(a) {
  var result = [], i, n
  for (i = 0, n = a.length; i < n; i++) {
    result[i] = function() {return a[i]}
  }
  return result
}

var wrapped = wrapElement([10, 20, 30, 40, 50])
var f = wrapped[0]
console.log(f()) //undefined
*/

function wrapElements(b) {
  var result = [], i, n
  for (i = 0, n = b.length; i < n; i++) {
    (function(j) {
      result[i] = function() {return b[j]}
    })(i)  // immediately invoked function expression IIFE 
  }
  return result
} 

var wrapped = wrapElements([10, 20, 30, 40, 50])
var f = wrapped[0]
console.log(f()) //10