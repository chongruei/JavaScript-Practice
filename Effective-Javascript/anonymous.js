"use strict"

function sandwitchMaker(magicIngredient) {
  return function(filling) {  // Anonymous function
    return magicIngredient + ' and ' + filling;
  }
}

console.log(sandwitchMaker('ham')('egg')) // ham and egg
